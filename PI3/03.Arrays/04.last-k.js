function main(n,k) {
  
  let output = [1];

  for (let i = 1; i < n; i++) {
    let slicedArr = output.slice(-k);
    let seq = slicedArr.reduce((sum, num) => sum + num, 0)
    output.push(seq)
  }

  console.log(output.join(' '))

}
main(6,3)