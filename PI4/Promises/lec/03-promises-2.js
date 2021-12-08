// console.log('Before the promise');

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Async operation')  
//     resolve('done')
//   }, 500)
// }).then((res) => {
//   console.log('Promise resolved'+ res)
// })


// console.log('After the promise ')


console.log('Before the promise');

new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Some data')
  }, 500)
}).then((res) => {
  console.log('Resolved with'+res)
}).catch(res => {
  console.log('Some error'+res)
})

console.log('After the promise ')