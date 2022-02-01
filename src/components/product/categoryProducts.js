import Container from '../layout/container'
import PageHeader from '../page/pageHeader'
import AllCategoryProducts from './allCategoryProducts'

const CategoryProducts = ({ page, products }) => {
  console.log(page)
  const categoryProducts = products?.data?.products?.edges
  return (
    <>
      <PageHeader
        title={page?.title}
        intro={page?.description}
        image={page?.image}
      />
      <section>
        <Container>
          {categoryProducts?.length > 0 && (
            <AllCategoryProducts
              categoryProducts={categoryProducts}
              categoryUri={page?.uri}
            />
          )}
          {categoryProducts?.length < 1 && <p>No products found</p>}
        </Container>
      </section>
    </>
  )
}

export default CategoryProducts
