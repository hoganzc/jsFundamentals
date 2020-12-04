// function expressions are stored inside of a variable

let hello = function () { //an unnamed function = anonymous function. since the function is stored in a varibale we don't need to explicitly give the function a name.
    console.log('hi!')
}

hello(); // when calling a function expression, the name of the variable is what needs to be called

/*
    DIFFERENCES BW FXN DECLARATIONS AND FXN EXPRESSIONS

    -fxn declarations are hoisted. 
    -Function expressions are not hoisted.
*/

decTest()
//expTest()doesn't work - no hoist


function decTest(){
    console.log('it worked, and I was hoisted.')
}

//expression
let expTest = function () {
    console.log("didn't work, and I was not hoisted.")
}