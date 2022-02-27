import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import Post from '../../components/post/post'
import { FALLBACK } from '../../config'
import { getAllCatPostsData, getAllCatPostSlugs } from '../../query/blogQuery'

const BlogCatPost = ({ data }) => {
  const router = useRouter()

  if (router.isFallback || !data) {
    return <Spinner />
  }
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
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const catPostPaths = await getAllCatPostSlugs()

  return {
    paths: catPostPaths || [],
    fallback: FALLBACK
  }
}
