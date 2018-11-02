import Seo from './partials/seo'

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

export default MainLayout
