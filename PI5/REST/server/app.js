const express = require('express');
const app = express();

let posts = [
  {
    _id: 1,
    title: 'Post 1', 
    body: 'Post 1 body'
  }, 
  {
    _id: 2,
    title: 'Post 2', 
    body: 'Post 2 body'
  }, 
  {
    _id: 3,
    title: 'Post 3', 
    body: 'Post 3 body'
  }, 
]

// middleware 
app.use(express.json())


// custom middleware 
app.use((req, res, next) => { 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})


app.get('/api/posts', (req, res) => { 
  res.status(200).json({
    success: true, 
    posts: posts
  })
})

app.get('/api/posts/:id', (req, res) => { 
  const id = req.params.id; 
  const post = posts.find(p => p._id == id)
  console.log(post)
  if (post) {
    res.status(200).json({ status: true, post: post })
  } else { 
    res.status(404).json({status: false, message: `Post not found with id =${id}`})
  }
})

app.post('/api/posts', (req, res) => { 
  const post = req.body; 
  posts.push(post);
  res.status(201).json({status: 200, message: 'Post stored successfully', posts: posts}) 
})

app.delete('/api/posts/:id', (req, res) => { 
  const id = req.params.id; 
  
  // filter 
  posts = posts.filter(p => p._id != id)
   
  // const index = posts.findIndex(p => p._id == id)
  // posts.splice(index, 1)
  res.status(200).json({status: true, message: 'Post deleted', posts:posts})
})

app.put('/api/posts/:id', (req, res) => {
	const id = req.params.id;
	const post = req.body;

	const index = posts.findIndex(p => p._id == id)
  posts[index] = post;

  res.status(200).json({ status: true, posts: posts })
})


app.listen(3000, console.log('Server is running on Port 3000'))