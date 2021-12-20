import { isEmpty } from 'lodash'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'
import { FALLBACK } from '../config'
import { getAllPageSlugs, getPageData } from '../query/pageQuery'

const SinglePage = ({ data }) => {
  return (
    <Layout data={data}>
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
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const pagePaths = await getAllPageSlugs()
  return {
    paths: pagePaths || [],
    fallback: FALLBACK
  }
}
