import React from 'react'

type Props = {
  params: {username: string, storyId: string}
}

const Stories = (props: Props) => {

  console.log(props.params)
  return (
    <div>Stories</div>
  )
}

export default Stories