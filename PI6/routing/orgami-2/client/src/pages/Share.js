import React, {useContext} from 'react';
import '../assets/workshop-styles.css';
import Posts from '../components/Posts';
import PostsContext from "../context/Posts";

const Share = () => {
  const {posts} = useContext(PostsContext);
  const lastThree = posts.slice(-3)

  return (
    <div className='Input'>
      <div>
        <h1>Share your thoughts. . .</h1>
        <textarea></textarea>
         <button>Post</button>
      </div>
      <div>
        <h2>last 3 post on your wall</h2>
        <Posts posts={ lastThree.reverse()}/>
      </div>
    </div>
  )
}

export default Share