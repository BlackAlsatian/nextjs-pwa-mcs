import { getBlogPageData } from '../../lib/query'
import Layout from '../../components/layout'
import Posts from '../../components/posts'

const Blog = ({ data }) => {
  return (
    <Layout data={data}>
      <Posts data={data?.pageData?.posts} title={data?.pageData?.page?.title} />
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const response = await getBlogPageData()

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
