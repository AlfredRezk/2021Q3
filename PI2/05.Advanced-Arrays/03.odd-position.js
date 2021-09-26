function main(numArr) { 

  let output = numArr
    .filter((num, index) => index % 2 !== 0)
    .map(num => num * 2)
    .reverse().join(' ');
  
  console.log(output)


}

main([10, 15, 20, 25]);