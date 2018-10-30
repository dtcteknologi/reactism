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
      .then(registrations => {
        console.log("service worker registration successful")
      })
      .catch(err => {
        console.warn("service worker registration failed", err.message)
      })
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