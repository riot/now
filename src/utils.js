import compose from 'cumpa'
import { extname } from 'path'

// sourcemap helpers
const JSONToBase64 = json => Buffer.from(JSON.stringify(json)).toString('base64')
export const sourcemapToString = map => `\n//# sourceMappingURL=${JSONToBase64(map)}`

/**
 * Convert a string containing dashes to camel case
 * @param   {string} string - input string
 * @returns {string} my-string -> myString
 */
export function dashToCamelCase(string) {
  return string.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

/**
 * Capitalize the first letter of a string
 * @param   {string} string - input string
 * @returns {string} myString -> MyString
 */
export function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

/**
 * Replace the extension of a file path string
 * @param   {string} path - input file path
 * @param   {string} ext - extension string
 * @returns {string} the original file path with extension replaced
 */
export const replaceExtension = (path, ext) => path.replace(extname(path), ext)

export const campializeAndCamelCase = compose(capitalize, dashToCamelCase)
