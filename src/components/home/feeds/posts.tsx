import React from 'react'
import PostCard from './post-card'

type Props = {}

const Posts = (props: Props) => {
  return (
    <div>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  )
}

export default Posts