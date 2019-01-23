import { css } from 'emotion'
import { Color } from 'Utils'

const Background = (theme) => {
  switch (theme) {
    case 'primary':
      return css`
        background-color: ${ Color.primary };
        color: ${ Color.white };
      `

    case 'white':
      return css`
        background-color: ${ Color.white };
        color: ${ Color.dark };
      `

    case 'info':
      return css`
        background-color: ${ Color.info };
        color: ${ Color.white };
      `

    case 'success':
      return css`
        background-color: ${ Color.success };
        color: ${ Color.white };
      `

    case 'warning':
      return css`
        background-color: ${ Color.warning };
        color: ${ Color.font_warning };
      `

    case 'danger':
      return css`
        background-color: ${ Color.danger };
        color: ${ Color.white };
      `

    default:
      return css`
        background-color: ${ Color.light };
        color: ${ Color.dark };
      `
  }
}

export default Background
