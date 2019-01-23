import React from 'react'
import Seo from './partials/seo'
import PropTypes from 'prop-types'

const MainLayout = ({ ...props }) => {
  return (
    <>
      <Seo title={ props.title }/>
      <section { ...props }>
        { props.children }
      </section>
    </>
  )
}

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default MainLayout
