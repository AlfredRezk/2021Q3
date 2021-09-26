function main(n, k) { 

  let seq = [1]

  for (let i = 1; i < n; i++) {

    let arr = seq.slice(-k);


    // let sum = 0;
    // arr.forEach(num => sum += num)
    
    // seq.push(sum);
    
    let nextNum = arr.reduce((sum, num) => sum + num, 0)
    seq.push(nextNum)
  }

  console.log(seq.join(' '))

}


main(6,3)