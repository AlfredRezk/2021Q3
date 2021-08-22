function main(season, accom, days) {

  let total;
  if (accom == 'Hotel') {

    switch (season) {
      case 'Spring': total = 30 * days * 0.8; break;
      case 'Summer': total = 50 * days;break;
      case 'Autumn': total = 20 * days * 0.7;break;
      case 'Winter': total = 40 * days * 0.9;break;
    }

  } else {
    // Camping 
    switch (season) {
      case 'Spring': total = 10 * days * 0.8;break;
      case 'Summer': total = 30 * days; break;
      case 'Autumn': total = 15 * days * 0.7;break;
      case 'Winter': total = 10 * days * 0.9;break;
    }
  }
  
  console.log(total.toFixed(2))
}

main('Winter', 'Hotel', 5)