const main = require('./subSum.js');
const { expect, assert, should } = require('chai');
should();

describe('Testing subSum Function ...', () => {
	//If the start index is less than zero, consider its value to be a zero
	//If the end index is outside the bounds of the array, assume it points to the last index of the array

  it("should return NaN if the first element is not an array", () => {
    assert.equal(main([10, 20, 30, 40, 50, 60], 3, 300), 150);
    assert.equal(isNaN(main([10, 20, 30, 40, 50, 60], 3, 300)), false);

    expect(isNaN(main({}, 3, 300))).to.be.true;
    isNaN(main({}, 3, 300)).should.to.be.true;

    expect(main('test', 2, 3)).to.be.NaN;
    main('test', 2, 3).should.to.be.NaN;

    assert.isNaN(main('test', 2, 3));

  });
  it("should consider start Index value to be a zero, If the start index is less than zero", () => {
    
    assert.equal(main([1, 2, 3], -5, 2), 6);
    expect(main([1, 2, 3], -5, 2)).to.be.equal(6);
    main([1, 2, 3], -5, 2).should.to.be.equal(6);

  });
  it("should assume it points to the last index of the array, If the end index is outside the bounds of the array", () => {
    assert.equal(main([1, 2, 3], 1, 1000), 5);
    expect(main([1, 2, 3], 1, 1000)).to.be.equal(5);
  });
  it('should return ~3.3 when adding 1.1 and 2.2', () => {
    expect(main([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.be.closeTo(3.3, 0.000001);
    expect(Number(main([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1).toFixed(1))).to.be.equal(3.3);
  })
})
