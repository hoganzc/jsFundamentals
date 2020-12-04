let myName = 'ZAchARy'

console.log(myName.charAt(0));
console.log(myName[0]);

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

//Bronze

if (myName[0] == myName[0].toUpperCase()){
console.log(myName)
} else {
console.log("hey, this isn't written correctly")
}

//Silver

if (myName[0] == myName[0].toUpperCase()){
    console.log(myName[0])
    } else {
    console.log(myName.slice(1).toLowerCase())
    }

//gold

if (myName[0] == myName[0].toUpperCase()){
    console.log(myName[0] + myName.slice(1).toLowerCase())
    } else {
    console.log(myName[0].toUpperCase() + myName.slice(1).toLowerCase())
    }

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 25;

if (age <= 17) {
console.log("Sorry, you're too young to do anything.")
  } else if (age >= 18) {
console.log('You can vote!')
  } else if (age >= 21) {
console.log('You can drink!')
    } else {
console.log('You can rent a car!')
  }

  //this actually doesn't work because 29 gets stuck at > 18