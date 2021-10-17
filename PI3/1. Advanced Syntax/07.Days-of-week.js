function main(day) {
  
  let days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  let index = days.indexOf(day);

  // if not found indexOf will return -1

  if (index == -1) {
    console.log('error')
  } else {
    console.log(index)
  }

  // console.log(index==-1? 'error': index)

}

main("Invalid");