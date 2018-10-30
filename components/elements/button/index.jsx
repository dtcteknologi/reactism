import { css } from 'emotion'
import { Color } from 'reactis/utils'

const Button = ({ children, ...props }) => {
  const style = css`
    background-color: ${ Color.primary };
    color: #fff;
    border: 1px solid rgba(0,0,0,.1);
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  `

  return (
    <button className={ style } { ...props }>{ children }</button>
  )
}

export default Button
