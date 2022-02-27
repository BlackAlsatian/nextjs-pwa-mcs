import { isEmpty } from 'lodash'
import { useRouter } from 'next/router'
import Layout from '../components/layout/layout'
import Spinner from '../components/loader/spinner'
import Page from '../components/page/page'
import { FALLBACK } from '../config'
import { getAllPageSlugs, getPageData } from '../query/pageQuery'

const SinglePage = ({ data }) => {
  const router = useRouter()

  if (router.isFallback || !data) {
    return <Spinner />
  }
  return (
    <Layout seo={data?.pageData?.seo} uri={data?.pageData?.uri}>
      <Page page={data?.pageData?.pageInfo} />
    </Layout>
  )
}

export default SinglePage

export async function getStaticProps({ params }) {
  const response = await getPageData({ params })

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
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const pagePaths = await getAllPageSlugs()
  return {
    paths: pagePaths || [],
    fallback: FALLBACK
  }
}
