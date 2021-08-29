function main(n, array) {
  let div2 = 0;
  let div3 = 0;
  let div4 = 0;

  for (let i = 0; i < n; i++) {
    let num = array.shift();
    // if the number is divisible by 2
    if (num % 2 === 0) {
      div2++;
    }
    // if the number is divisible by 3
    if (num % 3 === 0) {
      div3++;
    }
    // if the number is divisible by 4
    if (num % 4 === 0) {
      div4++;
    }
  }
 
  // let percent2 = (div2 / n) * 100;
  let percent3 = (div3 / n) * 100;
  let percent4 = (div4 / n) * 100;


  console.log(`${((div2/n)*100).toFixed(2)}%`)

  console.log(percent3.toFixed(2)+'%');
  console.log(`${percent4.toFixed(2)}%`);
}

main(3,[3,6,9])