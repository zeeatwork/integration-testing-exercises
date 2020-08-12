const expect = require('chai').expect;
const sort = require('..index');

describe('Sorting function', () => {
  it('should sort numbers largest to smallest')
  let list = [9, 8, 4, 5, 12, 44]
  const expectedAnswer = [4, 5, 8, 9, 12, 44]

  const actualAnswer = sort(list);
  expect(expectedAnswer).to.deep.equal(actualAnswer)
})


