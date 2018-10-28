import { css } from "emotion"

const Button = ({ children }) => {
  const style = css`
    background-color: #3498db;
    color: #fff;
    border: 1px solid rgba(0,0,0,.1);
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
  `

  return (
    <button className={ style }>{ children }</button>
  )
}

export default Button