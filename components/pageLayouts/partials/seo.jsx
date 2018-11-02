import Head from 'next/head'
import { withRouter } from 'next/router'
import Meta from 'reactism/config/meta'

const Seo = ({title, description, image, router}) => {
  return (
    <Head>
      {
        (title) ?
          <>
            <title key="title">{ title }</title>
            <meta key="twitter:title" name="twitter:title" content={ title } />
            <meta property="og:title" content={ title } />
          </>
        :
          <>
            <title key="title">{ Meta.title }</title>
            <meta key="twitter:title" name="twitter:title" content={ Meta.title } />
            <meta property="og:title" content={ Meta.title } />
          </>
      }

      {
        (description) ?
          <>
            <meta key="description" name="description" content={ description } />
            <meta key="twitter:description" name="twitter:description" content={ description } />
            <meta property="og:description" content={ description } />
          </>
        :
          <>
            <meta key="description" name="description" content={ Meta.description } />
            <meta key="twitter:description" name="twitter:description" content={ Meta.description } />
            <meta property="og:description" content={ Meta.description } />
          </>
      }

      {
        (image) ?
          <>
            <meta property="og:image" content={ image } />
            <meta name="twitter:image:src" content={ image } />
          </>
        :
          <>
            <meta property="og:image" content={ Meta.image } />
            <meta name="twitter:image:src" content={ Meta.image } />
          </>
      }

      <meta property="og:type" content="website" />
      <meta property="og:url" content={ `${ Meta.url }${ router.asPath }` }/>
      <meta property="og:locale" content={ Meta.locale } />
      <meta property="og:site_name" content={ Meta.site_name } />

      <meta key="twitter:card" name="twitter:card" content={ Meta.twitter.cardType } />
      <meta key="twitter:site" name="twitter:site" content={ Meta.twitter.site } />
      <meta key="twitter:creator" name="twitter:creator" content={ Meta.twitter.creator } />

      <meta property="fb:app_id" content={ Meta.facebook.app_id } />
      <meta property="fb:page_id" content={ Meta.facebook.page_id } />

      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      <meta name="language" content={ Meta.language } />
      <meta name="author" content={ Meta.author } />
      <link rel="canonical" href={ `${ Meta.url }${ router.asPath }` } />
      <link rel="shortcut icon" href={ Meta.favicon } type="image/x-icon"/>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content={ Meta.theme_color }/>
    </Head>
  )
}

export default withRouter(Seo)
