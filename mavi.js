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

    // deep object cloning with pure javascript (jquery "extend" function based)
    //
    // full documantation : http://api.jquery.com/jquery.extend/
    //
    mavi.dolly = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        if (typeof target === "boolean") {
            deep = target; target = arguments[ i ] || {}; i++;
        }
        if (typeof target !== "object" && !this.isFunction(target)) {
            target = {};
        }
        if (i === length) {
            target = this; i--;
        }
        for (; i < length; i++) {
            if ((options = arguments[ i ]) !== null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && ( (this.isPlainObject(copy)) ||
                        (copyIsArray = (this.isArray(copy))) )) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && (this.isArray(src)) ? src : [];

                        } else {
                            clone = src && (this.isPlainObject(src)) ? src : {};
                        }
                        target[name] = this.dolly( deep, clone, copy );
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        } return target;
    };

    //
    // function control
    //
    mavi.isFunction = function(target) {
        if(Object.prototype.toString.call(target) === '[object Function]') {
            return true;
        } return false;
    };

    //
    // array control
    //
    mavi.isArray = function(target) {
        if(Object.prototype.toString.call(target) === '[object Array]') {
            return true;
        } return false;
    };

    //
    // plain object control
    //
    mavi.isPlainObject = function(target) {
        if(target.toString() === '[object Object]') {
            return true;
        } return false;
    }

    return mavi;

}));