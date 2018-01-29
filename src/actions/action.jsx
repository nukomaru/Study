/*
 * action types
 */

export const INPUT_TEXT = 'INPUT_TEXT'

/*
 * action creators
 */

export function inputText(text) {
  return { type: INPUT_TEXT, text }
}