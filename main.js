"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var output = [];
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 15 == 0) {
                output.push(myArray[i]);
            }
        }
        return output;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var output = [];
        for (var i = 0; i < myArray.length; i++) {
            if (isNaN(myArray[i])) {
                output.push(myArray[i]);
            }
        }
        return output;
    };
    ArrayManipulations.prototype.arraySplit = function (str) {
        var myArray = str.split(" ");
        var semiOutput = [];
        var output = [];
        for (var i = 0; i < myArray.length; i++) {
            if (!isNaN(myArray[i])) {
                semiOutput.push(myArray[i]);
            }
        }
        for (var i = 0; i < semiOutput.length; i++) {
            if (semiOutput[i] > 1) {
                if (semiOutput[i] == 2) {
                    output.push(semiOutput[i]);
                }
                else {
                    var check = true;
                    for (var j = 2; j <= Math.sqrt(semiOutput[i]); j++) {
                        if (semiOutput[i] % j == 0) {
                            check = false;
                            break;
                        }
                    }
                    if (check) {
                        output.push(semiOutput[i]);
                    }
                }
            }
        }
        return output;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        myArray.reverse();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayManipulations;
}());
var array = new ArrayManipulations();
var myArray = [34, 45, 60, 23, 13, 25, 70];
var mixedString = "prograd 50 25 FacePrep 37";
var mixedArray = ["prograd", "50", 25, "FacePrep"];
var stringArray = ["prograd", "FacePrep", "Fullstack"];
console.log("Multiple of 3 and 5 : " + array.arrayFindMultiples(myArray));
console.log("sperated by only string : " + array.arraySeparate(mixedArray));
console.log("split : " + array.arraySplit(mixedString));
console.log("sorting : " + array.arraySort(stringArray));
console.log("replace with  5 : " + array.arrayReplace(myArray));
