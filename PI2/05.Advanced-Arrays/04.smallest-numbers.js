function main(numsArr) { 
  

  // Sorting the array asc.
  let [first, second] = numsArr.sort((a, b) => a - b)
  // console.log(`${numsArr[0]} ${numsArr[1]}`)
  console.log(`${first} ${second}`)

}

main([30, 15, 50, 5]);