function main(type, size) {

  let area;  

  if (type === 'square') {
    area = size * size;
  } else if (type === 'circle') {
    area = Math.PI * size * size
  }
  
  console.log(area.toFixed(2))
}

main('square', 5)