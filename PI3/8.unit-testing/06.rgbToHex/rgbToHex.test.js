// ● Take three integer numbers , representing the red, green and blue values of an RGB color, each
// within range [0…255]
// ● Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// ● Return undefined if any of the input parameters are of invalid type or not in the expected range

const rgbToHexColor = require("./rgbToHex");
const { should, expect, assert } = require('chai')
should();


describe('Testing rgbToHex Function', () => {

  it('should takes 3 integer numbers each within range [0…255]', () => {
    assert.isUndefined(rgbToHexColor(155, 'test', 66));
    assert.isString(rgbToHexColor(155, 160, 120));
    expect(rgbToHexColor(5,6,7)).to.be.a('string')
  })

  it("Should Return the same color in hexadecimal format as a string", () => {
		// rgb(37,95,59) => #255F3B
    assert.equal(rgbToHexColor(37, 95, 59), "#255F3B");
    assert.equal(rgbToHexColor(255, 255, 255), "#FFFFFF");
	})
  it("should Return undefined if any of the input parameters are of invalid type or not in the expected range", () => {
    
    assert.equal(rgbToHexColor(-2, -3, -4), undefined)
    assert.isUndefined(rgbToHexColor(300, 400, 600));
    expect(rgbToHexColor("1","2","3")).to.be.equal(undefined)
  });

})
