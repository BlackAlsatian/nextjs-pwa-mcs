import fetcher from './fetcher'

// get all slugs
export async function getSlugs(allPosts) {
  const response = await fetcher(allPosts)
  return response?.data
}

// all pages data
export async function getAllPageData(slug, query, isPost) {
  let data = {}

  let postSlug = `/${slug.join('/')}/`

  let variables = {
    uri: postSlug
  }
  if (isPost) {
    postSlug = slug.pop()

    variables = {
      slug: postSlug
    }
  }

  const pageData = await fetcher(query, { variables })

  return (data = { pageData })
}
