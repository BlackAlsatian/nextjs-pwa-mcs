// import { isEmpty } from 'lodash'
import fetcher from './fetcher'
// import {
//   ALL_CATEGORIES,
//   ALL_POSTS,
//   ALL_MENUS,
//   ALL_SITE_META,
//   CATEGORY_BY_URI,
//   LATEST_POSTS,
//   PAGE_BY_URI,
//   POST_BY_URI,
//   POST_BY_SLUG,
//   POSTS_BY_CATEGORY_ID,
// } from './api'

// get all slugs
export async function getSlugs(allPosts) {
  const response = await fetcher(allPosts)
  return response?.data
}

// get index page data
// export async function getBlogPageData() {
//   const menusData = await fetcher(ALL_MENUS)
//   const metaData = await fetcher(ALL_SITE_META)
//
//   let data = {}
//   const variables = {
//     uri: '/blog/'
//   }
//
//   const latestPosts = await fetcher(LATEST_POSTS)
//   const pageData = await fetcher(PAGE_BY_URI, { variables })
//
//   return (data = {
//     menus: menusData.data || {},
//     meta: metaData.data || {},
//     page: {
//       uri: pageData?.data?.page?.uri || {},
//       seo: pageData?.data?.page?.seo || {},
//       page: pageData?.data?.page || {},
//       posts: latestPosts?.data?.posts || {}
//     }
//   })
// }

// all pages data
export async function getAllPageData(slug, query, isPost) {
  let data = {}

  let postSlug = `/${slug.join('/')}/`

  let variables = {
    uri: postSlug
  }
  if (isPost) {
    postSlug = slug.pop()

    variables = {
      slug: postSlug
    }
  }

  const pageData = await fetcher(query, { variables })

  return (data = { pageData })
}

// get category data with posts
// export async function getCategoryWithPosts(slug) {
//   let data = {}
//
//   const { pageData } = await getAllPageData(slug, CATEGORY_BY_URI)
//   const variables = {
//     categoryId: pageData?.data?.category?.categoryId
//   }
//
//   const postsData = await fetcher(POSTS_BY_CATEGORY_ID, { variables })
//
//   return (data = {
//     pageData,
//     postsData
//   })
// }

// all category/posts data
// export async function getAllCommonPostTypeData({ params: { slug } }) {
//   const menusData = await fetcher(ALL_MENUS)
//
//   const metaData = await fetcher(ALL_SITE_META)
//
//   let data = {}
//   let response = {}
//   let postType = 'page'
//   let documentData = {
//     pageData: {},
//     postsData: {}
//   }
//   // return if paths don't exist
//   if (isEmpty(slug)) {
//     return data
//   }
//
//   // slugParent found, no slugChild return category page data
//   if (Array.isArray(slug) && slug.length === 1) {
//     //get page data
//     response = await getAllPageData(slug, PAGE_BY_URI)
//     documentData = {
//       pageData: response?.pageData?.data?.page
//     }
//
//     //if no page data is returned, get category data
//     if (isEmpty(documentData?.pageData?.uri)) {
//       response = await getCategoryWithPosts(slug)
//       postType = 'category'
//       documentData = {
//         pageData: response?.pageData?.data?.category,
//         postsData: response?.postsData?.data?.posts
//       }
//     }
//
//     return (data = {
//       type: postType,
//       menus: menusData.data || {},
//       meta: metaData.data || {},
//       page: {
//         uri: documentData?.pageData?.uri || {},
//         seo: documentData?.pageData?.seo || {},
//         pageInfo: documentData?.pageData || {},
//         posts: documentData?.postsData || {}
//       }
//     })
//   }
//
//   // slug array longer than 1
//   if (Array.isArray(slug) && slug.length > 1) {
//     //get page data
//     response = await getAllPageData(slug, PAGE_BY_URI)
//
//     documentData = {
//       pageData: response?.pageData?.data?.page,
//       postsData: {}
//     }
//     //if no page data is returned, get category data
//     if (isEmpty(documentData?.pageData?.uri)) {
//       response = await getCategoryWithPosts(slug)
//       postType = 'category'
//       documentData = {
//         pageData: response?.pageData?.data?.category,
//         postsData: response?.postsData?.data?.posts
//       }
//     }
//
//     //if no category data is returned, get post data
//     if (
//       isEmpty(documentData?.postsData) &&
//       documentData?.pageData?.categoryId === null
//     ) {
//       response = await getAllPageData(slug, POST_BY_URI)
//       postType = 'post'
//       documentData = {
//         pageData: response?.pageData?.data?.post,
//         postsData: {}
//       }
//     }
//
//     return (data = {
//       type: postType,
//       menus: menusData.data || {},
//       meta: metaData.data || {},
//       page: {
//         uri: documentData?.pageData?.uri || {},
//         seo: documentData?.pageData?.seo || {},
//         pageInfo: documentData?.pageData || {},
//         posts: documentData?.postsData || {}
//       }
//     })
//   }
// }
