// #!/usr/bin/env node

'use strict';

const { stubTrue } = require("lodash");

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // if base is a string convert it to a number:
//     var baseNum = Number(base);
//     // return a function that checks if input value is greater than the base
   return function(value) {
//     // make sure value is not a string
return value > base;
//     var valueNum = Number(value);
//     // return true or false if value is greater than base
//      return valueNum > baseNum;
//     // if (value > base) 
//     // return ""
   }

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // if base is a string convert it to a number
    // var baseNum = Number(base)
    return function(value) {
        // var valueNum = Number(value);
        return value < base;
    }
    
    return function (value) {
    return value < base;
    }
    // YOUR CODE ABOVE HERE //
}

// /** 
//  * Given a startsWith character, which will be a single character, return a 
//  * Function that tests whether a given String starts with the startsWith 
//  * character.
//  * 
//  * This function needs to be case insensitive.
//  */
 function createStartsWithFilter(startsWith) {
//     // YOUR CODE BELOW HERE //
// // make sure startsWith is lowercase
 //var startsWithLower = startsWith.toLowerCase();

     return function(value){
// // this needs to be lower case for a comparison
// var valueStringLower = valueString.toLowerCase();
// //  Check if string starts with the char and return the boolean
//  return valueStringLower.startsWith(startsWithLower);
return typeof value === 'string' && value.charAt(0).toLowerCase() === startsWith.toLowerCase();
//     }
    
    
//     // YOUR CODE ABOVE HERE //
 }
 }

// /** 
//  * Given a endsWith character, which will be a single character, return a 
//  * Function that tests whether a given String ends with the endsWith 
//  * character.
//  * 
//  * This function needs to be case insensitive.
//  */
 function createEndsWithFilter(endsWith) {
//     // YOUR CODE BELOW HERE //
//     var endsWithLower = endsWith.toLowerCase()
//     return function(newString) {
//         var newNewString = newString.toLowerCase();
//         return newNewString.endswith(endsWithLower);
//     }
return function(value) {
    // Checking to see if value is a string
    // compare last character
    // case insensitive
    return typeof value === 'string' && value.charAt(value.length - 1).toLowerCase() === endsWith.toLowerCase(); 
}
    
//     // YOUR CODE ABOVE HERE //
 }

// /** 
//  * Given an Array of Strings and a Function designed to modify a String, 
//  * return the Array of the Strings, modified.
//  * 
//  * TIP: You need to loop over the Strings, right? We need to pass each String to 
//  * the modify Function, but we need to collect the results into some collection.
//  */
 function modifyStrings(strings, modify) {
    //     // YOUR CODE BELOW HERE //
    var modifiedArray = [];
    
    for (let i = 0; i < strings.length; i++) {
        var modifiedString = modify(strings[i]);
        modifiedArray.push(modifiedString);
    }
    
    return modifiedArray;

    //     // create a variable that is an empty array to collect modified strings
//     var stringsModified = [];
//     // using a for loop; loop through the array
//     for (let i = 0; i < strings.length; i++) {
//         // apply modify to each string as it loops
//         var stringModified = modify(strings[i]);
//         // push the modified strings to the array
//         stringsModified.push(stringModified);
//     }
//     // return the modified strings array
//     return stringsModified;
    
//     // see slack  as well as see class video
//     //  var uppercase = modifyStrings(strings, modify, function(string){
//     //     return string.toUpperCase();
//     //  }); // ['ALEX', 'FRANCIS']
    
//     //  var addedExclamation = modifyStrings(strings, modify, function(string){
//     //      return string + "!";
//     //  }); // ['alex!', 'francis!']

    
//     // YOUR CODE ABOVE HERE //
 }




// /** 
//  * Given an Array of Strings and a Function designed to test the String in some 
//  * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
//  * 
//  * Imagine you had a list of names, and you wanted to test they all 
//  * begin with "C", or they are all exclaimations that end with "!".
//  * 
//  * TIP: You need to loop over the Strings, right? And pass them to the test?
//  */
 function allStringsPass(strings, test) {
//     // YOUR CODE BELOW HERE //
    
//     var (i = 0; i < strings.length; i++)
//     // if, apply function to the [i] and return true if true and then return false if false
//     if (test(strings[i])) {
//         return true;
//     }
//     return false;
//    // see slack as well as see class video 2:57pm
// //    var beginsWithA = allStringsPass(['alex', 'aaron'], function(str){
// //        return str[0] === 'a';
// //    }); // true (because all strings begin with A)
   
// //    var fiveOrMoreLetters = allStringsPass(['alex', 'francis', 'aaron'], function(str){
// //        return str.length > 4;
// //    }); // false (because alex's length is less than 5)

for (let i = 0; i < strings.length; i++) {
    if (!test(strings[i])) {
        return false;
    }
}
return true;

//     // YOUR CODE ABOVE HERE //
 }




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}