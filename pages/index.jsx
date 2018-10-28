import MainLayout from 'reactis/layout'
import { Button } from 'reactis/elements'
import { css } from 'emotion'

const Index = () => {
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
      color: #999;
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
        <Button>Learn more</Button>
      </MainLayout>
    </>
  )
}

export default Index