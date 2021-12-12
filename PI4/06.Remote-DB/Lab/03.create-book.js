const baseUrl = "https://kl-remotedb-default-rtdb.firebaseio.com/";

async function addBook(bookData) { 
  const res = await fetch(`${baseUrl}/books/.json`, {
    method: 'post',
    body: JSON.stringify(bookData)
  });

  if (res.ok) { 
    let data = await res.json();
    console.log(data)
  }
}



const book = {
  title: "New Book", 
  author:'New Author'
}

addBook(book)