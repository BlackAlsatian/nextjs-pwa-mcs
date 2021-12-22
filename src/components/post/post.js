// import PostHeader from './postHeader'
import PageHeader from '../page/pageHeader'
import PostBody from './postBody'
import PostMeta from './postMeta'

const Post = ({ post }) => {
  return (
    <>
      {/* {post?.featuredImage?.node && (
        <CoverImage
          title={post?.title}
          coverImage={post?.featuredImage?.node}
          slug={post?.slug}
          uri={post?.uri}
          width='1920'
        />
      )} */}
      {/* <PostHeader title={post?.title} /> */}
      <PageHeader
        title={post?.title}
        intro={post?.excerpt}
        image={post?.featuredImage}
        isPost='true'
      />
      <PostMeta
        tags={post?.tags}
        // categories={post?.categories}
        date={post?.date}
        author={post?.author?.node}
      />
      <PostBody content={post?.content} />
    </>
  )
}

export default Post
