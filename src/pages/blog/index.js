import Layout from '../../components/layout/layout'
import Posts from '../../components/post/posts'
import { getBlogPageData } from '../../query/blogQuery'

const Blog = ({ data }) => {
  return (
    <Layout data={data}>
      <Posts data={data?.pageData} title={data?.pageData?.page?.title} />
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
