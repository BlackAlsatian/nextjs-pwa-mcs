import PostIntro from './postIntro'

const AllPosts = ({ posts }) => {
  return (
    <div className='gridWrapper'>
      <div className='gridWrap'>
        {posts.map(post => {
          return (
            <PostIntro
              key={post?.node?.slug}
              title={post?.node?.title}
              coverImage={post?.node?.featuredImage?.node}
              date={post?.node?.date}
              author={post?.node?.author?.node}
              slug={post?.node?.slug}
              uri={post?.node?.uri}
              excerpt={post?.node?.excerpt}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AllPosts
