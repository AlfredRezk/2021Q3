function main(n, array) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    
    let num = array.shift();

    // if line is even sub the number to sum 
    // if line is odd add the number to sum 
    if (i % 2 ===0 ) {
      sum -= num
    } else {
      sum += num;
    }
  }
  console.log(sum)

}

main(2,[10,-20])