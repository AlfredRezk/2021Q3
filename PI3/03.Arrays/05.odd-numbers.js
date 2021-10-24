function main(arr) {

  let output = arr.filter((num, i) => i % 2 != 0).map(num => num * 2).reverse();
  console.log(output.join(' '))
  
}

main([10, 15, 20, 25]);