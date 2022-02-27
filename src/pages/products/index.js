import Layout from '../../components/layout/layout'
import Categories from '../../components/product/categories'
import { getProductCategoriesPageData } from '../../query/productQuery'

const Products = ({ pageData }) => {
  const { page, categories } = pageData
  return (
    <Layout seo={page?.seo} uri={page?.uri}>
      <Categories page={page} categories={categories} />
    </Layout>
  )
}

export default Products

export async function getStaticProps() {
  return getProductCategoriesPageData()
}
