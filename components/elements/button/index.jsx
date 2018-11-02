import { css } from 'emotion'
import { Background } from 'reactis/utils'

const Button = ({ children, color, ...props }) => {
  const style = css`
    ${ Background(color) }
    border: 1px solid rgba(0,0,0,.1);
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 3px;
    outline: none;
    margin-right: 5px;
    cursor: pointer;
    transition: all linear .1s;
    &:last-child {
      margin-right: 0;
    }
		&:hover {
			box-shadow: 0 5px 30px rgba(0,0,0,.1);
		}
		&:active {
			transform: scale(.98);
			box-shadow: 0 0 0 rgba(0,0,0,.1);
		}
  `

  return (
    <button className={ style } color={ color } { ...props }>{ children }</button>
  )
}

export default Button
