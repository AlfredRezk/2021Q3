
const baseUrl = "https://kl-remotedb-default-rtdb.firebaseio.com/";

async function fetchAllBooks() { 

  const res = await fetch(`${baseUrl}/books/.json`); 
  if (res.ok) { 
    let data = await res.json();
    console.log(data);
  }
  
}

fetchAllBooks();