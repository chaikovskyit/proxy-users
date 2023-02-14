import{ FC } from 'react'
import { IPost } from '../../../models/IPost'
import PostItem from '../PostItem/PostItem'


interface PostContainerProps {
  posts: IPost[]
}

const PostContainer: FC<PostContainerProps> = ({posts}) => {

  return (
    <div>
      {posts && posts.map(post => (<PostItem key={post.id} post={post}/>))}
    </div>


  )
}

export default PostContainer

// {posts && <PostContainer posts={posts} />}