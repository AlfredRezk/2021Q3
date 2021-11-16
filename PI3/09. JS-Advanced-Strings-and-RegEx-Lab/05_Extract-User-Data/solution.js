function solve() {

  let regex = /(?<name>[A-Z][A-Za-z]* [A-Z][a-z]*) (?<phone>\+359([-\s])\d{1}\3\d{3}\3\d{3}) (?<email>[a-z0-9]+@[a-z]+\.[a-z]{2,3})/gm;

  let input = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');

  // Loop through the input array 
  input.forEach(user => {
    let currUser = regex.exec(user);

    if (currUser !== null) {
      // parse the user info 
      result.innerHTML += `
      <div>
      <p>Name: ${currUser.groups.name}</p>
      <p>Phone: ${currUser.groups.phone}</p>
      <p>Email: ${currUser.groups.email}</p>
      </div>
      
      `
    } else {
      // print invalid message 
      result.innerHTML += `<div>\nInvalid data\n</div>`
    }
    

    result.innerHTML+= `<div> - - - </div>`
  })

}