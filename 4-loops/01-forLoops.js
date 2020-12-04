/*
    -Loops offer a quick and easy way to do something repeatedly, or loop over something
    -There are many different kinds of loops, but they all do roughly the same thing: 
    the loop will repeat until a specified condition evalutaes as false

    -for loop
    -do while loop
    -while loop
    -for in
    -for of

    -for loop takes in 3 parameters
        1. initial expression
        2. condition
        3. increment expression
    
        * separated by semi colon

    -infinite loops are also possible - try and avoid
*/

for (let i = 0; i < 10; i++){ // i = i + 1
console.log(i)
}

//challenge : count to 20 by 2

for (let i = 0; i <= 20; i += 2){
    console.log(i)
}

for (let i = 10; i >= 0; i -= 1){
    console.log(i)
}


for (let i = 0; i >= -24; i -= 2){
    console.log(i)
}

let name = "Spongebob"

for (let i = 0; i < name.length; i +=1){
    console.log(name[i])
}

let name = "Spongebob"
console.log(name.length) //me testing this out

let num = 0
for (let i = 0; i <= 50; num +=i){
    i ++
    console.log(num)
}