function main(balance, withdraw, limit) {
  
  if (withdraw < limit && withdraw < balance) {
    console.log("The withdrawal was successful.");
  } else if (withdraw < limit && withdraw > balance) {
    console.log("Insufficient availability");
  } else if (withdraw > limit) {
    console.log("The limit was exceeded.");
  }
}