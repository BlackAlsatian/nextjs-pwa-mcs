import ContactForm from '../components/form/contactForm'
import Layout from '../components/layout/layout'
import LatestPosts from '../components/widget/latestPosts'
import Block from '../lib/block'
import { getIndexPageData } from '../query/indexPageQuery'

const Home = ({ pageData }) => {
  const { page, posts } = pageData
  return (
    <Layout seo={page?.seo} uri={page?.uri}>
      {page?.blocks
        ? page?.blocks.map((block, index) => (
            <Block block={block} key={`section-${index}`} />
          ))
        : null}
      <ContactForm />
      <LatestPosts data={posts} title={page?.title} isHome />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return getIndexPageData()
}
