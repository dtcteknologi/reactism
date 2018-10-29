import { Component } from 'react'
import MainLayout from 'reactis/layout'
import { Button } from 'reactis/elements'
import { css } from 'emotion'
import Link from 'next/link'

class Index extends Component {
  render () {
    const style = css`
      @import url('https://fonts.googleapis.com/css?family=Karla:400,400i,700,700i');
      font-family: 'Karla', sans-serif;
      text-align: center;
      margin-top: 47vh;
      transform: translateY(-50%);
      h1 {
        font-weight: normal;
        font-size: 3rem;
        margin-bottom: 0;
      }
      p {
        color: #666;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      img {
        width: 100px;
      }
    `
  
    return (
      <>
        <MainLayout className={ style }>
          <img src="/static/reactis_logo.png" alt="Reactis Logo"/>
          <h1>Welcome to <b>Reactis</b></h1>
          <p>Reactis is a React Boilerplate based next.js</p>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </MainLayout>
      </>
    )
  }
}

export default Index