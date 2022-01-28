import Block from '../../lib/block'
import Container from '../layout/container'
import PageHeader from '../page/pageHeader'
import AllCategories from './allCategories'

const Categories = ({ page, categories }) => {
  const productCategories = categories?.edges
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
      <section>
        <Container>
          {productCategories.length > 0 && (
            <AllCategories productCategories={productCategories} />
          )}
          {productCategories.length < 1 && <p>No products found</p>}
        </Container>
      </section>
    </>
  )
}

export default Categories
