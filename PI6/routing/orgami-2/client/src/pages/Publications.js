import React, { useContext } from 'react'
import Posts from '../components/Posts';
import PostsContext from '../context/Posts';

const Publications = () => {

  const {posts} = useContext(PostsContext)
  return (
		<>
			<h1>Publications </h1>
			<Posts posts={posts} />
		</>
	);
}

export default Publications