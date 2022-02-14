import { SeoItems, TaxonomySeoItems } from './seo'

export const AllProductCategories = `
    query ProductCategoriesQuery {
        productCategories {
            edges {
                node {
                    id
                    title: name
                    slug
                    uri
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

export const AllProductSlugs = `
    query ProductSlugQuery {
        products(first: 5000) {
            nodes {
                id
                slug
                uri
            }
        }
    }
`

export const ProductCategoryByUri = `
    query ProductCategoryByUriQuery ($uri: ID!) {
        productCategory(id: $uri, idType: URI) {
            id
            databaseId
            parentId
            slug
            uri
            title: name
            description
            image {
                altText
                sourceUrl
                mediaDetails {
                    height
                    width
                }
            }
            seo {
                ${TaxonomySeoItems}
            }
        }
    }
`

export const ProductsByCategory = `
    query ProductsByCategory ($categoryId: Int!) {
        products(where: { categoryId: $categoryId }) {
            edges {
                node {
                    id
                    databaseId
                    slug
                    title: name
                    image {
                        altText
                        sourceUrl
                        mediaDetails {
                            width
                            height
                        }
                    }
                    shortDescription(format: RENDERED)
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
      averageRating
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
        altText
        id
        uri
        title
        srcSet
        sourceUrl
        mediaDetails {
            height
            width
        }
      }
      title: name
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
