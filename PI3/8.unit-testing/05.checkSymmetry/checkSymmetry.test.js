const isSymmetric = require("./checkSymmetry");
const { expect, assert, should } = require('chai');

should();

describe('Testing checkSymmetric function', () => {
  
  describe('General Tests', () => {
    it('should be a function', () => {
      expect(isSymmetric.constructor === Function).to.be.true
    });

    it('Should return false if arguments is not an array', () => {
      // isSymmetric('test') === false;
      assert.isFalse(isSymmetric('test'));
      expect(isSymmetric(1)).to.be.false
    })
  })
  

  describe('Value specific Tests', () => {
    
    it('should return false for any input that is not correct type', () => {
      assert.equal(isSymmetric(1, 2, 3), false);
      expect(isSymmetric('test')).to.be.equal(false)
    })
    it('should return false for any input that is not symmetric and true for symmetric arrays', () => {
      
      assert.isTrue(isSymmetric([1,2,1]))
      assert.isTrue(isSymmetric([1,2,2,1]))
      assert.isTrue(isSymmetric([]))
      assert.isTrue(isSymmetric([1]))
      assert.isFalse(isSymmetric([1,2,3]))
      assert.isFalse(isSymmetric([1, 'Hi', 3, {a:5}]))
      assert.isTrue(isSymmetric([1, 'Hi', 3, {a:5}, 3, 'Hi', 1]))

    })

  })

})