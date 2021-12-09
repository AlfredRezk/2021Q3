function attachEvents() {
  
  const btnLoadPosts = document.getElementById('btnLoadPosts');
  const btnViewPost = document.getElementById('btnViewPost');

  btnLoadPosts.addEventListener(
		"click",
		fetchPosts("https://blog-apps-c12bf.firebaseio.com/posts/.json")
  );

  btnViewPost.addEventListener('click', () => {
    // Get the Post Id 
    const postId = document.getElementById('posts').value
    fetchPost(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}/.json`)
  })
  
}


async function fetchPosts(url) {

  const response = await fetch(url);
  if (!response.ok) {
    return console.log(response)
  }
  
  // Everything is Ok, parse the data to json 
  const json = await response.json();
  // convert the object to an array 
  let resArr = Object.entries(json);
  // Clear the select options to load new ones
  document.getElementById('posts').innerHTML = '';
  console.log(resArr)
  // Loop through posts Array 
  resArr.forEach(([postId, { title }]) => {
    
    // create option element for the select element 
    const option = document.createElement('option');
    option.value = postId;
    option.textContent = title;
    // Append the option to the select element
      document.getElementById("posts").appendChild(option)
   })

}

async function fetchPost(url) {
  const response = await fetch(url);
  if (!response.ok) {
    return console.log(response)
  }
  // Everything is ok 
  let json = await response.json()
  let { comments, title, body } = json;
  document.getElementById('post-title').textContent = title;
  document.getElementById("post-body").textContent = body;

  if (comments) {
    document.getElementById("post-comments").innerHTML = '';
    comments.forEach(({ text }) => {
      // create li 
      const li = document.createElement('li');
      li.textContent = text;
      document.getElementById("post-comments").appendChild(li);
    })
  }
}


attachEvents();