const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://alfred:alfred00@cluster0.bmyec.mongodb.net/myBlog";


// Define the Post module
const postSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  }, 
  likes: {
    type: Number, 
    default: 0
  }, 
  body: {
    type: String, 
    required: true
  }, 
  date: {
    type: Date, 
    default: Date.now
  }, 
  comments: [{
    type: String, 
  }]
})
const Post = mongoose.model('Post', postSchema);

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Connected to DB ')
    const post = new Post({ title: "New Post", body: "blah blah" });

		// save
		post
			.save()
			.then(() => console.log("Post stored in Database"))
			.catch((err) => console.log(err));
  })
  .catch((err) => console.log(err))




