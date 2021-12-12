const baseUrl = "https://kl-remotedb-default-rtdb.firebaseio.com";



async function updateAuthor(id, authorName) { 
  const res = await fetch(`${baseUrl}/books/${id}/.json`, {
		method: "PATCH",
		body: JSON.stringify(authorName)
  });
  
  if (res.ok) { 
    const data = await res.json();
    console.log(data);
  }
}

const bookdata = {
  author: 'Updated Name'
}



updateAuthor("-MqfO8anCMc-YkUVZW_1", bookdata);