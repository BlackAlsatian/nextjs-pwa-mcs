export const siteMeta = {
  siteName: 'Motion Control Systems',
  siteDescription: 'IIoT and EDGE',
  siteUrl: process.env.NEXT_PUBLIC_WORDPRESS_LIVE_SITE,
  siteAPIDomain: process.env.NEXT_PUBLIC_WORDPRESS_API_DOMAIN,
  social: {
    twitterSite: '',
    twitterAuthor: ''
  }
}

export const siteConfig = {
  graphQl: process.env.WORDPRESS_API_URL,
  placeHolderImage: '/images/placeholder.png'
}

export const FALLBACK = 'blocking'
