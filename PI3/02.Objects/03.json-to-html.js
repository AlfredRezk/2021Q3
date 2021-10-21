function main(json) {

  // convert json to an array 
  let arr = JSON.parse(json);

  // Object keys store in array 
  let keys = Object.keys(arr[0]);

  // create the output string 
  let output = '<table>\n';
  // open the table row tag
  output += '  <tr>';

  // Loop through the keys to generate the table header
  keys.forEach(key => {
    output += `<th>${key}</th>`;
  })

  // close the table row tag
  output += "</tr>\n";

  // loop through the objects 
  arr.forEach(obj => {
    // open the table row tag
    output += `  <tr>`
    let values = Object.values(obj)
    values.forEach(value => {
      // check if the value is string converted to URI encode 
      if (typeof (value) === 'string') {
        value= encodeURIComponent(value)
      }
      output += `<td>${value}</td>`;
    })
    // close the table row tag
    output+='</tr>\n'

  })

  // close the table tag
  output +='</table>'
  console.log(output) 
}

main(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])