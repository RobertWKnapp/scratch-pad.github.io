// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/*
I:Function takes in a string
O: Returns a number representing length of input string
C: n/a
E: n/a
*/



function length(string) {
    // YOUR CODE BELOW HERE //
return string.length;
   
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
/* 
I: given an input string
O: return string forced to lowercase
C: 
E:
*/
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   
return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
/**
 I: given an input string
 O:return string with characters in reverse order
 C:
 E:
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
//  * I: function takes in a string
//  * O: function returns string with a dash in place of the space and the upper case are now lower case
//  * C: n/a
//  * E: n/a
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

//return string.split;
return string.replace(/\s+/g, "-").toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//  *  I: Function takes in a string and a single character
//  *  O: Return true if the string begins with the character, return false if not
//  *  C: function is case insensitive
//  *  E: n/a
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //return string.beginsWith(char);
    var firstChar = string[0].toUpperCase();
    var secondChar = char.toUpperCase();
    if (firstChar == secondChar){
        return true;
    }
    else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
//  *  I: Function takes in a string and a single character
//  *  O: Return true if the string ends with the character, return false if not
//  *  C: function is case insensitive
//  *  E: n/a
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

var lastChar = string[string.length - 1].toUpperCase();
var secondChar = char.toUpperCase();
if(lastChar == secondChar){
    return true;
}
else {
    return false;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
//  I: function is given any number of strings
//  O: function is to return all of the strings joined/concatenated together
//  C: n/a
//  E: n/a
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//return stringOne.concat(stringTwo);
var args = Array.from(arguments);
return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
//  * I: function is given any number of strings
//  *  O: function is to return all of the strings joined/concatenated together
//  * C: n/a
//  * E: n/a
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
var one = stringOne.length
var two = stringTwo.length
if (one > two){
return stringOne;
}
else {
    return stringTwo;
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//  * I: function gives two strings
//  * O: return 1 if stringOne is longer, -1 if the second is longer and 0 if strings are equal 
//  * C: n/a
//  * E: n/a
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// for (var i = 0; i <= alphabet.length - 1; i++)
// if (stringOne[i] > stringTwo[i]){
//     return 1;
// } else if (stringOne[i] < stringTwo[i]) {
//     return -1;
// } else if (stringOne[i] === stringTwo[i]) {
//     return 0
// }

var one = stringOne[0];
var two = stringTwo[0];
if (stringTwo > stringOne){
    return 1;
} else if (stringTwo < stringOne) {
    return -1; 
} else {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
//  *  I: function gives two strings
//  * O: return 1 if string one is alphabetically lower, return -1 if string two is lower and 0 if they are equal
//  * C: n/a
//  * E: n/a
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if (stringOne < stringTwo) {
    return -1;
} else if (stringOne > stringTwo) {
    return 1;
} else {
    return 0;
}



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}