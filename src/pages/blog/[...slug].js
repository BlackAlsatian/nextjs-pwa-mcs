import { isEmpty } from 'lodash'
import { getAllCatPostsData, getAllCatPostSlugs } from '../../query/blogQuery'
import Layout from '../../components/layout/layout'
import Post from '../../components/post/post'
import { FALLBACK } from '../../config'

const BlogCatPost = ({ data }) => {
  return (
    <Layout data={data}>
      <Post post={data?.pageData?.pageInfo} />
    </Layout>
  )
}

export default BlogCatPost

export async function getStaticProps({ params }) {
  const response = await getAllCatPostsData({ params })

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
  const catPostPaths = await getAllCatPostSlugs()

  return {
    paths: catPostPaths || [],
    fallback: FALLBACK
  }
}
