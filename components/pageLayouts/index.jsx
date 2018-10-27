import Head from "next/head"

const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{ title || 'Reactis' }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section>
        { children }
      </section>
    </>
  )
}

export default MainLayout