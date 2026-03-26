// console.log("Hello World!");

// [SECTION] JS Function
// Performs specific task, and eliminate repetetive codes
// SYNTAX: Function functionName(parameter){//code block}

// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");
// console.log("Hello World!");

// // we need trigger

// function sayHello(){
//     console.log("Hello, San Fernando City, Pampanga!");
// }

// // Invocation/Invoke or Function Calling
// sayHello();
// sayHello();
// sayHello();
// sayHello();
// sayHello();


// function showAlert(){
//     alert("Hello, User!");
// }


let num1 = 0, num2 = 0;

function startCalc(){
    let userInput = parseInt(prompt("Please select an action: \n [1] Input Numbers \n [2] Sum \n [3] Difference\n [4] Product\n [5] Quotient\n [6] Reset"));

    switch (userInput){
        case 1:
            enterNumbers();
            break;
        case 2:
            sum();
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
    }
}

function enterNumbers(){
    let inputNum1 = parseInt(prompt("Enter first number."));
    let inputNum2 = parseInt(prompt("Enter second number."));
    num1 = inputNum1;
    num2 = inputNum2;
}

// Template literal (``)
function sum(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    } else{
        let sum = num1 + num2;
        alert(`The sum of ${num1} and ${num2} is ${sum}. `);
    }
    
}

function difference(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    } else{
        let difference = num1 - num2;
        alert(`The difference of ${num1} and ${num2} is ${difference}. `);
    }
    
}

function product(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    } else{
        let product = num1 * num2;
        alert(`The product of ${num1} and ${num2} is ${product}. `);
    }
    
}

function quotient(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    } else{
        let quotient = num1 / num2;
        alert(`The quotient of ${num1} and ${num2} is ${quotient}. `);
    }

}

function reset(){
    num1 = 0;
    num2 = 0;
}