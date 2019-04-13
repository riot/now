import { replaceExtension, sourcemapToString } from './utils'
import { FileBlob } from '@now/build-utils'
import { compile } from '@riotjs/compiler'
import generateHTMLPreview from './generate-html-preview'

// generate the build fingerprint
export const analyze = ({ files, entrypoint }) => files[entrypoint].digest

/**
 * Build the riot files using the file streap API
 * @param   {Files} options.files - https://zeit.co/docs/v2/deployments/builders/developer-guide/#files
 * @param   {string} options.entrypoint - https://zeit.co/docs/v2/deployments/builders/developer-guide/#builder-options
 * @param   {Object} options.config - user options
 * @returns {Files} transformed files output
 */
export async function build({ files, entrypoint, config }) {
  const stream = files[entrypoint].toStream()
  const options = {
    file: entrypoint,
    ...config
  }
  const { data } = await FileBlob.fromStream({ stream })
  const content = data.toString()
  const { code, map } = compile(content, options)

  return {
    // js output
    [replaceExtension(entrypoint, '.js')]: new FileBlob({
      data: `${code}${sourcemapToString(map)}`
    }),
    // html preview
    [replaceExtension(entrypoint, '.html')]: new FileBlob({
      data: generateHTMLPreview(entrypoint)
    }),
    // original source file
    [entrypoint]: files[entrypoint]
  }
}