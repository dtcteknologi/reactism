import Seo from './partials/seo'

const MainLayout = ({ title, children, ...props }) => {
  return (
    <>
      <Seo title={ title }/>
      <section { ...props }>
        { children }
      </section>
    </>
  )
}

export default MainLayout