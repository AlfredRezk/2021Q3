function main(num = 5) {
  

  // Loop through the rows 
  for (let i = 0; i < num;i++) {
    // print a line of stars
    console.log('* '.repeat(num).trim())
  }

}

main(6)