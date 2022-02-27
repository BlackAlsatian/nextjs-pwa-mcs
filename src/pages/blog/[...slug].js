import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import Post from '../../components/post/post'
import { FALLBACK } from '../../config'
import { getAllCatPostsData, getAllCatPostSlugs } from '../../query/blogQuery'

const BlogCatPost = ({ pageData }) => {
  const router = useRouter()

  if (router.isFallback || !pageData) {
    return <Spinner />
  }
  return (
    <Layout seo={pageData?.seo} uri={pageData?.uri}>
      <Post post={pageData} />
    </Layout>
  )
}

export default BlogCatPost

export async function getStaticProps({ params }) {
  return getAllCatPostsData({ params })
}

export async function getStaticPaths() {
  const catPostPaths = await getAllCatPostSlugs()

  return {
    paths: catPostPaths || [],
    fallback: FALLBACK
  }
}
