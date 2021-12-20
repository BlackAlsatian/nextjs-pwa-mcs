import Layout from '../components/layout/layout'
import LatestPosts from '../components/widget/latestPosts'
import Block from '../lib/block'
import { getIndexPageData } from '../query/indexPageQuery'

const Home = ({ data }) => {
  return (
    <Layout data={data}>
      {data?.pageData?.page?.blocks
        ? data?.pageData?.page?.blocks.map((block, index) => (
            <Block block={block} key={`section-${index}`} />
          ))
        : null}

      {/* {data?.pageData?.page?.blocks ? (
        <Block blocks={data?.pageData?.page?.blocks} />
      ) : null} */}
      <LatestPosts
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
