function main(str) {
  let arr = JSON.parse(str);
  let reducedObj = arr.reduce((obj, curr) => {
    return { ...obj, ...curr };
  }, {});
  console.log(reducedObj);
}

main(`[{"canMove": true},{"canMove":true,"doors": 4},{"capacity": 5}]`);
