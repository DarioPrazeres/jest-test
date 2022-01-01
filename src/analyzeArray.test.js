const analyzeArray = require('./analyzeArray');

test('Analyze Array', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({length: 6, max:8, min:1, average:4});
}); 