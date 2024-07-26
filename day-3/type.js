// #!/usr/bin/env node

'use strict';

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
/**
 * I: given an input value
 * O: return true if the value is an array, else false
 * C: n/a
 * E: n/a
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)) return true;
    else return false;
    
    
    
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
 */
/**
 * I: Given an input value
 * O: If the value is an object return true, else false
 * C: n/a
 * E: n/a
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)) return false;
    if(value === null) return false;
    if(value instanceof Date) return false;
    if(typeof value === "object") return true;    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/**
 * I: given an input value
 * O: return true if it is an Object or Array intended as a collection. return false otherwise
 * C: n/a
 * E: n/a
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if(Array.isArray(value)) return true;
    if(value === null) return false;
    if(value instanceof Date) return false;
    if(typeof value === "object") return true;  
    
    
    
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
/**
 * I: input value is given.
 * O: return the value type now as the value of a string
 * C: n/a
 * E: n/a
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    var stringValue = [];
    for(var i = 0, i < value.length, i++) {
        push.string(i);
    }
    
    
    
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