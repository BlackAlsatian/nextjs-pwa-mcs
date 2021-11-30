import styles from './latestPosts.module.scss'
import PostTile from './postTile'

const Posts = ({ data }) => {
  const posts = data?.edges.slice(0, 3)
  return (
    <section className={styles.wrapper}>
      {posts.length > 0 &&
        posts.map(post => {
          return <PostTile post={post} key={post?.node?.id} />
        })}
      {posts.length < 1 && <p>No posts found.</p>}
    </section>
  )
}

export default Posts
