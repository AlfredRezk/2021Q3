/** @format */

function resolveAfter2Seconds() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject("resolved");
		}, 2000);
	});
}

async function asyncCall() {
    console.log('start calling');
    let res = await resolveAfter2Seconds();
    console.log(res);
    console.log('End calling')
    

  
}

asyncCall().catch(err=>console.log(err))