const baseUrl = "https://kl-remotedb-default-rtdb.firebaseio.com/";


async function editBook(id, bookData){ 

  const res = await fetch(`${baseUrl}/books/${id}/.json`, {
    method: 'patch', 
    body: JSON.stringify(bookData)
  })

  if (res.ok) { 
    let data = await res.json();
    console.log(data);
  }
}


const bookUpdatedData = {
  year:"1981",
  author: "Author Changed"
}

editBook('-MqfO8anCMc-YkUVZW_1', bookUpdatedData)