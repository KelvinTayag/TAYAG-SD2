/*
Discussion Topic List:

Arithmetic Operators
Addition Operator (+)
Subtraction Operator (-)
Multiplication Operator (*)
Division Operator (/)

Assignment Operators
Basic Assignment Operator (=)
Addition Assignment Operator (+=)
Subtraction Assignment Operator (-=)
Multiple Operators and Parentheses

Increment and Decrement
Increment Operator (++)
Decrement Operator (--)

Type Coercion
Comparison Operators
Equality Operator (==)
Inequality Operator (!=)
Strict Equality Operator (===)
Strict Inequality Operator (!==)

Relational Operators
Greater Than Operator (>)
Greater Than or Equal To Operator (>=)
Less Than Operator (<)
Less Than or Equal To Operator (<=)

Logical Operators
Logical AND Operator (&&)
Logical OR Operator (||)
Logical NOT Operator (!)

*/

// [SECTION] Arithmetic Operators

let num1 = 10;
let num2 = 2;
let num3 = 3; 

let sum = num1 + num2;

console.log("SUM: " + sum)

let diff = num1 - num2;
console.log("DIFFERENCE: " + diff);

let prod = num1 * num2;
console.log("PRODUCT: " + prod);

let quo = num1 / num2;
console.log("QUOTIENT: " + quo);

let mod =  num1 % num3 ;
console.log("MODULO: " + mod);

// [SECTION] Assignment Operators
let num4 = 20;
let num5 = 8;

// let sum = num4 + num4; -. Old method


// num4 = 20;
num4 += num4;
console.log("ASSIGNMENT OPERATOR += : " + num4);

// num4 = 40;
num4+=num5;
console.log("ASSIGNMENT OPERATOR += : " + num4);

// [SECTION] Incrementation vs Decremnetation
// Inc (++), Dec (--) | let age = 10; age++;

// Pre
let days = 5;
console.log("ORIGINAL VALUE: " + days);

++days;
console.log("PRE-INCREMENT1: " + days);

++days;
console.log("PRE-INCREMENT2: " + days);

// Post 
let months = 4;
console.log("ORIGINAL VALUE: " + months);

months++;
console.log("PRE-INCREMENT1: " + months);

months++;
console.log("PRE-INCREMENT2: " + months);


// Pre
let days2 = 5;
console.log("ORIGINAL VALUE: " + days2);

--days2;
console.log("PRE-INCREMENT1: " + days2);

--days2;
console.log("PRE-INCREMENT2: " + days2);

// Post 
let months2 = 4;
console.log("ORIGINAL VALUE: " + months2);

months2--;
console.log("PRE-INCREMENT1: " + months2);

months2--;
console.log("PRE-INCREMENT2: " + months2);

// [SECTION] Comparison Operators

let num6 = 10;
let num7 = 12;
let num8 = "10";

// Equality Operator

let equality1 = num6 == num7;
console.log("Equality Operator: " + equality1);

let equality2 = num6 == num8;
console.log("Equality Operator: " + equality2);


// Strict Equality

let sequality1 = num6 === num7;
console.log("S-Equality Operator: " + sequality1);

let sequality2 = num6 === num8;
console.log("S-Equality Operator: " + sequality2);

// Not Equal

let notEqual1 = num6 != num7;
console.log("NOT EQUAL: " + notEqual1);

let notEqual2 = num6 != num8;
console.log("NOT EQUAL: " + notEqual2);

// Strictly Not Equal

let snotEqual1 = num6 !== num7;
console.log("S-NOT EQUAL: " + snotEqual1);

let snotEqual2 = num6 !== num8;
console.log("S-NOT EQUAL: " + snotEqual2);

// [SECTION] Relational Operator

let num9 = 25;
let num10 = 15;

console.log("GT: ", num9 > num10);
console.log("LT: ", num9 < num10);
console.log("GTE: ", num9 >= num10);
console.log("LTE: ", num9 <= num10);

//  [SECTION] Logical Operators

let isLegalAge = true, isMarried = false, isVoter = true;


// Logical And (&&)
console.log("LOGICAL AND: ", isLegalAge && isMarried && isVoter);

// Logical OR (||)
console.log("LOGICAL OR: ", isLegalAge || isMarried || isVoter);

//  Logical Not (!)
console.log("LOGICAL NOT: ", !isMarried);

// [SECTION] Large Scale Data Types


// Arrays
// can store multiple elements/value
// value should of the same data type

let array = [10, , 20, 30];
let names = ["Anna", "Jane", "George"]

console.log(names);

let mixedArr = ["John", 3, true]
console.log(mixedArr);

// Objects
// it consits a key/property and a paired value
let user = {
    name: "John",
    gradelevel: 3,
    isEnrolled: true
}

console.log(user);

// [SECTION] Alert vs Prompt

alert("Hello World!");

console.log("Hello");

let completeName = prompt("Please Enter your complete name: ");

console.log("Hello, " + completeName);

let input1 = parseInt(prompt("Enter num1. "));
let input2 = parseInt(prompt("Enter num2. "));

let sum3 = input1 + input2;
console.log("SUM FROM PROMPT: " + sum3);


