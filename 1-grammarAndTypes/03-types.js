/* boolean

    -a boolean has two possible values of either true or false
*/

let lightIsOn = true;
console.log(lightIsOn);

let lightIsOff = false;
console.log(lightIsOff);

/*
    Null

        -Null is an empty value. Think of it as an empty containter: Nothing is in it, but it
        still exists as a space to fill
*/

let empty = null;
console.log(empty);

/*
undefined
    -No value has been assigned, and it does not act as an empty container
*/

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

/*

Numbers
    -numbers or integers are literally just numbers. Numbers do not need anything special
    when being written
*/

let degrees = 40
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

//rounds up after 16 characters. JS isn't great at math

let a = Number('123')
console.log(a);

/*
Strings 
    -strings are datatypes used to represent text and are either wrapped in single or double quotes
*/

let stringOne = "double quotes";
let stringTwo = 'sinlge quotes';

console.log(stringOne, stringTwo);

let first = 1050+100;
let second = '1050' + '100'; //string concatenation - takes two strings and combines them into one

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string

let third = 1150 + '100' //type coersion. combines both to a string
console.log(third)

/*
object
    -objects allow us to store multiple values instead of a single value
    -objects are denoted by {}
    -objects hold what are known as key value pairs
*/

let frodo = {
    race: 'habbit',
//   key    value
    rings: 1,
    cloak: true
}

console.log(frodo);

/*
    Array
    -arrays are containers that hold a list of items
    -arrays are denoted by square brackets
*/

let burritos = ['large', 4, true];
console.log(burritos);

