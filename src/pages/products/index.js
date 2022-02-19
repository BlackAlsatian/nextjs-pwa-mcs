import Layout from '../../components/layout/layout'
import Categories from '../../components/product/categories'
import { getProductCategoriesPageData } from '../../query/productQuery'

const Products = ({ data }) => {
  return (
    <Layout data={data}>
      <Categories
        page={data?.pageData?.page}
        categories={data?.pageData?.categories}
      />
    </Layout>
  )
}

export default Products

export async function getStaticProps() {
  const response = await getProductCategoriesPageData()
  return {
    props: {
      data: {
        menus: response.menus || {},
        siteMeta: response.meta || {},
        pageData: response.page || {}
      }
    },
    revalidate: 60
  }
}
