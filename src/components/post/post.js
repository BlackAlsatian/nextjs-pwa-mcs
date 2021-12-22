// import PostHeader from './postHeader'
import ContactForm from '../form/contactForm'
import PageHeader from '../page/pageHeader'
import PostBody from './postBody'
import PostMeta from './postMeta'

const Post = ({ post }) => {
  return (
    <>
      <PageHeader
        title={post?.title}
        intro={post?.excerpt}
        image={post?.featuredImage}
        isPost='true'
      />
      <PostMeta
        tags={post?.tags}
        date={post?.date}
        author={post?.author?.node}
      />
      <PostBody content={post?.content} />
      <ContactForm />
    </>
  )
}

export default Post
