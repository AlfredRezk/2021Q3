function main(num1, num2, num3) {

  if (num1 === 0 || num2 === 0 || num3 === 0) {
    console.log("Zero");    
  }
  else {
    // if none of the number equals zero
    let negativeCounter = 0;
    if (num1 < 0) negativeCounter++;
    if (num2 < 0) negativeCounter++;
    if (num3 < 0) negativeCounter++;

  
    if (negativeCounter % 2 === 0) {
      console.log('Positive');
    } else {
      console.log('Negative');
    }
  }
  
}

main(2,3,-1)