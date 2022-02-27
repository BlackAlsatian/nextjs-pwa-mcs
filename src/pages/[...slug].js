import { useRouter } from 'next/router'
import Layout from '../components/layout/layout'
import Spinner from '../components/loader/spinner'
import Page from '../components/page/page'
import { FALLBACK } from '../config'
import { getAllPageSlugs, getPageData } from '../query/pageQuery'

const SinglePage = ({ pageData }) => {
  const router = useRouter()

  if (router.isFallback || !pageData) {
    return <Spinner />
  }
  return (
    <Layout seo={pageData?.seo} uri={pageData?.uri}>
      <Page page={pageData} />
    </Layout>
  )
}

export default SinglePage

export async function getStaticProps({ params }) {
  return getPageData({ params })
}

export async function getStaticPaths() {
  const pagePaths = await getAllPageSlugs()
  return {
    paths: pagePaths || [],
    fallback: FALLBACK
  }
}
