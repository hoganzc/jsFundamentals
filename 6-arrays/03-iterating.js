let food = ['Pecan Pie','Shrimp','Quesadilla','Cheesecake','Hot Dog'];

//regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i])
}

//forEach() method. Methods need ()!
food.forEach(function(foodItem) {
    console.log(foodItem)
})

// forEach() method - fat arrow function
food.forEach(foodItem => console.log(foodItem));

//---------------------------------------------

let food = ['Pecan Pie','Shrimp','Quesadilla','Cheesecake','Hot Dog'];

for (let i = 0; i < food.length, i++) {
    listMyFood(food[i]);
}

function listMyFood(foodItem) {
    console.log(foodItem)
}

// Look at the MDN docs for the forEach() method
//Challenge: in the forEach() method, include the optional index parameter, and print that index to the console

let food = ['Pecan Pie','Shrimp','Quesadilla','Cheesecake','Hot Dog'];

//concise body arrow function
food.forEach((foodItem, index) => console.log(foodItem));

//block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})

//function declaration
food.forEach(function(foodItem, index) {
    console.log(foodItem, index);
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach(film => console.log(film));
movies.push('The rise of Skywalker');
console.log(movies);
movies.splice(1,1,'The Last Jedi');
console.log(movies)