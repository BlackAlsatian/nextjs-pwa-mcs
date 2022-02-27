import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import CategoryProducts from '../../components/product/categoryProducts'
import { FALLBACK } from '../../config'
import {
  getAllProductCategoryData,
  getAllProductCategoryPaths
} from '../../query/productQuery'

const ProductCategory = ({ pageData, pageType }) => {
  const router = useRouter()

  if (router.isFallback || !pageData) {
    return <Spinner />
  }
  const { page, products } = pageData
  return (
    <Layout seo={page.seo} uri={page.uri}>
      <CategoryProducts type={pageType} page={page} products={products} />
    </Layout>
  )
}

export default ProductCategory

export async function getStaticProps({ params }) {
  return getAllProductCategoryData({ params })
}

export async function getStaticPaths() {
  const productCategoryPaths = await getAllProductCategoryPaths()

  return {
    paths: productCategoryPaths || [],
    fallback: FALLBACK
  }
}
