/*
    Properties and methods
        -In most cases, properties aer qualities related to the data we're working with
        and methods are actions we can perfrom on the data we're working with. Usind a method causes
        something to happen to the data, while using a property returns information about the data.
        
        - .property and .mothod()
            -methods have parens behind, properties don't
*/

// string properties

//legth
let myName = 'Zach';
console.log(myName.length);

//String methods

let myDogsName = 'Luna';
console.log(myDogsName.toUpperCase()); //change a string to uppercase

let home = 'My home is Indianpolis';
console.log(home.includes('home')); //true if string includes it

//challenge: use google, gind the MDN documentation for string methods. Find the '.split()' method and use it.
// to get an array back from a strring.

let sent = 'This sentence will be, split into individual parts';

console.log(sent.split('')); //split at each character
console.log(sent.split(' ')); // split at each space
console.log(sent.split(','));

