// 500, 200, 100  -> limit exceeded
// 500, 200, 300 -> successful 
// 50, 200, 300 -> unsuccessful 


function main(balance, withdraw, limit) {

  if (withdraw < limit) {
		if (withdraw < balance) {
			console.log("The withdrawal was successful.");
		} else {
			console.log("Insufficient availability");
		}
	} else {
		console.log("The limit was exceeded.");
  }
}

// main(420,20,25)
main(10,50,20)