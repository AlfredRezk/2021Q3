function loadRepos() {

  //1. create a new instant of XMLHttpRequest 
  const xhr = new XMLHttpRequest();
  const url = "https://api.github.com/users/testnakov/repos";
  

  xhr.onload = function () {

			// check the status code is 200
			if (this.status === 200) {
				// access the data and display it in the output div
				document.querySelector("#res").innerHTML = "";
				document.querySelector("#res").textContent = this.responseText;
			}

  }
  
  xhr.onprogress = function () {
    document.querySelector('#res').innerHTML = `<img src="./spinner.gif">`
  }


  //Method 2

  // xhr.addEventListener('readystatechange', function () {
  //   if (this.readyState === 4 && this.status == 200) {
	//      document.querySelector('#res').textContent = this.responseText;
	// 	}else(this.readyState===3){
  // document.querySelector('#res').innerHTML = `<img src="./spinner.gif">`
  //}
  // })

  xhr.open("GET", url);
  xhr.send();

}