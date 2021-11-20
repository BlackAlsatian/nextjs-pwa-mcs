import { getBlogPageData } from '../../query/blogQuery'
import Layout from '../../components/layout/layout'
import Posts from '../../components/post/posts'

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
