import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import CategoryProducts from '../../components/product/categoryProducts'
import { FALLBACK } from '../../config'
import {
  getAllProductCategoryData,
  getAllProductCategoryPaths
} from '../../query/productQuery'

const ProductCategory = ({ data }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <Spinner />
  }
  return (
    <Layout data={data}>
      <CategoryProducts
        type={data?.pageType}
        page={data?.pageData?.page}
        products={data?.pageData?.products}
      />
    </Layout>
  )
}

export default ProductCategory

export async function getStaticProps({ params }) {
  const response = await getAllProductCategoryData({ params })

  if (
    isEmpty(response) ||
    isEmpty(response.type) ||
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
        pageType: response.type || {},
        pageData: response.page || {}
      }
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const productCategoryPaths = await getAllProductCategoryPaths()

  return {
    paths: productCategoryPaths || [],
    fallback: FALLBACK
  }
}
