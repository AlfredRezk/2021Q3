function area() {
  return this.x * this.y
}

function vol() {
  return this.x * this.y * this.z;
}


function main(area, vol, input) {

  // parse the string to an array 
  let shapesArr = JSON.parse(input);

  let result = shapesArr.map((shape) => {
    return {
      area: area.call(shape),
      volume: vol.call(shape)
    }
  })

  console.log(result)
  
}

main(area, vol, '[ {"x":"10","y":"-22","z":"10"}, {"x":"47","y":"7","z":"-5"}, {"x":"55","y":"8","z":"0"}, {"x":"100","y":"100","z":"100"}, {"x":"55","y":"80","z":"250"}]')