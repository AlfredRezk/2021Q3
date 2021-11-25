function solve() {
    
  const dropdownBtn = document.getElementById('dropdown');
  const dropdownUl = document.getElementById('dropdown-ul');
  const box = document.getElementById('box');


  // dropdown 
  dropdownBtn.addEventListener('click', function () {

    switch (dropdownUl.style.display) {
      case "":
      case "none":
        dropdownUl.style.display = 'block';
        break;
      case 'block':
        dropdownUl.style.display = 'none';
        box.style.backgroundColor = "#727070";
        break;
    }
    
  })


  // ul> lis
  dropdownUl.addEventListener('click', function (event) {
    box.style.backgroundColor = event.target.textContent;
  })
  
}