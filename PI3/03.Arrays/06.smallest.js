function main(arr) {

  let [num1, num2] = arr.sort((a, b) => a - b);
  console.log(`${num1} ${num2}`)
  
}
main([30, 15, 50, 5]);