// #!/usr/bin/env node

'use strict';

const { stubFalse } = require("lodash");

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //  
// Array will test positive for Object if used with typeof; use Array.isArray()
      if (Array.isArray(value)) return false;
      // Null will test positive; use strict comparison
    if (value === null) return false;
    // Date will test positive for object if used with tyepof; use instanceof
  if (value instanceof Date) return false;
  if (value === undefined) return false;
  // now clear to use type of on any other value to see if it is an object
  if (typeof value === 'object') return true;  
  if(typeof value !== 'object') return false;
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // first check to see if it is an array:
    if (Array.isArray(value)){
        return true;
    } // then see if it is an object intended as a collection
 if (value === null) return false;
 if (value instanceof Date) return false;
 if (typeof value === 'object') return true;
 if (typeof value !== 'object') return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    if (value === null) {
        return "null";
    } if (Array.isArray(value)) {
        return 'array';
    } if (value instanceof Date) {
        return "date";
    } 
    return typeof value;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}