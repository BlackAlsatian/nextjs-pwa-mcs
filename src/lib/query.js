import fetcher from './fetcher'

// get all slugs
export async function getSlugs(allPosts) {
  const response = await fetcher(allPosts)
  return response?.data
}

// all pages data
export async function getAllPageData(slug, query, isPost) {
  let postSlug = `/${slug.join('/')}/`

  let variables = {
    uri: postSlug
  }

  if (isPost) {
    variables = {
      slug: slug.pop()
    }
    const {
      data: { post }
    } = await fetcher(query, { variables })
    return { post }
  }
  const response = await fetcher(query, { variables })

  const {
    data: { page }
  } = await fetcher(query, { variables })

  return { page }
}
