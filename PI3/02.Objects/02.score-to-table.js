function main(json) {

  // Parse the JSON input to an array
  let arr = JSON.parse(json)
  
  // Declare the output string 
  let output = '<table>\n';
  // add the table header
  output += '  <tr><th>name</th><th>score</th></tr>\n';

  // add the rows from the array of objects
  arr.forEach(obj => {
    output += `  <tr><td>${obj.name}</td><td>${obj.score}</td></tr>\n`;
  });

  // output+= arr.map((obj) => `  <tr><td>${obj.name}</td><td>${obj.score}</td></tr>\n`).join('');
  output += '</table>';
  console.log(output.replace(/[&]/g,'&amp;' ))
  
}

main(['[{"name":"Peter","score":479},{"name":"George","score":205}]'])