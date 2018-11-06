import PropTypes from 'prop-types'
import { cx, css } from 'emotion'
import { Background } from 'reactism/utils'

const Button = ({ children, transparent, color, style, ...props }) => {
  const baseStyle = css`
    ${ transparent ? 'background-color: transparent;' : Background(color) }
    border: 1px solid ${ transparent ? 'transparent' : 'rgba(0,0,0,.1)' };
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
    ${ !transparent ?
      `&:hover {
        box-shadow: 0 5px 30px rgba(0,0,0,.1);
      }
      &:active {
        transform: scale(.98);
        box-shadow: 0 0 0 rgba(0,0,0,.1);
      }`
      : null
    }
  `

  return (
    <button className={ cx(baseStyle, style) } color={ color } { ...props }>{ children }</button>
  )
}

Button.propTypes = {
  color: PropTypes.string
}

Button.defaultProps = {
  color: null
}

export default Button
