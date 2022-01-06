let db = {
  'John Doe': {amount:150000, background: false, credit: 740}
}

// Bank subsystem

class Bank { 
  verify(name, amount) { 
    if (db[name].amount > amount) return true;
    else false;
  }
}

class Background { 
  check(name) { 
    if (db[name].background) return true
    else false;
  }
}

class Credit { 
  get(name) { 
    if (db[name].credit > 700) return true
    else false;
  }
}

class Mortgage { 
  constructor(name) { 
    this.name = name;
  }

  applyFor(amount) { 
    // access multiple subsystems 
    let result = 'approved';
    if (!new Bank().verify(this.name, amount)) result = 'denied by the Bank';
    else if (!new Background().check(this.name)) result = 'denied by the background check';
    else if (!new Credit().get(this.name)) result = 'denied by credit check';

    return `${this.name} has been ${result} for a ${amount} mortgage`
  }
}


function main() { 
  let mortgage = new Mortgage('John Doe');
  console.log(mortgage.applyFor(120000))
}

main()