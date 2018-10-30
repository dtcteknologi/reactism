import { useState, useEffect } from 'react'
import Seo from './partials/seo'

const MainLayout = ({ ...props }) => {
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    setLoading(false)
  })
  
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
      <Seo title={ props.title }/>
      <section { ...props }>
        { props.children }
      </section>
    </>
  )
}

export default MainLayout