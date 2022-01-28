export const AllProductCategories = `
  query ProductCategoriesQuery {
    productCategories {
      edges {
        node {
          id
          name
          slug
          image {
            sourceUrl
            altText
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`
