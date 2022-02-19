import React from 'react'

const PostAuthor = ({ authorName}) => {
  return (
    <div>
      <span>
        <small>Author: </small>
        { authorName.username}
      </span>
    </div>
  )
}

export default PostAuthor