document.addEventListener('click', action)

function action(e) {
  e.preventDefault();
  
  // Adding a post 
  if (e.target.nodeName == "BUTTON" && e.target.id == "submit-btn") {
		let title = document.querySelectorAll("#add-form input")[0];
		let image = document.querySelectorAll("#add-form input")[1];
		let body = document.querySelector("iframe").contentWindow.document.body;

		if (!image.value) {
			image.value =
				"https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg";
		}

		createPost(title, body, image);
	}
}


function createPost(title, body, image) {
  console.log(title, body, image)
  let main = document.querySelector('main');

  // create id 
  let id = Date.now();
  if (!title.value && !body.value) {
    return 
  }

  let section = document.createElement('section');
  section.classList.add('post', 'col-md-8', 'mx-auto', 'my-3')

  section.innerHTML = `
  <div class="card" id="post-${id}">
            <img class="card-img-top" src="${image.value}" alt="">

            <div class="card-body">
              <h5 class="card-title text-center">${title.value}</h5>
              <p class="small text-center"> Posted on: ${new Date().toLocaleString()}</p>
              <p class="card-text" id="body"></p>
              <hr>

              <div class="card-actions">
                <button class="btn"> <span class="material-icons like-btn">thumb_up</span></button>
                <button class="btn"> <span class="material-icons dislike-btn">thumb_down</span></button>
                <button class="btn"> <span class="material-icons comment-btn">comment</span></button>
                <button class="btn float-right mx-1"> <span class="material-icons edit-btn"> edit</span></button>
                <button class="btn float-right mx-1"> <span class="material-icons delete-btn"> delete</span></button>
              </div>
  
            </div>
        </div>
  
  `;

  console.log(section, main)
  main.appendChild(section);
  document.querySelector(`#post-${id} #body`).innerHTML = body.innerHTML
  body.innerHTML = '';
  title.value = '';
  image.value = ''

}

function doNothing() { }