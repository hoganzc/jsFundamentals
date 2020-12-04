/*
-falsy values: A falsy value is a value that is considered false when encountered in a 
boolean context (booleans are a data type that can only be 'true' or 'false')

    -there are six cases of falsy values in Javascript:
    1. false
    2. 0 (or really any number)
    3. "", '', ``
    4. null
    5. undefined
    6. NaN (not a number)

-This means when javascript is expecting boolean and is given one of these values,
it will always evaluate to "falsy"

*/

let isOn = true;

//Runs code if the statement is true
if (isOn == true) {
    console.log('The light is on!');
}

//Simplified version
if (isOn) {
    console.log('The light is still on!');
}

let isOff = false;

if (isOff == false) {
    console.log("The light is off now")
}

let weather = 75

if (weather < 70) {
    console.log('Wear a jacket')
}

