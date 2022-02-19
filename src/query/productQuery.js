import { isEmpty } from 'lodash'
import {
  ALL_MENUS,
  ALL_PRODUCTS_SLUGS,
  ALL_PRODUCT_CATEGORIES,
  ALL_SITE_META,
  PAGE_BY_URI,
  PRODUCTS_BY_CATEGORY,
  PRODUCT_BY_SLUG,
  PRODUCT_CATEGORY_BY_SLUG,
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

export async function getProductCategoryPageData(slug, query, bySlug) {
  let data = {}

  const uri = `/products/${slug.join('/')}/`

  const categorySlug = slug[slug.length - 1]

  let variables = {
    uri: uri
  }

  if (bySlug) {
    variables = {
      slug: categorySlug
    }
  }

  const pageData = await fetcher(query, { variables })

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
  if (isEmpty(params?.slug)) {
    return data
  }

  // slug found, top level category
  if (Array.isArray(params?.slug) && params?.slug?.length === 1) {
    //get category page data
    categoryResponse = await getProductCategoryPageData(
      params?.slug,
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

  // slug found, might be category or product
  if (Array.isArray(params?.slug) && params?.slug.length > 1) {
    //get category page data
    categoryResponse = await getProductCategoryPageData(
      params?.slug,
      PRODUCT_CATEGORY_BY_SLUG,
      true
    )

    // if no category ID is found, check if product exists
    if (categoryResponse?.pageData?.data?.productCategory === null) {
      productPageType = 'product'

      productResponse = await getProductPageData(params?.slug)

      productDocumentData = {
        pageData: productResponse?.pageData?.data?.product,
        productsData: {}
      }

      return (data = {
        type: productPageType,
        menus: menusData.data || {},
        meta: metaData.data || {},
        page: {
          uri: productDocumentData?.pageData?.uri || {},
          seo: productDocumentData?.pageData?.seo || {},
          page: productDocumentData?.pageData || {}
        }
      })
    }

    // if no product was found and category id exists get Products
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
