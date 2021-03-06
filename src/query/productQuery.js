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
  const { metaData } = await getMenusMetaData()

  const { page } = await getAllPageData(['products'], PAGE_BY_URI)
  const {
    data: { productCategories }
  } = await fetcher(ALL_PRODUCT_CATEGORIES)

  if (isEmpty(page) || isEmpty(page.uri)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      siteMeta: metaData.data || {},
      pageData:
        {
          page: page || {},
          categories: productCategories || {}
        } || {}
    },
    revalidate: 1
  }
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
  const uri = `/products/${slug.join('/')}/`

  const categorySlug = slug[slug.length - 1]
  let variables = {
    slug: categorySlug
  }
  const {
    data: { productCategory }
  } = await fetcher(PRODUCT_CATEGORY_BY_SLUG, { variables })

  return { productCategory }
}

export async function getProductPageData(slug) {
  const variables = {
    slug: slug.pop()
  }

  const {
    data: { product }
  } = await fetcher(PRODUCT_BY_SLUG, { variables })

  return { product }
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
    const { productCategory } = await getProductCategoryPageData(params?.slug)
    // if no category ID is found, check if product exists
    if (productCategory === null) {
      productPageType = 'product'

      const { product } = await getProductPageData(params?.slug)

      if (isEmpty(product) || isEmpty(product.uri)) {
        return {
          notFound: true
        }
      }

      return {
        props: {
          siteMeta: metaData.data || {},
          pageType: productPageType || {},
          pageData:
            {
              page: product || {},
              products: {}
            } || {}
        },
        revalidate: 60
      }
    }

    // if no product was found and category id exists get Products
    const productResponse = await getCategoryProducts(
      productCategory?.databaseId
    )

    if (isEmpty(productCategory) || isEmpty(productCategory.uri)) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        siteMeta: metaData.data || {},
        pageType: productPageType || {},
        pageData:
          {
            page: productCategory || {},
            products: productResponse || {}
          } || {}
      },
      revalidate: 60
    }
  }
}
