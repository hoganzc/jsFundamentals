/*

    OBJECT BRACKET NOTATION
    -Bracket notation can also be used with objects to pull out values just like we would with an array.
    -object bracket notation can be handy if we want to store new keys in an object, and then reference those keys later on

    -all keys in an object are strings
*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    size: 10
}

//keys in an object are strings, even though we don't need to explicitly wrap them in quotes
let test = Object.keys(garden) //will return us an array of all of the keys in the referenced object
console.log(test);
console.log(typeof test[0]); //can see these keys are by defualt string

let zucchini = garden['vegetable'] //we can access keys in an object by specifying the name of the object that we want to reference, followed by the key's named in square brackets. The key name that we pass into the square brackets, needs to be wrapped in quotes, since all keys in objects are strings.
console.log(zucchini)

//setting a new key/value pair in an object using square bracket notation
let baking = {};
baking['zucchini'] = 'better make some bread!'
console.log(baking);

console.log(baking[garden['vegetable']])

//using square bracket notation is agood idea when you aren't able to use dot notation to dig through an object

//Spaces are very rare. But when they're there, you need to use square bracket notation

let testObj = {
    "spaces here": true,
    noSpaces: true
}

console.log(testObj.noSpaces);
console.log(testObj["spaces here"]);