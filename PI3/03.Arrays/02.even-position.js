function main(arr) {

  let output = arr.filter((val, index) => index % 2 == 0);
  console.log(output.join(' '))
  
}

main(["20", "30", "40"]);