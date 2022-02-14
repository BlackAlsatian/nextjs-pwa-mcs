import Image from 'next/image'
import ParseHTML from './../../utils/parseHTML'

const SingleProduct = ({ product }) => {
  console.log('single product: ', product)
  return (
    <div>
      <Image
        alt={product?.image?.altText}
        src={product?.image?.sourceUrl}
        width={product?.image?.mediaDetails?.width}
        height={product?.image?.mediaDetails?.height}
      />
      <h1>{product.title}</h1>
      {ParseHTML(product.description)}
      <p>Average Rating: {product.averageRating}</p>
      <p>Price: {product.price}</p>
      <p>Regular Price: {product.regularPrice}</p>
    </div>
  )
}

export default SingleProduct
