// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
/**
 * I: given an input array
 * O: Loop forward over the array and print its values.
 * C: print values using console.log
 * E: n/a
 */

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 var newArray = [];
  for ( let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  console.log(newArray);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/**
 * I: Given an input array
 * O: Loop backwards over the array printing its values
 * C: use Console.log
 * E: n/a
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  var reverse = [];
  for(var i = array.length - 1; i >= 0; i--) {
    reverse.shift(input(i));
  }
  console.log(reverse);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/**
 * I: given an input object
 * O: Return an array containg the object keys
 * C: n/a
 * E: n/a
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var newKeys = [];
  for (var key in object) {
   
  }
  console.log(newKeys);  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/**
 * I: input object
 * O: loop over the object and print its keys
 * C: use console.log
 * E: n/a
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
/**
 * I: input is an object
 * O: return an array containing the object's values
 * C: n/a
 * E: n/a
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var objectValues = [];
  // for(var key in object) {
  // }
  for(var i = 0, i < input.length; i++)
  objectValues.push(object[i]);
return objectValues;
  console.log(objectValues)
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/**
 * I: input is an object
 * O: Loop over the object and print its values
 * C: using console.log
 * E: n/a
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var objectsValues = [];
  for(key in object){
    

  }
  console.log(objectValues);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/**
 * I: an object is given
 * O: return the number of key/value pairs stored within that object
 * C: n/a
 * E: n/a
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var pairNumbers = 
  for(var key in object){ 

  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/**
 * I: an object is the given input
 * O: Loop over the object in reverse and print the objects
 * C: use console.log
 * E: n/a
 *
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var newReverseObject = [];
  for(var key in object) {

  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}