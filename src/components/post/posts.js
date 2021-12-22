import ContactForm from '../form/contactForm'
import Container from '../layout/container'
import PageHeader from '../page/pageHeader'
import AllPosts from './allPosts'

const Posts = ({ data }) => {
  const page = data?.page || data?.pageInfo
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
          {morePosts.length > 0 && <AllPosts posts={morePosts} />}
          {morePosts.length < 1 && <p>No posts found.</p>}
        </Container>
      </section>
      <ContactForm />
    </>
  )
}

export default Posts
