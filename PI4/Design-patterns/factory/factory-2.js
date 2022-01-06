function MemberFactory() { 

  this.createMember = function (name, type) { 
    let member;
    switch (type) { 
      case 'basic': member = new BasicMember(name); break;
      case 'standard': member = new StandardMember(name); break;
      case 'super': member = new SuperMember(name); break;
    }
    member.type = type;
    member.summary = function () { 
      console.log(`${this.name} ${this.type} $${this.cost}`)
    }
    return member;
  }
}

function BasicMember(name) { 
  this.cost = 20;
  this.name = name
}

function StandardMember(name) { 
  this.cost = 40;
  this.name = name
}

function SuperMember(name) { 
  this.cost = 60;
  this.name = name;
}

function main() { 
  let members = [];
  let factory = new MemberFactory();
  members.push(factory.createMember('john', 'basic'));
  members.push(factory.createMember('mike', 'super'));
  members.forEach(member => member.summary())
}

main()
