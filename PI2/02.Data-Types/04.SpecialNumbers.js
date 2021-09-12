function main(n) {
  
  // loop from 1-n
  for (let i = 1; i <= n; i++) {
    
    let sum = 0;
    // convert the number to string 
    let num = i.toString();
    for (let j = 0; j < num.length; j++) {
        sum+= Number(num[j])      
    }

    // check if it is a special number
  sum === 5 || sum === 7 || sum === 11
	? console.log(`${num} -> True`)
	: console.log(`${num} -> False`);

    // if (sum === 5 || sum === 7 || sum === 11) {
    //   console.log(`${num} -> True`)
    // } else {
    //   console.log(`${num} -> False`);
    // }
  }
}


main(15)