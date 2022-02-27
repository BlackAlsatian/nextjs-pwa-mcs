import { LATEST_POSTS, PAGE_BY_URI } from '../lib/api'
import fetcher from '../lib/fetcher'
import getMenusMetaData from './menusMetaQuery'

// get index page data
export async function getIndexPageData() {
  const { metaData } = await getMenusMetaData()

  let data = {}
  const variables = {
    uri: '/'
  }

  const latestPosts = await fetcher(LATEST_POSTS)
  const pageData = await fetcher(PAGE_BY_URI, { variables })

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData: {
        page: pageData?.data?.page || {},
        posts: latestPosts?.data?.posts || {}
      }
    },
    revalidate: 1
  }
}
