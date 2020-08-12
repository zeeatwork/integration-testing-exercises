const expect = require('chai').expect;
const divide = require('../index.js');

describe('Divide fuction', ()=> {
  it('should divide positive integers correctly', () => {
    //define inputs
    const a = 8;
    const b = 4;
    const expectedAnswer = 2

    //invoke the function
    const actualAnswer = divide(a, b);

    //assert that expected === actual

    expect(actualAnswer).to.equal(expectedAnswer);
  });

  it('should throw and error when divide by zero', () => {
    //define inputs
    const a = 8, b = 0;

    //set up function call
    const fn = () => {
      divide(a, b)
    };

    //assert that exception thrown
    expect(fn).to.throw();
  });
});