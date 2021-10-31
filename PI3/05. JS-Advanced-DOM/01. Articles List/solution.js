
function createArticle() {

  // declare DOM variables 
  const title = document.getElementById("createTitle");
  const content = document.querySelector('#createContent')
  const articles = document.getElementById('articles');

  // Validate title and content 
  if (!title.value || !content.value) {
		// Clear the form fields
		title.value = "";
		content.value = "";
		return;
	}

  // Method 1
  // create and append article
  // articles.innerHTML += `
  //   <article>
  //     <h3>${title.value}</h3>
  //     <p>${content.value}</p>
  //   </article>
  // `

// Method 2
  let article = document.createElement('article');
  let h3 = document.createElement('h3');
  let p = document.createElement('p');

  h3.innerText = title.value;
  p.innerText = content.value;
  article.appendChild(h3);
  article.appendChild(p);

  articles.appendChild(article);

  // Clear the form fields 
  title.value = '';
  content.value = '';
}