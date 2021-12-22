import Container from '../layout/container'
import PageHeader from '../page/pageHeader'
import AllPosts from './allPosts'
// import HeroPost from './heroPost'

const Posts = ({ data }) => {
  const page = data?.page || data?.pageInfo
  // const posts = data?.posts?.edges
  // const heroPost = posts[0]?.node || ''
  // const morePosts = posts.slice(1)
  const morePosts = data?.posts?.edges
  return (
    <>
      <PageHeader
        title={page?.title}
        intro={page?.pageIntro}
        image={page?.featuredImage}
      />
      <section>
        <Container>
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage?.node}
              date={heroPost.date}
              author={heroPost.author?.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              uri={heroPost.uri}
            />
          )} */}
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
          {/* {!heroPost && morePosts.length < 1 && <p>No posts found.</p>} */}
          {morePosts.length < 1 && <p>No posts found.</p>}
        </Container>
      </section>
    </>
  )
}

export default Posts
