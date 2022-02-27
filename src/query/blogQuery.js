import { isEmpty } from 'lodash'
import { ALL_POSTS, LATEST_POSTS, PAGE_BY_URI, POST_BY_SLUG } from '../lib/api'
import fetcher from '../lib/fetcher'
import { getAllPageData, getSlugs } from '../lib/query'
import getMenusMetaData from './menusMetaQuery'

// get blog post page data
export async function getBlogPageData() {
  const { metaData } = await getMenusMetaData()

  let data = {}
  const variables = {
    uri: '/blog/'
  }

  const latestPosts = await fetcher(LATEST_POSTS)
  const pageData = await fetcher(PAGE_BY_URI, { variables })

  return (data = {
    menus: metaData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageData?.data?.page?.uri || {},
      seo: pageData?.data?.page?.seo || {},
      page: pageData?.data?.page || {},
      posts: latestPosts?.data?.posts || {}
    }
  })
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

  let data = {}

  // return if paths don't exist
  if (isEmpty(slug)) {
    return data
  }

  //get post data
  const response = await getAllPageData(slug, POST_BY_SLUG, true)
  const documentData = {
    pageData: response?.pageData?.data?.post
  }

  return (data = {
    menus: metaData.data || {},
    meta: metaData.data || {},
    page: {
      uri: documentData?.pageData?.uri || {},
      seo: documentData?.pageData?.seo || {},
      pageInfo: documentData?.pageData || {}
    }
  })
}
