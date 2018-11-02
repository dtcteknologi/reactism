import { css } from 'emotion'
import { Color } from 'reactism/utils'

const Background = (theme) => {
	switch (theme) {
		case 'primary':
			return css`
        background-color: ${ Color.primary };
        color: ${ Color.white };
			`
			break

		case 'white':
			return css`
        background-color: ${ Color.white };
        color: ${ Color.dark };
			`
			break

		case 'info':
			return css`
        background-color: ${ Color.info };
        color: ${ Color.white };
			`
			break

		case 'success':
			return css`
        background-color: ${ Color.success };
        color: ${ Color.white };
			`
			break

		case 'warning':
			return css`
        background-color: ${ Color.warning };
        color: ${ Color.font_warning };
			`
			break

		case 'danger':
			return css`
        background-color: ${ Color.danger };
        color: ${ Color.white };
			`
			break

		default:
			return css`
        background-color: ${ Color.light };
				color: ${ Color.dark };
      `
			break
	}
}

export default Background
