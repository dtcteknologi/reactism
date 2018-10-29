import { Component } from 'react'
import Seo from './partials/seo'

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
    const { loading } = this.state

    const splashscreen = {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
      visibility: `${ loading ? 'visible' : 'hidden' }`,
      opacity: `${ loading ? 1 : 0 }`,
      transition: `${ loading ? 'opacity .1s linear' : 'visibility 0s .1s, opacity .1s linear' }`
    }
    
    return (
      <>
        <Seo title={ this.props.title }/>
        <div style={ splashscreen }><img src="/static/reactis_logo.png" alt="Reactis Logo" width="100px"/></div>
        <section { ...this.props }>
          { this.props.children }
        </section>
      </>
    )
  }
}

export default MainLayout