//basically works as a shortcut for writing if and if else statements
let age = 30;
let num = 6;

//ternary
(num > 0) ? console.log('yes') : console.log('no');

//instead of

if (num > 0) {
    console.log('yes');
} else {
    console.log('no');
}

(num > 10) ? console.log('a first statement') : (num < 0) ? console.log('another statement') : console.log('yet another, man')
//question mark asks if condition is true. If it is, it runs the first code. If it isn't, it runs the second code.

let age = 29;
(age >= 25) ? console.log('you can rent a car!') 
: (age >= 21) ? console.log('you can drink!') 
: (age >= 18) ? console.log('you can vote!')
: console.log("You're too young to do anything");

let age = 22;
(age <= 17) ? console.log("Sorry, you're too young to do anything.")
: (age <= 18) ? console.log("You can vote!")
: (age <= 22) ? console.log("You can drink!")
: (age < 25) ? console.log("You can rent a car!")
: console.log("You can do whatever you want!!");

let age = 22;
(age >= 25) ? console.log('you can rent a car!') 
: (age >= 21) ? console.log('you can drink!') 
: (age >= 18) ? console.log('you can vote!')
: console.log("You're too young to do anything");