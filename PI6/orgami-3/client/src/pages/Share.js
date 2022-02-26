import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/workshop-styles.css';
import Posts from '../components/Posts';
import PostsContext from "../context/Posts";
import { addPost, getPosts } from "../services";


const Share = () => {
  const [post, setPost] = useState('');
  const navigate = useNavigate();

  const { posts, updatePosts } = useContext(PostsContext); 
  // const currentUserId = JSON.parse(localStorage.getItem('userData')).id
  // const userPosts = posts.filter(post => post.author._id === currentUserId);

  const lastThree = posts.slice(-3)

  const submitPost = async () => {
    const res = await addPost(post);
    updatePosts();
    navigate('/');
  }
  
  return (
    <div className='Input'>
      <div>
        <h1>Share your thoughts. . .</h1>
        <textarea onChange={ (e) => setPost(e.target.value) } value={ post}></textarea>
        <button onClick={ submitPost}>Post</button>
      </div>
      <div>
        <h2>last 3 post on your wall</h2>
        <Posts posts={ lastThree.reverse()}/>
      </div>
    </div>
  )
}

export default Share