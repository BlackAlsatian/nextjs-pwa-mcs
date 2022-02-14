import Container from '../layout/container'
import PageHeader from '../page/pageHeader'
import AllCategoryProducts from './allCategoryProducts'
import SingleProduct from './singleProduct'

const CategoryProducts = ({ type, page, products }) => {
  const categoryProducts = products?.data?.products?.edges
  return (
    <>
      <PageHeader
        title={page?.title}
        intro={page?.description}
        image={page?.image}
        isProduct={type === 'product'}
      />
      <section>
        <Container>
          {type === 'product' && <SingleProduct product={page} />}

          {type === 'category'
            ? categoryProducts?.length > 0 && (
                <AllCategoryProducts
                  categoryProducts={categoryProducts}
                  categoryUri={page?.uri}
                />
              )
            : categoryProducts?.length < 1 && <p>No products found</p>}
        </Container>
      </section>
    </>
  )
}

export default CategoryProducts
