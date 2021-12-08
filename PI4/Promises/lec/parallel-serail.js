function execute(id, sec) {
  return new Promise(resolve => {
    console.log(`start: ${id}`)
    setTimeout(() => {
      console.log(`End: ${id}`)
      resolve(id)
    }, sec*1000)
  })
}


async function serialFlow() {
let result1 = await execute(1, 1);  
let result2 = await execute(2, 2);  
let result3 = await execute(3, 3);

  let finalResult = result1 + result2 + result3
  console.log(finalResult)
}

// serialFlow()

async function parallelFlow() {
	let result1 =  execute(1, 1);
	let result2 =  execute(2, 2);
	let result3 =  execute(3, 3);

	let finalResult = await result1 + await result2 + await result3;
	console.log(finalResult);
}

parallelFlow()