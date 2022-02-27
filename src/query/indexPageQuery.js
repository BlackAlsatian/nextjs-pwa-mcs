import { LATEST_POSTS, PAGE_BY_URI } from '../lib/api'
import fetcher from '../lib/fetcher'
import getMenusMetaData from './menusMetaQuery'

// get index page data
export async function getIndexPageData() {
  const { metaData } = await getMenusMetaData()

  const variables = {
    uri: '/'
  }

  const {
    data: { posts }
  } = await fetcher(LATEST_POSTS)
  const {
    data: { page }
  } = await fetcher(PAGE_BY_URI, { variables })

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData: {
        page: page || {},
        posts: posts || {}
      }
    },
    revalidate: 1
  }
}
