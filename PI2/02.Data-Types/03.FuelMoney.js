function main(distance, people, fuelPrice) {
  
  // Fuel with no passengers only the driver 
  let fuel = (distance / 100) * 7;
  fuel += people * 0.1;
  let cost = fuel * fuelPrice;
  console.log(`Needed money for that trip is ${cost}lv.`);
  
}

main(90, 14, 2.88);