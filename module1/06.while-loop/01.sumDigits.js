function main(num){

  let sum = 0;
  // Get the absolute value of the number 
  num = Math.abs(num);
  
  while (num !== 0) {
    // get the last digit 
    let lastDigit = num % 10;
    // Add the last digit of the number to the sum variable
    sum += lastDigit
    // Remove the last digit
    num = Math.floor(num/10)   
  }
  
  console.log(sum);


}

main(5634);     // 5+6+3+4 => 18 