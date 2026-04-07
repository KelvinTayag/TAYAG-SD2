// console.log("Hello World!");

// [SECTION] Array
//An Array is aslo a storage for multiple elements/values
// The best practive is values/elemnts stored in an array should be of the same data type.

let pokemon = ["pikachu", "charmander", "squirtle"];
console.log(pokemon);

console.log(pokemon[0]);
console.log(pokemon[2]);

console.log(`My favorite pokemon is ${pokemon[0]}.`);

console.log(`My favorite pokemon is ${pokemon[0].toLocaleUpperCase()}.`);

// get the length of an array
console.log(pokemon.length);

// Accessing an index that is not existing will result -> undefined.
console.log(pokemon[5]);

// Array Mutation
// Modifying Array Elements

pokemon[3] = "bulbasaur";

console.log(pokemon);
console.log(pokemon.length);

pokemon[1] = "Charmeleon";

console.log(pokemon);
console.log(pokemon.length);

pokemon[10] = "Mew";
console.log(pokemon);
console.log(pokemon.length);

// Add an element on the tail of an array without knowing the actual index number. 

console.log(pokemon.length);
pokemon[pokemon.length] = "snorlax";

console.log(pokemon);
console.log(pokemon.length);

// Access the last element  on the array
console.log(pokemon[pokemon.length - 1]);

//[SECTION] MODERN ARRAY MUTATION METHODS

let fruits = ["Apple", "Banana", "Melon"];

// push() -> add an element on the tail of an array
console.log("Original Array: " + fruits);
fruits.push("Strawberry");
console.log("Push method: " + fruits);

// pop() -> remove the element of an array
console.log("Original Array: " + fruits);
fruits.pop(); // strawberry -> removed
fruits.pop(); //melon -> removed
console.log("Pop method: " + fruits);

// unshift -> adds an element on the head part of an Array
console.log("Original Array: " + fruits);
fruits.unshift("Strawberry");
console.log("Unshift method: " + fruits);

fruits.unshift("Grapes", "melon", "kiwi");
console.log("Unshift Method: " + fruits);

// shift() -> removed an element on the head part if an array
fruits.shift();
fruits.shift();
console.log("Shift Method: " + fruits);

// sort() -> sorts elements in  an array
fruits.sort();
console.log(fruits);

// reverse() -> sorts in reverse manner
fruits.reverse();
console.log(fruits);

//  splice() -> adds or remove an element on a specified index

fruits.splice(1, 2, "Blue Berry");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

// forEach() -> read each element inside an array

fruits.forEach((x) => { // kung anong laman ng x 
    console.log(x);
}) 
