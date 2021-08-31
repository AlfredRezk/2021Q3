function main(n) {
  
  let result = "";
  // Even loop 
  for (let even = 2; even <= n; even += 2) {
    
    // Odd Loop 
    for (let odd = 1; odd <= n; odd += 2) {
      result += `${even}${odd}${even * odd} `;
    }
  }

  console.log(result)
}

main(5)