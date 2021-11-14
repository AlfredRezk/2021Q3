// Return a module ( object ), containing the functions add() , subtract() and get() as
// properties
// ● Keep an internal sum which can’t be modified from the outside
// ● The functions add() and subtract() take a parameter that can be parsed as a number (either a
// number or a string containing a number) that is added or subtracted from the internal sum
// ● The function get() returns the value of the internal sum

const { expect, assert, should } = require('chai');
const createCalculator = require('./addSub');
should();

describe('Testing createCalculator Function', () => {
  
  it('Return a module ( object ), containing the functions add() , subtract() and get() as properties', () => {
    expect(createCalculator()).to.be.an("object");
    expect(createCalculator()).to.have.property("add");
    expect(createCalculator()).to.have.property("subtract");
    expect(createCalculator()).to.have.property("get");
    expect(createCalculator()).to.have.all.keys("add", "subtract","get");
  })

  it(" Keep an internal sum which can’t be modified from the outside", () => {
    
    let obj = createCalculator();
    obj.value = 5;
    expect(obj.get()).to.equal(0);
  })

  it(" The functions add() and subtract() take a parameter that can be parsed as a number", () => {
    const { add, subtract, get } = createCalculator()
    add(1);
    expect(get()).to.equal(1);
    add('1');
    expect(get()).to.equal(2);
    subtract(1)
    assert.equal(get(), 1)
  });

  it("The function get() returns the value of the internal sum", () => {
    let obj = createCalculator();
    obj.add(5);
    obj.add(10);
    expect(obj.get()).to.equal(15)
  });

})