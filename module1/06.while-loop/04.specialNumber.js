function main(number) {
  let numberCpy = number;
  let isSpecial = true;
  
  while (number != 0) {
    // Get the last digit
    let lastDigit = number % 10;
    if (lastDigit !== 0 && number % lastDigit !== 0) {
      // It is not special number since it is not a divisible by one of its digit
      isSpecial = false;
      break;
    }
    // remove the last digit 
    number = Math.floor(number/10)
  }

  if (isSpecial) {
    console.log(`${numberCpy} is special`);
  } else {
    console.log(`${numberCpy} is not special`);
  }

}

main(204)