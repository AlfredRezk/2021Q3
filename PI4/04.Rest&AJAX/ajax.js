// https://jsonplaceholder.typicode.com/posts

document.getElementById('btn').addEventListener('click', fetchPosts)


function fetchPosts(e) {
	const url = "https://jsonplaceholder.typicode.com/posts";
	const output = document.getElementById("output");
	// Create a new instance of the XMLHttpRequest
	const xhr = new XMLHttpRequest();

  // xhr.onprogress = function () {
    
  // }


	// xhr.onload = function () {
	// 	// check the status code
	// 	if (this.status === 200) {
	// 		let posts = JSON.parse(this.responseText);
	// 		let result = "<ul>";
	// 		posts.forEach((post) => {
	// 			result += `<li> <h1> ${post.title}</h1> <p>${post.body}</p></li>`;
	// 		});

	// 		result += "</ul>";
	// 		output.innerHTML = result;
	// 	}
	// };

	// // To send a request url + HTTP Method
	// xhr.open("GET", url)

	// // Sending the request
	// xhr.send();


  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText)
    }
  });

  xhr.open('GET', url)
  xhr.send()
}