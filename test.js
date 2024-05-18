test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

     expect(fromEuroToDollar(1)).toBe(1.07);

});


test("One dollar should be 145.26 Yens", function(){
    const {fromDollarToYen} = require("./app.js");

    expect(fromDollarToYen(1)).toBe(146.26168224299064)
});


test("One Yen should be 0.005 Pounds", function(){
    const {fromYenToPound} = require("./app.js");

    expect(fromYenToPound(1)).toBe(0.005495207667731629)
});

