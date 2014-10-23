//  mavi 0.0.2

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

    //
    // "dummy"
    //
    var dummy = "dummy";

    mavi.getDummy = function() {
        return dummy;
    };

    //
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

    //
    // get synchronous url/file content with ajax
    //  p.s. not tested. (i think it will work :D)
    //
    mavi.getContentWithSync = function(path) {
        var request = new XMLHttpRequest();
        request.open('GET', path, false);
        request.send(null);

        if (request.status === 200) {
            return request.responseText;
        } else {
            return false;
        }
    };
    
    //
    // generate random words with defined letter count
    // will return string object
    //
    mavi.generateRandomString = function(letterCount) {
        var charsArray = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','r','R','s','S','t','T','u','U','v','V','y','Y','z','Z','0','1','2','3','4','5','6','7','8','9'];
        var generatedRandomString = "";
        for (var i = 0; i < letterCount; i++) {
            generatedRandomString += charsArray[Math.floor((Math.random()*(charsArray.length-1))+1)];
        }
        return generatedRandomString;
    }

    return mavi;

}));