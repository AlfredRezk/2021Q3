/** @format */

async function loadCommits() {
	// Get DOM Variables
	const username = document.getElementById("username").value;
	const repoName = document.getElementById("repo").value;
	const ul = document.getElementById("commits");

	// Construct the Request URL
	const url = `https://api.github.com/repos/${username}/${repoName}/commits`;

	// Send the Request via Fetch API
  try {
    const res = await fetch(url)
    // check if there is an error
    if (!res.ok) throw (res)
    // parse the response stream 
    const resJson = await res.json();
    // clear output 
    ul.innerHTML = "";
    // loop through the commits and display them in the DOM
    resJson.forEach(({ commit }) => {
      let message = `${commit.author.name} : ${commit.message}`;
      loadToDom(ul, message);
    });
    
  } catch (err) {
    	ul.innerHTML = "";
			console.log(err);
			let message = `Error: ${err.status} (${err.statusText})`;
			loadToDom(ul, message);
  }

}

function loadToDom(el, text) {
	let li = document.createElement("li");
	li.textContent = text;
	el.appendChild(li);
}
