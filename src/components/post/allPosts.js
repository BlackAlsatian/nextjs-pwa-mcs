import styles from './allPosts.module.scss'
import PostIntro from './postIntro'

const AllPosts = ({ posts }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridWrap}>
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
