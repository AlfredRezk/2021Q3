require('mocha-sinon');
const { expect, assert, should } = require('chai');
const printDeckOfCards = require('./printDeckOfCards');
should();


describe('Testing PrintDeckOfCards Function', () => {
  
  // configuration to mocha-sinon
  beforeEach(function () {
    this.sinon.stub(console, 'log')
  })

  it('should takes an array of strings', () => {
    expect(printDeckOfCards({})).to.be.false;
    assert.isFalse(printDeckOfCards('String'))
  })

  // it print cards separated by space 
  it('Should print them in a sequence separated by space', () => {
    printDeckOfCards(["AS", "10D", "KH", "2C"]);
    expect(console.log.calledWith("A♠ 10♦ K♥ 2♣")).to.be.true;
    assert.notEqual(console.log.calledWith("A♠10♦K♥2♣") , true);
  })

  it('Should print invalid card when invalid card is passed', () => {
    printDeckOfCards(["AS", "10D", "KH", "1Z"]);
    expect(console.log.calledWith("Invalid Card: 1Z")).to.be.true;
    
  })


})