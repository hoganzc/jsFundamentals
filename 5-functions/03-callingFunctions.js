// CALLING FUNCTIONS


function hello(){
    console.log('hi')
}

hello()
//hello; // nothing happens
//hello(); //hi
console.log(hello) //acknowledges the existene of the fxn
console.log(hello()) // hi!, undefined. fxn invocations happen immediately once the line of code is read. the function will run before anithing else in that line of code will run


//  CHALLENGE: create a fxn that when called, prints out the numbers 1-10

function count() {
    for (let i = 0; i < 11; i++) { // i = i + 1
        console.log(i)
    }
}

count()

//CHALLENGE: given the array, create a function that lists out the values individually

let arr = ['this','is','really','cool']

function list(){
    for (let word of arr) {
        console.log(word);
    }
}

list()
