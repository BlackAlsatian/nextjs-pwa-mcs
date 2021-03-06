import ProductIntro from './productIntro'

const AllCategoryProducts = ({ categoryProducts, categoryUri }) => {
  return (
    <div className='gridWrapper'>
      <div className='gridWrap'>
        {categoryProducts ? (
          categoryProducts.map((product, index) => (
            <ProductIntro
              key={`product-${product.node?.id || index}`}
              title={product?.node?.title}
              image={product?.node?.image}
              description={product?.node?.shortDescription}
              uri={`${categoryUri}${product?.node?.slug}/`}
              price={product?.node?.regularPrice}
            />
          ))
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </div>
  )
}

export default AllCategoryProducts
