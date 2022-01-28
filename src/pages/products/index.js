import Layout from '../../components/layout/layout'
import Categories from '../../components/product/categories'
import { getProductCategoryPageData } from '../../query/productCategoryQuery'

const Products = ({ data }) => {
  console.log(data.pageData)
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
  const response = await getProductCategoryPageData()

  return {
    props: {
      data: {
        menus: response.menus || {},
        siteMeta: response.meta || {},
        pageData: response.page || {}
      }
    }
  }
}
