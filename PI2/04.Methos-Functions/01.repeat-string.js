function main(inputStr, nTimes) {
  
console.log(repeat(inputStr, nTimes))
  // console.log(inputStr.repeat(nTimes))
}


function repeat(str, n) {
  let result = '';
  for (let i = 1; i <= n; i++) {
    result += str;
  }

  return result;
}

main('abc',3)