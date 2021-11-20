import { isEmpty } from 'lodash'
import fetcher from '../lib/fetcher'
import { getSlugs, getAllPageData } from '../lib/query'
import {
  ALL_CATEGORIES,
  ALL_POSTS,
  ALL_MENUS,
  ALL_SITE_META,
  LATEST_POSTS,
  PAGE_BY_URI,
  POST_BY_SLUG
} from '../lib/api'

// get blog post page data
export async function getBlogPageData() {
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)

  let data = {}
  const variables = {
    uri: '/blog/'
  }

  const latestPosts = await fetcher(LATEST_POSTS)
  const pageData = await fetcher(PAGE_BY_URI, { variables })

  return (data = {
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

// get all category and post slugs and return array of paths
export async function getAllCatPostSlugs() {
  const allCategories = await getSlugs(ALL_CATEGORIES)
  const allPosts = await getSlugs(ALL_POSTS)

  const allPaths = []

  allCategories &&
    allCategories?.categories?.edges.map(category => {
      if (!isEmpty(category?.node?.uri)) {
        const slugs = category?.node?.uri
          .split('/')
          .filter(categorySlug => categorySlug)
        allPaths.push({
          params: { slug: slugs }
        })
      }
    })

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
  const menusData = await fetcher(ALL_MENUS)

  const metaData = await fetcher(ALL_SITE_META)

  let data = {}

  // return if paths don't exist
  if (isEmpty(slug)) {
    return data
  }

  //get post data
  const response = await getAllPageData(slug, POST_BY_SLUG, true)
  console.log('query response: ', response)
  const documentData = {
    pageData: response?.pageData?.data?.post
  }

  return (data = {
    menus: menusData.data || {},
    meta: metaData.data || {},
    page: {
      uri: documentData?.pageData?.uri || {},
      seo: documentData?.pageData?.seo || {},
      pageInfo: documentData?.pageData || {}
    }
  })
}
