/*
    PARAMETERS

    -parameters are placeholders for data that we pass into the function when the function is called
                    (1)
    function hello(name) {
        console.log(`hello ${name}`);
    }                         (2)
            (3)
    hello('Zach')

    1.this is the parameter that the function is holding. This is just a placeholder.
    2.by calling the parameter name, it will print the value given to the 'name' when the function is called
    3.this is the data that we're passing into the function, and the parameter 'name' will then hold
*/

function hello(name) {
    console.log(`hello ${name}`);
}

hello('Zach'); //when we call the function is where we need to pass the data that we want to assign to the parameter

//----------------------------

function zach(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`)
}

zach('cheese pizza') // if you have no parameter (or placeholder), then your function will not be able to accept any data


//---------------------------

function counter(number) {
    console.log(number)
}

for (let i=0; i<=10; i ++) {
    counter(i)
}

//-------------------------- CHALLENGE

function fullName(first, last){
    console.log(first, last)
}

fullName('Zach', 'Hogan')

let count = 0;
for ( ;  count < 9; ++count ) {
  console.log(count);
}

// INSTRUCTOR SOLUTION: Challenge: write a function that holds 2 parameters. One parameter is for a first name, the other is for a last name. Inside of the function, reference the two parameters in a console.log statement that prints off your full name. Parameters are separated by a comma ie: function fullName(fName, lName)
//                  1      2
function fullName(fName, lName) {
    // let myFullName = fName + ' ' + lName;
    let myFullName = `${fName} ${lName}`;
    console.log(`Hello, my name is ${myFullName}`);
}
//          1        2
fullName('Zach', 'Maynard');