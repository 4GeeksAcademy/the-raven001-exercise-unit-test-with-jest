test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


    const dollars = fromEuroToDollar(3.5);


    const expected = 3.5 * 1.07; 
    

     expect(fromEuroToDollar(3.5)).toBe(3.745);

     expect(fromDollarToYen(3.5)).toBe(511.91588785046724)

     expect(fromYenToPound(250)).toBe(1.3738019169329074)
})