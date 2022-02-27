import { SeoItems, TaxonomySeoItems } from './seo'

export const ImageItems = `
    altText
    title
    sourceUrl
    mediaDetails {
        height
        width
    }
`

export const CategoryItems = `
    id
    databaseId
    parentId
    slug
    uri
    title: name
    description
    image {
        ${ImageItems}
    }
    seo {
        ${TaxonomySeoItems}
    }
`

export const AllProductCategorySlugs = `
    query ProductCategoriesSlugQuery {
        productCategories(first: 50) {
            edges {
                node {
                    uri
                }
            }
        }
    }
`
export const AllProductCategories = `
    query ProductCategoriesQuery {
        productCategories(first: 30) {
            edges {
                node {
                    id
                    count
                    title: name
                    slug
                    uri
                    image {
                        ${ImageItems}
                    }
                }
            }
        }
    }
`

export const AllProductSlugs = `
    query ProductSlugQuery {
        products(first: 500) {
            nodes {
                uri
            }
        }
    }
`

export const ProductCategoryByUri = `
    query ProductCategoryByUriQuery ($uri: ID!) {
        productCategory(id: $uri, idType: URI) {
            ${CategoryItems}
        }
    }
`

export const ProductCategoryBySlug = `
    query ProductCategoryBySlugQuery ($slug: ID!) {
        productCategory(id: $slug, idType: SLUG) {
            ${CategoryItems}
        }
    }
`

export const ProductsByCategory = `
    query ProductsByCategory ($categoryId: Int!) {
        products(first: 500, where: { categoryId: $categoryId }) {
            edges {
                node {
                    id
                    databaseId
                    slug
                    title: name
                    image {
                        ${ImageItems}
                    }
                    shortDescription(format: RENDERED)
                    ... on VariableProduct {
                        regularPrice
                      }
                      ... on ExternalProduct {
                        regularPrice
                      }
                      ... on SimpleProduct {
                        regularPrice
                      }
                }
            }
        }
    }
`

// product by slug
export const ProductBySlug = `
query ProductBySlugQuery($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      productId: databaseId
      sku
      slug
      description
      galleryImages {
        nodes {
          id
          title
          altText
          mediaItemUrl
        }
      }
      image {
            ${ImageItems}
      }
      title: name
      productCategories {
        nodes {
            id
            title: name
            uri
        }
      }
      ... on SimpleProduct {
        price
        id
        regularPrice
        uri
        seo {
            ${SeoItems}
        }
      }
      ... on VariableProduct {
        price
        id
        regularPrice
        uri
        seo {
            ${SeoItems}
        }
      }
      ... on ExternalProduct {
        price
        id
        regularPrice
        externalUrl
        uri
        seo {
            ${SeoItems}
        }
      }
      ... on GroupProduct {
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
              uri
              seo {
                  ${SeoItems}
              }
            }
          }
        }
        id
      }
    }
  }
`
