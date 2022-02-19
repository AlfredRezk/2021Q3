import React from 'react'
import blueOrigamiImg from '../assets/blue-origami-bird.png';
import PostAuthor from './PostAuthor';

const Post = ({ post }) => {
  const { description, author } = post;

  return (
    <div className='Post'>
      <img src={ blueOrigamiImg } alt="Blue origami Image" />
      <p className='description'> { description }</p>
      <PostAuthor authorName={author}/>
    </div>
  )
}

export default Post