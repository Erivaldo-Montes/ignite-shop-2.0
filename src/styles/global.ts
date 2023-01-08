import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    background: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antiliased',
    fontSize: '$md',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
