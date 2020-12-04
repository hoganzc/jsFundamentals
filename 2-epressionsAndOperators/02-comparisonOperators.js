// EQUAL
'3' == 3;
console.log('3' == 3);

/*
    -coercion is the process of converting a value from one type to another
    - in the example above, javascript assumes that we are trying to check if a number of 3 is equal to another number of 3,
    even though one of the values is a string.
*/

// Strict equal - this overrides javascript coercion
console.log(3 === 3); //true
console.log('3' === 3); //false

//NOT EQUAL
console.log('3' != 3);

//STRICT NOT EQUAL
console.log('3' !== 3);
console.log(4 !== 5);

// GREATER THAN
3 > 2 //TRUE

//LESS THAN OR EQUAL TO
3 >= 2; // not confused to be confused with => (fat arrow functions)

// AND
2 && 3

//OR 
2 || 3;