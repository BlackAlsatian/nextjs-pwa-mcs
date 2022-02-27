import { isEmpty } from 'lodash'
import { ALL_POSTS, LATEST_POSTS, PAGE_BY_URI, POST_BY_SLUG } from '../lib/api'
import fetcher from '../lib/fetcher'
import { getAllPageData, getSlugs } from '../lib/query'
import getMenusMetaData from './menusMetaQuery'

// get blog post page data
export async function getBlogPageData() {
  const { metaData } = await getMenusMetaData()

  const variables = {
    uri: '/blog/'
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
      pageData:
        {
          page: page || {},
          posts: posts || {}
        } || {}
    },
    revalidate: 1
  }
}

// get all category and post slugs and return array of paths
export async function getAllCatPostSlugs() {
  const allPosts = await getSlugs(ALL_POSTS)

  const allPaths = []

  allPosts &&
    allPosts?.posts?.edges.map(post => {
      if (!isEmpty(post?.node?.uri)) {
        const slugs = post?.node?.uri.split('/').filter(postSlug => postSlug)
        allPaths.push({
          params: { slug: slugs }
        })
      }
    })

  return allPaths
}

// all category/posts data
export async function getAllCatPostsData({ params: { slug } }) {
  const { metaData } = await getMenusMetaData()

  const data = {}

  // return if paths don't exist
  if (isEmpty(slug)) {
    return data
  }

  //get post data
  const { post } = await getAllPageData(slug, POST_BY_SLUG, true)

  if (isEmpty(post) || isEmpty(post.uri)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData: post || {}
    },
    revalidate: 60
  }
}
