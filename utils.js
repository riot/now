import { extname } from 'path'

/**
 * Convert a string containing dashes to camel case
 * @param   {string} string - input string
 * @returns {string} my-string -> myString
 */
export function dashToCamelCase(string) {
  return string.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}

/**
 * Replace the extension of a file path string
 * @param   {string} path - input file path
 * @param   {string} ext - extension string
 * @returns {string} the original file path with extension replaced
 */
export const replaceExtension = (path, ext) => path.replace(extname(path), ext)
