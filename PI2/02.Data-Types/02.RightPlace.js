function main(string1, char, string2) {
  
  string1 = string1.replace('_', char);
  let output = string1 === string2 ? 'Matched' : 'Not Matched';
  console.log(output);

}

main("Str_ng", "I", "Strong");