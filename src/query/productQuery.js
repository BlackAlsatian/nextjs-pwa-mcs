import { isEmpty } from 'lodash'
import {
  ALL_PRODUCT_CATEGORIES,
  ALL_PRODUCT_CATEGORY_SLUGS,
  ALL_PRODUCT_SLUGS,
  PAGE_BY_URI,
  PRODUCTS_BY_CATEGORY,
  PRODUCT_BY_SLUG,
  PRODUCT_CATEGORY_BY_SLUG
} from '../lib/api'
import fetcher from '../lib/fetcher'
import { getAllPageData, getSlugs } from '../lib/query'
import getMenusMetaData from './menusMetaQuery'

// get all product Categories & page data
export async function getProductCategoriesPageData() {
  let data = {}
  const { metaData } = await getMenusMetaData()
  const pageQuery = await getAllPageData(['products'], PAGE_BY_URI)
  const categories = await fetcher(ALL_PRODUCT_CATEGORIES)

  return (data = {
    menus: metaData.data || {},
    meta: metaData.data || {},
    page: {
      uri: pageQuery?.pageData?.data?.page?.uri || {},
      seo: pageQuery?.pageData?.data?.page?.seo || {},
      page: pageQuery?.pageData?.data?.page || {},
      categories: categories?.data?.productCategories || {}
    }
  })
}

export async function getAllProductCategoryPaths() {
  const allProductCategories = await getSlugs(ALL_PRODUCT_CATEGORY_SLUGS)
  const allProducts = await getSlugs(ALL_PRODUCT_SLUGS)

  const allPaths = []

  allProductCategories &&
    allProductCategories?.data?.productCategories?.edges?.map(category => {
      if (!isEmpty(category?.node?.uri)) {
        const slugs = category?.node?.uri
          .split('/')
          .filter(productCategorySlug => productCategorySlug)
        allPaths.push({
          params: { categorySlug: slugs }
        })
      }
    })

  allProducts &&
    allProducts?.data?.products?.edges?.map(product => {
      if (!isEmpty(product?.node?.uri)) {
        const slugs = product?.node?.uri
          .split('/')
          .filter(productSlug => productSlug)
        allPaths.push({
          params: { categorySlug: slugs }
        })
      }
    })

  return allPaths
}

export async function getProductCategoryPageData(slug, query, bySlug) {
  let data = {}

  const uri = `/products/${slug.join('/')}/`

  const categorySlug = slug[slug.length - 1]
  let variables = {
    slug: categorySlug
  }
  const pageData = await fetcher(PRODUCT_CATEGORY_BY_SLUG, { variables })

  return (data = { pageData })
}

export async function getProductPageData(slug) {
  let data = {}

  const variables = {
    slug: slug.pop()
  }

  const pageData = await fetcher(PRODUCT_BY_SLUG, { variables })

  return (data = { pageData })
}

export async function getCategoryProducts(categoryId) {
  const variables = {
    categoryId: categoryId
  }

  const productsData = await fetcher(PRODUCTS_BY_CATEGORY, { variables })

  return productsData
}

export async function getAllProductCategoryData({ params }) {
  const { metaData } = await getMenusMetaData()

  let data = {}
  let productPageType = 'category'

  // return if no category paths
  if (isEmpty(params?.slug)) {
    return data
  }

  // slug found, might be category or product
  if (Array.isArray(params?.slug) && params?.slug.length >= 1) {
    //get category page data
    const categoryResponse = await getProductCategoryPageData(params?.slug)

    // if no category ID is found, check if product exists
    if (categoryResponse?.pageData?.data?.productCategory === null) {
      productPageType = 'product'

      const productResponse = await getProductPageData(params?.slug)

      return (data = {
        type: productPageType,
        menus: metaData.data || {},
        meta: metaData.data || {},
        page: {
          uri: productResponse?.pageData?.data?.product?.uri || {},
          seo: productResponse?.pageData?.data?.product?.seo || {},
          page: productResponse?.pageData?.data?.product || {}
        }
      })
    }

    // if no product was found and category id exists get Products
    const productResponse = await getCategoryProducts(
      categoryResponse?.pageData?.data?.productCategory?.databaseId
    )

    return (data = {
      type: productPageType,
      menus: metaData.data || {},
      meta: metaData.data || {},
      page: {
        uri: categoryResponse?.pageData?.data?.productCategory?.uri || {},
        seo: categoryResponse?.pageData?.data?.productCategory?.seo || {},
        page: categoryResponse?.pageData?.data?.productCategory || {},
        products: productResponse || {}
      }
    })
  }
}
