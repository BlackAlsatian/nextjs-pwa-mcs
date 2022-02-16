import Category from './category'

const AllCategories = ({ productCategories }) => {
  return (
    <div className='gridWrapper'>
      <div className='gridWrap'>
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
      </div>
    </div>
  )
}

export default AllCategories
