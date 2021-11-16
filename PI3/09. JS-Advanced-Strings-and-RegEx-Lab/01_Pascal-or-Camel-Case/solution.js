function solve() {
  const text = document.getElementById('text').value;
  const caseType = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");
  result.innerText = pascalOrCamel(text, caseType)
}



function pascalOrCamel(text, caseType) {
  let words = text.toLowerCase().split(' ');
  // Cap every first letter 
  words = words.map(word => word.replace(word[0], word[0].toUpperCase()));

  if (caseType == 'Camel Case') {
    words[0] = words[0].toLowerCase();
  } else if(caseType !=='Pascal Case') {
    return 'Error!'  
  }

  return words.join('');
}