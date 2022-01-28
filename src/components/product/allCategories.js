import Category from './category'

const AllCategories = ({ productCategories }) => {
  console.log(productCategories)
  return (
    <>
      {productCategories
        ? productCategories.map((category, index) => (
            <Category
              key={`category-${category.node.id || index}`}
              name={category.node.name}
              slug={category.node.slug}
              image={category.node.image}
            />
          ))
        : null}
    </>
  )
}

export default AllCategories
