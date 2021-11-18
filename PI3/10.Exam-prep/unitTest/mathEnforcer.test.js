const { addFive, verifyNum, subtractTen, sum } = require("./mathEnforcer");
const { expect, assert, should } = require("chai");
should();

describe("Testing MathEnforcer Class", () => {
	describe("The methods should function correctly with positive numbers", () => {
		it("should return 10 when pass 5 to addFive method", () => {
			expect(addFive(5)).to.equal(10);
		});

		it("should return 10 when pass 20 with subtract method", () => {
			subtractTen(20).should.equal(10);
		});

		it("should return 15 when pass 5 and 10 to sum method", () => {
			assert.equal(sum(10, 5), 15);
		});

		it("should throw an error if passing string to verify number", () => {
			expect(() => verifyNum("test")).to.throw();
			(() => verifyNum("test")).should.throw();
			assert.throws(() => verifyNum("test"));
		});
	});

	describe("The methods should function correctly with negative numbers", () => {
		it("should return -5 when pass -10 to addFive method", () => {
			expect(addFive(-10)).to.equal(-5);
		});

		it("should return -10 when pass -20 with subtract method", () => {
			subtractTen(-20).should.equal(-30);
		});

		it("should return -15 when pass -5 and -10 to sum method", () => {
			assert.equal(sum(-10, -5), -15);
		});

		it("should throw an error if passing string to verify number", () => {
			try {
				expect(verifyNum("test")).to.throw();
			} catch (err) {
				expect(err.message).equal("Argument must be number");
			}
		});
	});

	describe("The methods should function correctly with float numbers", () => {
		it("should return 6.1 when pass 5.1 with addFive method", () => {
			expect(addFive(1.1)).to.equal(6.1);
		});

		it("should return 10.5 when pass 20.5 with subtractTen method", () => {
			subtractTen(20.5).should.equal(10.5);
			Number(subtractTen(20.01).toFixed(2)).should.closeTo(10, 0.01);
		});

		it("should return 0.3 when pass 0.1 and 0.2 to sum method", () => {
			assert.closeTo(sum(0.1, 0.2), 0.3, 0.01);
		});
	});
});
