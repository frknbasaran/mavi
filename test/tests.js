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

})();