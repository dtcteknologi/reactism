import { Component } from 'react'
import Seo from './partials/seo'
import { css } from 'emotion'

class MainLayout extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({ loading: false })
  }
  
  render () {
    const splashscreen = {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    
    return (
      <>
        <Seo title={ this.props.title }/>
        {
          this.state.loading ?
            <div style={ splashscreen }><img src="/static/reactis_logo.png" alt="Reactis Logo" width="100px"/></div>
            :
            null
        }
        <section { ...this.props }>
          { this.props.children }
        </section>
      </>
    )
  }
}

export default MainLayout