import React from 'react'
import Post from './Post'

const Posts = ({ posts}) => {

  return (
    posts?.map(p => <Post key={ p._id } post={ p}/>)
  )
}

export default Posts