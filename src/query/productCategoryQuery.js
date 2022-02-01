import { isEmpty } from 'lodash'
import {
  ALL_MENUS,
  ALL_PRODUCTS_SLUGS,
  // ALL_PRODUCTS,
  ALL_PRODUCT_CATEGORIES,
  ALL_SITE_META,
  PAGE_BY_URI,
  PRODUCTS_BY_CATEGORY,
  PRODUCT_CATEGORY_BY_URI
} from '../lib/api'
import fetcher from '../lib/fetcher'
import { getAllPageData, getSlugs } from '../lib/query'

// get all product Categories & page data
export async function getProductCategoriesPageData() {
  let data = {}
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)
  const pageQuery = await getAllPageData(['products'], PAGE_BY_URI)
  const categories = await fetcher(ALL_PRODUCT_CATEGORIES)

  return (data = {
    menus: menusData.data || {},
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
  const allProductCategories = await getSlugs(ALL_PRODUCT_CATEGORIES)
  const allProducts = await getSlugs(ALL_PRODUCTS_SLUGS)

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

export async function getProductCategoryPageData(slug, query) {
  let data = {}

  const uri = `/products/${slug.join('/')}/`
  const variables = {
    uri: uri
  }

  const pageData = await fetcher(query, { variables })

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
  const menusData = await fetcher(ALL_MENUS)
  const metaData = await fetcher(ALL_SITE_META)

  let data = {}
  let categoryResponse = {}
  let productResponse = {}
  let productPageType = 'category'
  let productDocumentData = {
    pageData: {},
    productsData: {}
  }

  // return if no category paths
  if (isEmpty(params?.categorySlug)) {
    return data
  }

  // categorySlug found, top level category, no Children
  if (
    Array.isArray(params?.categorySlug) &&
    params?.categorySlug.length === 1
  ) {
    //get category page data
    categoryResponse = await getProductCategoryPageData(
      params?.categorySlug,
      PRODUCT_CATEGORY_BY_URI
    )

    productResponse = await getCategoryProducts(
      categoryResponse?.pageData?.data?.productCategory?.databaseId
    )

    productDocumentData = {
      pageData: categoryResponse?.pageData?.data?.productCategory,
      productsData: productResponse
    }

    return (data = {
      type: productPageType,
      menus: menusData.data || {},
      meta: metaData.data || {},
      page: {
        uri: productDocumentData?.pageData?.uri || {},
        seo: productDocumentData?.pageData?.seo || {},
        page: productDocumentData?.pageData || {},
        products: productDocumentData?.productsData || {}
      }
    })
  }
}
