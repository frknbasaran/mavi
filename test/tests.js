(function() {

    // "dummy" test
    test("dummy", 1, function() {
        strictEqual(mavi.getDummy(), "dummy");
    });

    // "dolly" test
    test("dolly", 5, function() {
        var clonedObject = mavi.dolly(true, mavi.dolly(true, {}, mavi), {"x": "x"});
        //
        strictEqual(clonedObject.x, "x");
        notStrictEqual(clonedObject.x, undefined);
        //
        strictEqual(mavi.x, undefined);
        notStrictEqual(mavi.x, "x");
        //
        strictEqual(mavi.getDummy(), clonedObject.getDummy());
    });

    // "generateRandomNumber" test
    test("generateRandomNumber", 1, function() {
        var firstNumber = mavi.generateRandomNumber(0,100);
        var secondNumber = mavi.generateRandomNumber(0,100);;
        //
        notStrictEqual(firstNumber, secondNumber);
    });

    // "generateRandomString" test
    test("generateRandomString", 2, function() {
        var firstString = mavi.generateRandomString(3);
        var secondString = mavi.generateRandomString(3);;
        //
        notStrictEqual(firstString, secondString);
        strictEqual(firstString.length, secondString.length);
    });

})();