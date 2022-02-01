import { isEmpty } from 'lodash'
import { FALLBACK } from '../../../config'
import {
  getAllProductCategoryData,
  getAllProductCategoryPaths
} from '../../../query/productCategoryQuery'

const ProductCategory = ({ data }) => {
  return <p>I am a product category</p>
}

export default ProductCategory

export async function getStaticProps({ params }) {
  const response = await getAllProductCategoryData({ params })

  if (
    isEmpty(response) ||
    isEmpty(response.page.uri) ||
    isEmpty(response.page)
  ) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: {
        menus: response.menus || {},
        siteMeta: response.meta || {},
        pageData: response.page || {}
      }
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const productCategoryPaths = await getAllProductCategoryPaths()

  return {
    paths: productCategoryPaths || [],
    fallback: FALLBACK
  }
}
