import React from 'react'
import PostCard from './post-card'

type Props = {}

const Posts = (props: Props) => {
  return (
    <div className='max-w-[460px] w-full mx-auto mt-16 flex flex-col gap-5'>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  )
}

export default Posts