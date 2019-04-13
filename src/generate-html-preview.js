import { basename, extname } from 'path'
import { campializeAndCamelCase, replaceExtension } from './utils'

const RIOT_VERSION = 'next'

export default function generateHTMLPreview(entrypoint) {
  const componentExtension = extname(entrypoint)
  const componentName = basename(entrypoint, componentExtension)
  const componentNameAsJsName = campializeAndCamelCase(componentName)

  // preview template
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Component Preview - ${componentName}</title>
  <script src='https://unpkg.com/riot@${RIOT_VERSION}/riot.js'></script>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css' />
</head>
<body>
  <${componentName}></${componentName}>

  <script type='module'>
    import ${componentNameAsJsName} from './${replaceExtension(entrypoint, '.js')}'

    riot.component(${componentNameAsJsName})(document.querySelector('${componentName}'))
  </script>
</body>
</html>`
}