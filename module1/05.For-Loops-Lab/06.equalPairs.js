function main(n, array) {

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i <= n * 2; i++) {
    
    let num = array.shift();
    
    if (i <= n) {
      // first
      sum1 += num;
    } else {
      // second
      sum2 += num;
    }
  }

  if (sum1 === sum2) {
    console.log(`Yes, value=${sum1}`)
  } else {
    console.log(`No, maxdiff=${Math.abs(sum1-sum2)}`);
  }

}

main(2, [-1, 0, 0, -1]);
