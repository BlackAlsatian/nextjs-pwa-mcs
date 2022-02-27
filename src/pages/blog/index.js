import Layout from '../../components/layout/layout'
import Posts from '../../components/post/posts'
import { getBlogPageData } from '../../query/blogQuery'

const Blog = ({ pageData }) => {
  const { page, posts } = pageData
  return (
    <Layout seo={page?.seo} uri={page?.uri}>
      <Posts page={page} posts={posts} />
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  return getBlogPageData()
}
