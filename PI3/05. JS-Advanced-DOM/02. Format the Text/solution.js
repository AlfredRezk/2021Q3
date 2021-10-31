function solve() {
 
  //Select DOM Elements 
  const text = document.getElementById('input');
  const output = document.getElementById('output');

  // Array of sentences
  const sentArr = text.innerText.split('.');
  sentArr.pop();

  // Get to know how many paragraphs needed 
  let pNum = Math.ceil(sentArr.length/3) 
  
  // loop to generate paragraphs
  for (let i = 0; i < pNum; i++) {
    // create a paragraph element 
    let p = document.createElement('p');
    
    let pArr = sentArr.splice(0, 3)
    // convert to string joined on '.'
    p.innerText = pArr.join('.')+ '.'
    // Append the paragraph to the dom 
    output.appendChild(p)
  }

}