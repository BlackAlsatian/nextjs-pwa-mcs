import Block from '../../lib/block'
import PageHeader from './pageHeader'

const Page = ({ page }) => {
  return (
    <>
      <PageHeader
        title={page?.title}
        intro={page?.pageIntro}
        image={page?.featuredImage}
      />
      {page?.blocks
        ? page?.blocks.map((block, index) => (
            <Block block={block} key={`section-${index}`} />
          ))
        : null}
      {/* <PageBody content={page} /> */}
    </>
  )
}

export default Page
