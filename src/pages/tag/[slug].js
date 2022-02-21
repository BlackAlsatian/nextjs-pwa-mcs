import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import Layout from '../../components/layout/layout'
import Spinner from '../../components/loader/spinner'
import Posts from '../../components/post/posts'
import { FALLBACK } from '../../config'
import { getAllTagPostsData, getAllTagSlugs } from '../../query/tagQuery'

const SingleTag = ({ data }) => {
  const router = useRouter()

  if (router.isFallback || !data) {
    return <Spinner />
  }
  return (
    <Layout data={data}>
      <Posts data={data?.pageData} title={data?.pageData?.pageInfo?.title} />
    </Layout>
  )
}

export default SingleTag

export async function getStaticProps({ params }) {
  const tagData = await getAllTagPostsData(params.slug)

  if (isEmpty(tagData) || isEmpty(tagData.page.uri) || isEmpty(tagData.page)) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: {
        menus: tagData?.menus || {},
        siteMeta: tagData?.meta || {},
        pageData: tagData?.page || {}
      }
    },
    revalidate: 60
  }
}

export async function getStaticPaths() {
  const tagPaths = await getAllTagSlugs()

  return {
    paths: tagPaths || [],
    fallback: FALLBACK
  }
}
