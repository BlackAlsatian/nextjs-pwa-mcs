import Category from './category'

const AllCategories = ({ productCategories }) => {
  return (
    <>
      {productCategories
        ? productCategories.map((category, index) => (
            <Category
              key={`category-${category.node.id || index}`}
              title={category.node.title}
              slug={category.node.slug}
              image={category.node.image}
              uri={category.node.uri}
            />
          ))
        : null}
    </>
  )
}

export default AllCategories
