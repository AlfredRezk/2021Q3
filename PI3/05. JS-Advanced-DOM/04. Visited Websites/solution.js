function solve() {


  let aTags = document.querySelectorAll('a');
  let pTags = document.getElementsByTagName('p');
  // [1, 2, 4, 4, 7, 6]
  let visitedArr = Array.from(pTags).map(p=> p.innerText.split(' ')[1])


  // ['Kingsland', 'google', 'youtube', 'wiki', 'gmail', 'stack']
  Array.from(aTags).forEach((link, index) => {
    link.addEventListener('click', () => {
      // Inc the number of visit and manipulate the nextSiblingElement (p)
      let para = link.nextElementSibling;
      para.innerText = `visited ${++visitedArr[index]} times`
    })

    console.log(link)
  })
}