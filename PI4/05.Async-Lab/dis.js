let arr = [{
  name: 'TV',
  price: 125
}, {
  name: 'Radio',
  price: 60
  }, {
  name: 'Desk',
    price:110
  }]

function findTotalPrice(arr) {
  let sum = 0;
  arr.forEach(({price}) => {
    sum+= price
  })
  console.log(sum)
}


findTotalPrice(arr)