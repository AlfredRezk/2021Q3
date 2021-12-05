function loadRepos() {

  const username = document.getElementById('username').value;
  // clear the ul element innerHTML 
  const repos = document.getElementById('repos');
  repos.innerHTML = '';

  // construct the url 
  const url = `https://api.github.com/users/${username}/repos`;

  // Send a request using fetch API 
  fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error(`404 Not found`)
    })
    .then(data => {
      console.log(data)
      data.forEach(repo => {
        repos.innerHTML += `<li> <a href='${repo.html_url}'> ${repo.full_name}</a></li>`
      })
    }).catch(err => {
      console.log(err)
      repos.innerHTML +=`<li>${err}</li>`
    })
}