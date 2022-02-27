import { isEmpty } from 'lodash'
import { ALL_PAGES, PAGE_BY_URI } from '../lib/api'
import { getAllPageData, getSlugs } from '../lib/query'
import { includesPageUri } from '../utils/helpers'
import getMenusMetaData from './menusMetaQuery'

// get all page slugs
export async function getAllPageSlugs() {
  const allPages = await getSlugs(ALL_PAGES)

  const allPagePaths = []

  allPages &&
    allPages?.pages?.edges.map(page => {
      if (page?.node?.uri !== null && !includesPageUri(page?.node?.uri)) {
        const slugs = page?.node?.uri?.split('/').filter(pageSlug => pageSlug)
        allPagePaths.push({
          params: { slug: slugs }
        })
      }
    })

  return allPagePaths
}

// get all page data
export async function getPageData({ params: { slug } }) {
  const { metaData } = await getMenusMetaData()

  let data = {}
  const response = await getAllPageData(slug, PAGE_BY_URI)

  const pageData = response?.pageData?.data?.page

  // return if paths don't exist
  if (isEmpty(slug)) {
    return data
  }

  return (data = {
    meta: metaData.data || {},
    page: {
      uri: pageData?.uri || {},
      seo: pageData?.seo || {},
      pageInfo: pageData || {}
    }
  })
}
