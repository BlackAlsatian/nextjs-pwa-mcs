import { getIndexPageData } from '../query/indexPageQuery'
import Layout from '../components/layout/layout'
import Posts from '../components/post/posts'

const Home = ({ data }) => {
  return (
    <Layout data={data}>
      <Posts
        data={data?.pageData?.posts}
        title={data?.pageData?.page?.title}
        isHome
      />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const response = await getIndexPageData()

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
