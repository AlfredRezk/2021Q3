function main(stopNum, numbers) {

  // First number in the array 
  let prevNum = numbers.shift()

  let result = 0;
  while (prevNum !== stopNum && prevNum!==undefined) {

    let currentNum = numbers.shift();
    if (currentNum == stopNum) {
      result = prevNum * 1.2;
      break;
    }
    prevNum = currentNum
  }
  
  console.log(result)

}

main(25, [20,30,28])