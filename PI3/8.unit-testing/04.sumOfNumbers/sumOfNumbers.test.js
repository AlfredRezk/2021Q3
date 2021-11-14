const sum = require('./sumOfNumbers');
const { expect, assert, should } = require('chai');
should();

describe('Testing sum function ...', () => {
  
  it('should take an array of number as arguments', () => {
    //sum([1,2,3])  === 6
    assert.equal(sum([1, 2, 3]), 6);
    expect(sum([1, 2, 3])).to.equal(6);
    sum([1, 2, 3]).should.to.equal(6);
    
    //sum(['test']) === NaN
    // NaN === NaN  false
    assert.isNaN(sum(['test']));
    expect(sum(['test'])).to.be.NaN;
    sum(['test']).should.to.be.NaN;
  })

  it('should return sum of the values of all elements inside the array', () => {
		// sum([10,20,30,40,50])  === 150

		assert.equal(sum([10, 20, 30, 40, 50]), 150);
		expect(sum([10, 20, 30, 40, 50])).to.equal(150);
		sum([10, 20, 30, 40, 50]).should.to.equal(150);
		// sum(["1","2","3"]) === 6

		assert.equal(sum(["1", "2", "3"]), 6);
		expect(sum(["1", "2", "3"])).to.equal(6);
		sum(["1", "2", "3"]).should.to.equal(6);

		// sum([1, undefined, 2])  === NaN

    sum([1, undefined, 2]).should.be.NaN;
	})

  it('should return NaN if any of the elements is not a number ', () => {
    
    expect(sum(['Hello', 2, 3])).to.be.NaN;
  })
})