import React, { FC } from 'react'
import { IPost } from '../../../models/IPost'
import style from './PostItem.module.scss'

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div className={style.container}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem