/*
    ARROW FUNCTIONS (also called fat arrow functions)

    -basically a more concise way to write function expressions (fxn stored inside a variable), not a function declaration
        -function expressions do NOT get hoisted unlike function declarations
*/

//BLOCK BODY ARROW FUNCTION---------------------------------------

let hello = () => { //any parameters that your function may hold, will go inside of the set of parens
    console.log('Hello world');
}

hello()

//regular function expression
let hello = function () {
    
}

//CONCISE BODY ARROW FUNCTION-------------------------------------
let hello = () => console.log('Hello world');

/*
    NOTE: Concise body arrow functions return any value by defualt; whereas 
    block body arrow functions do not. We need to implicitly soecify what value we want to return
*/

//CONCISE BODY VS BLOCK BODY--------------------------------------

//concise body arrow function
let apples = (number) => console.log(`There are ${number} apples`);
//when there's only a single parameter, don't need parens around it
//so you could write 'let apples = number => console.log(bla bla bla)'

apples(10);
apples(5);
apples ('five');


//block body

let apples = number => {
    console.log(`There are ${number} apples`)
}

apples(10);
apples('ten')
apples(false)

// When your function needs to perform more complex tasks or multiple tasks, its preferred to use a block body arrow function. When your function needs to perform a singular or a very simple task, a concise body arrow function is preferred