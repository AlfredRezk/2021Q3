function main(num1, num2, num3) {
  
  let result;
  // check if any number is 0 => positive
  if (num1 === 0 || num2 === 0 || num3 === 0) {
    result = 'Positive'
  } else if (num1 > 0 && num2 > 0 && num3 < 0) {
    result = 'Negative'
  } else if (num1 > 0 && num2 < 0 && num3 > 0) {
    result = 'Negative'
  
  } else if (num1 < 0 && num2 > 0 && num3 > 0) {
    result = 'Negative'
  } else if(num1<0 && num2<0 && num3<0){
    result = 'Negative'
  } else {
    result = 'Positive'
  }
  console.log(result)
}

main(5, 12, -15)