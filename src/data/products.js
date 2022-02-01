import { TaxonomySeoItems } from './seo'

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
            seo {
                ${TaxonomySeoItems}
            }
        }
    }
`

export const ProductsByCategory = `
    query ProductsByCategory ($categoryId: Int!) (
        products(first: 18, where: { categoryId: $categoryId, status: PUBLISH}) {
            edges {
                node {
                    id
                    databaseId
                    slug
                    name
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
    )
`
