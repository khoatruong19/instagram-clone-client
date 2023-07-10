import React from 'react'
import Stories from './stories'
import Posts from './posts'

type Props = {}

function Feeds({}: Props) {
  return (
    <div className='w-full py-12'>
        <Stories/>
        <Posts/>
    </div>
  )
}

export default Feeds