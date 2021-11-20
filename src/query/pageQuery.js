import fetcher from './../lib/fetcher'
import { isEmpty } from 'lodash'
import { getSlugs, getAllPageData } from '../lib/query'
import { includesPageUri } from '../utils/helpers'
import { ALL_PAGES, ALL_MENUS, ALL_SITE_META, PAGE_BY_URI } from '../lib/api'

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
  const menusData = await fetcher(ALL_MENUS)

  const metaData = await fetcher(ALL_SITE_META)

  let data = {}
  const response = await getAllPageData(slug, PAGE_BY_URI)

  const pageData = response?.pageData?.data?.page

  // return if paths don't exist
  if (isEmpty(slug)) {
    return data
  }

  return (data = {
    menus: menusData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageData?.uri || {},
      seo: pageData?.seo || {},
      pageInfo: pageData || {}
    }
  })
}
