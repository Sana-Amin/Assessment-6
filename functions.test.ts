const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test("returns array", () => {
       expect(shuffleArray()).toBe(Array);

    });
    test("returns array", () => {
        expect(shuffleArray(arrCopy)).toBe(Array);
 
     });
})