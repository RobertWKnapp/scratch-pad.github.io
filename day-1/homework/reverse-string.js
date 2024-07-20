// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/**
 * I: Function named reverseString takes a string as it's only input
 * O: A new string is returned in reverse order
 * C: Use a loop, create a var to collect output
 * E: n/a
 */
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // create var to put data in
    // var inputRev;
    // //  use a for loop to go through the string in reverse and put them in the var.
    // for (let i = input.length - 1; i >= 0, i--) {
    //   // var inputRev to add each new i
    //   inputRev += input[i];
    // }
    // // return inputRev
    // return(inputRev);
      // split the input string into individual characters
  var splitString = input.split('');
  var reverseInput = splitString.reverse();
  var joinInput = reverseInput.join('');
  // for (let i = input.length - 1; i >=0, i--) {
  //   inputRev += input[i];
  // }
  // return inputRev;
  return joinInput;
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}