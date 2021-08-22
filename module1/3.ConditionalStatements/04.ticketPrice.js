function main(type) {
  
  if (type === 'student') {
    console.log('$1.60')
  } else if (type === 'regular') {
    console.log('$1.00')
  } else {
    console.log("Invalid ticket type!")
  }

}

main('student')