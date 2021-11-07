class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname 
  }


  printFullName() {
    console.log(`${this.fname} ${this.lname}`)
  }
}


class Doctor extends Person{

  constructor(fname, lname) {
    super(fname, lname)
    this.specialty = 'eye doctor'
  }
  
}


const p1 = new Person('David', 'Doe');
console.log(p1);
const d1 = new Doctor("David", "Doe");
console.log(d1);

class Teacher extends Person{
  constructor(fname, lname, subject, school) {
    super(fname, lname);
    this.subject = subject;
    this.school = school;
  }

  printSummary() {
    return `${fname} teach in ${school} school`
  }
}


const t1 = new Person('John', 'Doe');
t1.printSummary();

