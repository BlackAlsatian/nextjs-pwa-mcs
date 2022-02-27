import { TaxonomySeoItems } from './seo'

// tags fragment
export const TagFragment = `
    fragment TagFragment on Tag {
      id
      databaseId
      title: name
      slug
      uri
    }
`

// get all
export const AllTags = `
query AllTagsQuery {
    tags (first: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }
`
export const TagBySlug = `
query AllTagsQuery($slug: ID!) {
    tag(id: $slug, idType: SLUG) {
      ...TagFragment
      seo {
        ${TaxonomySeoItems}
      }
    }
  }
  ${TagFragment}
`
