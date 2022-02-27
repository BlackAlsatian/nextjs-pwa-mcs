import { BlocksField } from './blocks'
import { FeaturedImageFragment } from './posts'
import { SeoFragment } from './seo'

// All Pages
export const AllPages = `
    query AllPagesQuery {
        pages(where: {status: PUBLISH}, first: 10) {
            edges {
                node {
                    uri
                }
            }
        }
    }
  `

// query PageBySlugQuery($id: ID!, $idType: PageIdType!) {
export const PageByUri = `
    query PageByUri ($uri: ID!) {
        page(id: $uri, idType: URI) {
            id
            title
            slug
            date
            featuredImage {
                node {
                    ...FeaturedImageFragment
                }
            }
            modified
            ...BlocksField
            content
            uri
            seo {
                ...SeoFragment
            }
            pageIntro
        }
    }
    ${SeoFragment}
    ${FeaturedImageFragment}
    ${BlocksField}
`

// query PageBySlugQuery($id: ID!, $idType: PageIdType!) {
// export const PageBySlug = `
//     query PageBySlug ($slug: ID!) {
//         page(id: $slug, idType: SLUG) {
//             id
//             title
//             slug
//             date
//             modified
//             ...BlocksField
//             content
//             uri
//             seo {
//                 ...SeoFragment
//             }
//             pageIntro
//         }
//     }
//     ${SeoFragment}
//     ${FeaturedImageFragment}
//     ${BlocksField}
// `
