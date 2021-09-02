
function main(upper1, upper2, upper3) {
  
  // 1st loop first digit even 2 - upper1 step +2
  for (let d1 = 2; d1 <= upper1; d1 += 2) {
    // 2nd digit prime number [2-7] 2 - upper2 step +1
    for (let d2=2; d2 <= upper2; d2++) {
      // check d2 is a prime number 
      if (d2 === 2 || d2 === 3 || d2 === 5 || d2 === 7) {
        // 3rd digit - even 2- upper3 step +2
        for (let d3 = 2; d3 <= upper3; d3 += 2) {
          console.log(`${d1} ${d2} ${d3}`)
        }
      }
      
    }
  }
}

main(3,5,5)