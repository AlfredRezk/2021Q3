function main(n, array) {

  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < n; i++) {
    let num = array.shift();
    
    // if number is less than my min 
    if (num < min) {
      min = num;
    }
    // if number is bigger than my max
    if (num > max) {
      max = num;
    }
  }

  console.log(`Min number: ${min}`);
  console.log(`Max number: ${max}`);
  
}

main(3, [10,350, 50] )
