import React, { useEffect, useState } from 'react'

const Async = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => { 
    fetchPosts();
  }, [])

  const fetchPosts = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    
    setPosts(data);
 }

  return (
    <div>
      <ul>
        { posts.map(post => <li key={ post.id }>{ post.title}</li>)}
      </ul>
      </div>
  )
}

export default Async