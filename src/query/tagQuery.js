import { isEmpty } from 'lodash'
import { ALL_TAGS, POSTS_BY_TAG_ID, TAG_BY_SLUG } from '../lib/api'
import fetcher from '../lib/fetcher'
import getMenusMetaData from './menusMetaQuery'

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
  const { metaData } = await getMenusMetaData()

  let variables = {
    slug: slug
  }
  const {
    data: { tag }
  } = await fetcher(TAG_BY_SLUG, { variables })

  variables = {
    tagId: tag?.id
  }

  const {
    data: { posts }
  } = await fetcher(POSTS_BY_TAG_ID, { variables })

  if (isEmpty(tag) || isEmpty(tag.uri)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData:
        {
          page: tag || {},
          posts: posts || {}
        } || {}
    },
    revalidate: 60
  }
}
