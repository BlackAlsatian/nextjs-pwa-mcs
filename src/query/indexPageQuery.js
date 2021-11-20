import fetcher from '../lib/fetcher'
import { ALL_MENUS, ALL_SITE_META, LATEST_POSTS, PAGE_BY_URI } from '../lib/api'

// get index page data
export async function getIndexPageData() {
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)

  let data = {}
  const variables = {
    uri: '/'
  }

  const latestPosts = await fetcher(LATEST_POSTS)
  const pageData = await fetcher(PAGE_BY_URI, { variables })

  return (data = {
    type: 'category',
    menus: menusData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageData?.data?.page?.uri || {},
      seo: pageData?.data?.page?.seo || {},
      page: pageData?.data?.page || {},
      posts: latestPosts?.data?.posts || {}
    }
  })
}
