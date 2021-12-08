// /** @format */

// // Create async function using Promises
// const promise = new Promise(function (resolve, reject) {
// 	// Async code
// 	setTimeout(() => {
// 		let randomNum = Math.random(1);
// 		console.log(randomNum);
// 		if (randomNum > 0.5) {
// 			resolve("Some data");
// 		} else {
// 			reject("Some error");
// 		}
// 	}, 500);
// });

// // Consume the Promise
// promise
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	})
// 	.finally((res) => {
// 		console.log("Will be always executed ");
// 	});


const promise = new Promise(function(resolve, reject){
    // Async code
    setTimeout(() => {
        let = randomNum = Math.random(1);

        if (randomNum > 0.5) {
            resolve('Some data');
        } else {
            reject('Some error');
        }
    },500);

});


// Consume the promise
promise
    .then((res) => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    }) .finally((res) => {
        console.log('Will be always executed')
    });

