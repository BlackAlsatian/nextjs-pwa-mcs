const path = require('path')

module.exports = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NEXT_PUBLIC_WORDPRESS_IMAGE_DOMAIN,
      'secure.gravatar.com',
      'i0.wp.com',
      'i1.wp.com',
      'i2.wp.com',
      'i3.wp.com'
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  staticPageGenerationTimeout: 180
}
