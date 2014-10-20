//  mavi 0.0.1

//  mavi may be freely distributed under the MIT license.
//  For all details and documentation: (README.md)

(function(root, factory) {

    // Asynchronous module definition Support
    if(typeof define === 'function' && define.amd) {

        define(['exports'], function(exports) {
            root.mavi = factory(root, exports);
        });

    } else if (typeof exports !== 'undefined') {

        factory(root, exports);

    } else {

        root.mavi = factory(root, {});

    }

}(this, function(root, mavi) {

    // "dummy"
    var dummy = "dummy";

    mavi.getDummy = function() {
        return dummy;
    };

    return mavi;

}));