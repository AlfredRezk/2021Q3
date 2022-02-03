const fetchPosts = async () => { 

  const url = 'http://localhost:3000/api/posts';

  const res = await fetch(url);
  let { posts } = await res.json();

  posts = posts.map(post => `
  <div>
    <h1> ${post.title}</h1>
    <p1> ${post.body}</p1>
   </div>
    <hr>
  `).join('');

  document.body.innerHTML = posts;
}

fetchPosts();