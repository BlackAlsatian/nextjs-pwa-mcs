import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import { siteMeta } from '../../config/index'

const Seo = ({ seo, uri }) => {
  const {
    title,
    metaDesc,
    metaRobotsNoindex,
    metaRobotsNofollow,
    opengraphDescription,
    opengraphTitle,
    opengraphImage,
    opengraphSiteName
  } = seo

  const currentLocation = process.browser ? window.location.origin : null
  const opengraphUrl =
    (siteMeta.siteUrl ? siteMeta.siteUrl : currentLocation) + uri

  return (
    <NextSeo
      title={title}
      description={opengraphDescription || metaDesc}
      canonical={opengraphUrl}
      noindex={metaRobotsNoindex}
      nofollow={metaRobotsNofollow}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: opengraphUrl,
        title: opengraphTitle,
        description: opengraphDescription,
        images: [
          {
            url: opengraphImage?.sourceUrl,
            width: 1200,
            height: 630
          }
        ],
        /* eslint-disable */
        site_name: opengraphSiteName
        /* eslint-enable */
      }}
      twitter={{
        handle: siteMeta.social.twitterAuthor,
        site: siteMeta.social.twitterSite,
        cardType: 'summary_large_image'
      }}
    />
  )
}

Seo.propTypes = {
  seo: PropTypes.object
}

Seo.defaultProps = {
  seo: {
    canonical: '',
    title: '',
    metaDesc: '',
    metaRobotsNoindex: '',
    metaRobotsNofollow: '',
    opengraphDescription: '',
    opengraphTitle: '',
    opengraphImage: {
      sourceUrl: '/images/og-image-mcs.jpg'
    },
    opengraphUrl: '',
    opengraphSiteName: ''
  }
}

export default Seo
