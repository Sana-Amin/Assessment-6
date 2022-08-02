const {shuffleArray} = require('./utils')
let testArr = [1,2,3,4]
let empArr = []

describe('shuffleArray should', () => {

    test("returns array", () => {
      let fakeArr =  shuffleArray([1,2])
       expect(Array.isArray(fakeArr)).toBe(true);

    });
    test("returns the same length ", () => {
        let results = shuffleArray(testArr)
        expect(testArr.length).toEqual(results.length)
     });
})