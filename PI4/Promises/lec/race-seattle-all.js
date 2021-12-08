// Array of promises

const arrayOfPromises = [];
const arrayOfResponses = [];

// Create promises 
for (let i = 0; i < 5; i++) {
  
  arrayOfPromises.push(new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.random(1);
      if (randomNum > 0.5) {
        resolve('Some value')
      } else {
        reject('Some error')
      }
    }, i*100)
  }))
}

// consume the promises using forEach

arrayOfPromises.forEach(promise => {
  promise.then(res=> arrayOfResponses.push(res)).catch(err=> arrayOfResponses.push(err))
})

// Race 
// const promiseRace = Promise.race(arrayOfPromises)
// promiseRace
//   .then(() => console.log('One get resolved'))
//   .catch(() => console.log('one get rejected'))

// All 
// const promiseAll = Promise.all(arrayOfPromises);
// promiseAll
// 	.then(() => console.log("All resolved"))
// 	.catch(() => console.log("An error"));

// allSettled 
const promiseAllSettled = Promise.allSettled(arrayOfPromises)
promiseAllSettled.then(res=> console.log(res))

