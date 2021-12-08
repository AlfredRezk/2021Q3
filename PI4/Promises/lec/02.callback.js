function app(cb) {
	console.log("App started ...");

  setTimeout(() => {
    console.log("App executed !")
    cb();
  }, 2000);
}


const print = () => {
  	console.log("App ended ...");
}

app(print);
