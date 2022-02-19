import {
  ALL_MENUS,
  ALL_SITE_META,
  ALL_TAGS,
  POSTS_BY_TAG_ID,
  TAG_BY_SLUG
} from '../lib/api'
import fetcher from '../lib/fetcher'

// get all tag paths
export async function getAllTagSlugs() {
  const response = await fetcher(ALL_TAGS)

  const allTags = response?.data?.tags?.edges

  const paths = allTags.map(tag => {
    return { params: { slug: tag?.node?.slug } }
  })

  return paths
}

// get all tag posts data
export async function getAllTagPostsData(slug) {
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)
  let data = {}
  let variables = {
    slug: slug
  }
  const pageData = await fetcher(TAG_BY_SLUG, { variables })

  variables = {
    tagId: pageData?.data?.tag?.id
  }

  const postsData = await fetcher(POSTS_BY_TAG_ID, { variables })

  return (data = {
    menus: menusData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageData?.data?.tag?.uri || {},
      seo: pageData?.data?.tag?.seo || {},
      pageInfo: pageData?.data?.tag || {},
      posts: postsData?.data?.posts || {}
    }
  })
}
