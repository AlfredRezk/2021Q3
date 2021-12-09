function loadCommits() {
    
  // Get DOM Variables 
  const username = document.getElementById('username').value;
  const repoName = document.getElementById('repo').value;
  const ul = document.getElementById('commits')

  // Construct the Request URL 
  const url = `https://api.github.com/repos/${username}/${repoName}/commits`;

  // Send the Request via Fetch API 

  fetch(url)
    .then((res) => {
      // check if everything is ok 
      if (res.ok) {
        return res.json()
      }
      throw (res);
    })
    .then((resJson) => {
      ul.innerHTML = "";
      resJson.forEach(({ commit }) => {
        let message = `${commit.author.name} : ${commit.message}`
        loadToDom(ul, message);
      })
    })
    .catch((err) => {
      ul.innerHTML = '';
			console.log(err);
			let message = `Error: ${err.status} (${err.statusText})`;
      loadToDom(ul, message)
		})
}

function loadToDom(el, text) {
	let li = document.createElement("li");
  li.textContent = text;
	el.appendChild(li);
}