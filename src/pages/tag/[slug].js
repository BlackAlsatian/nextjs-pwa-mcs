import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import Posts from '../../components/post/posts'
import { FALLBACK } from '../../config'
import { getAllTagPostsData, getAllTagSlugs } from '../../query/tagQuery'

const SingleTag = ({ pageData }) => {
  const router = useRouter()

  if (router.isFallback || !pageData) {
    return <Spinner />
  }

  const { page, posts } = pageData
  return (
    <Layout seo={pageData?.seo} uri={pageData?.uri}>
      <Posts page={page} posts={posts} />
    </Layout>
  )
}

export default SingleTag

export async function getStaticProps({ params }) {
  return getAllTagPostsData(params.slug)
}

export async function getStaticPaths() {
  const tagPaths = await getAllTagSlugs()

  return {
    paths: tagPaths || [],
    fallback: FALLBACK
  }
}
