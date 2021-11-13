const makeCard = require('./playingCards');
const { expect, assert, should } = require('chai');


should();

describe('Testing the card Factory Function', () => {

  it('should throw an error if initialized with invalid face or suit', () => {
    
    try {
      expect(makeCard('2', 'Z')).to.not.throw();
    } catch (err) {
      expect(err.message).to.be.equal('Error');
    }

    // expect(() => { makeCard('1', 'S') }).to.throw('Error')

    // expect(makeCard.bind(this, '1', 'S')).to.throw('Error');

  });
  it('should throw an error if an attempt is made to change the face or suit to invalid values ', () => {
    // created the card object using the function 
    let card = makeCard('2', 'S');

    try {
      expect(card.face = '1').to.throw()
    } catch (err) {
      expect(err.message).to.equal('Error')
    }


    try {
      assert.doesNotThrow(card.suit = 'z');
    } catch (err) {
      assert.equal(err.message, 'Error')
    }


  })




})