function main(radius) {
  
  // check the type of the input 
  let type = typeof (radius)
  
  // check if the type is a number 
  if (type === 'number') {
    // calculate the area
    let area = Math.PI * radius ** 2;
    console.log(area.toFixed(2))

  } else {
    console.log(`We cannot calculate the circle area, because we receive a ${type}.`)
  }


}

main(5);
main('name');