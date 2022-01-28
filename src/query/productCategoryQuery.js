import {
  ALL_MENUS,
  ALL_PRODUCT_CATEGORIES,
  ALL_SITE_META,
  PAGE_BY_URI
} from '../lib/api'
import fetcher from '../lib/fetcher'

// get all product Categories
export async function getProductCategoryPageData() {
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)

  let data = {}
  const variables = {
    uri: '/products/'
  }

  const categories = await fetcher(ALL_PRODUCT_CATEGORIES)
  const pageData = await fetcher(PAGE_BY_URI, { variables })

  return (data = {
    menus: menusData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageData?.data?.page?.uri || {},
      seo: pageData?.data?.page?.seo || {},
      page: pageData?.data?.page || {},
      categories: categories?.data?.productCategories || {}
    }
  })
}
