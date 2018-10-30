import React from 'react'
import { css } from 'emotion'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    const style = css`
      @import url('https://fonts.googleapis.com/css?family=Karla|Leckerli+One');
      font-family: 'Karla', sans-serif;
      text-align: center;
      margin-top: 47vh;
      transform: translateY(-50%);
      h1 {
        margin: 0;
        font-weight: normal;
        div {
          font-family: 'Leckerli One', cursive;
          background-color: #000;
          color: #fff;
          display: inline-block;
          margin-right: 20px;
          width: 100px;
          height: 100px;
          line-height: 100px;
          border-radius: 50%;
        }
        span {
          color: #999;
          font-size: 1.5rem;
        }
      }
    `

    return (
      <div className={ style }>
        {
          this.props.statusCode === 404
          ?
          <h1>
            <div>{ this.props.statusCode }</div>
            <span>Page not found!</span>
          </h1>
          :
          <h1>
            <div>{ this.props.statusCode }</div>
            <span>Something wrong!</span>
          </h1>
        }
      </div>
    )
  }
}
