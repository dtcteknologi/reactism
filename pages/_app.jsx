import React from 'react'
import App, { Container } from 'next/app'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  registerServiceWorker () {
    if (process.env.NODE_ENV === 'production' && "serviceWorker" in navigator) {
      navigator.serviceWorker
      .register('/service-worker.js')
    }
  }

  componentDidMount () {
    this.registerServiceWorker()
  }

  componentDidUpdate () {
    this.registerServiceWorker()
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
