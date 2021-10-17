function main(num1, num2, num3) {
  

  // Method1 : Arrays
  // Create an array of the 3 numbers 
  let arr = [num1, num2, num3];

  // Sort the array Desc.
  arr.sort((a, b) => b - a);

  console.log(`The largest number is ${arr.shift()}.`);


  // Method 2 : Math.max
  let largest = Math.max(num1, num2, num3);
  console.log(`The largest number is ${largest}.`);

}

main(5, -3, 16);
main(-3, -5, -22.5);