import ProductIntro from './productIntro'

const AllCategoryProducts = ({ categoryProducts, categoryUri }) => {
  return (
    <>
      {categoryProducts ? (
        categoryProducts.map((product, index) => (
          <ProductIntro
            key={`product-${product.node?.id || index}`}
            title={product?.node?.title}
            image={product?.node?.image}
            description={product?.node?.shortDescription}
            uri={`${categoryUri}${product?.node?.slug}/`}
          />
        ))
      ) : (
        <p>Nothing found</p>
      )}
    </>
  )
}

export default AllCategoryProducts
