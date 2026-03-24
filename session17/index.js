// console.log("Hello World!");

// [SECTION] Repeatition Control Structures 
//  while loop

/*
SYNTAX:

while (condition) {  
    // code block
    // iteration
}


*/

// no output if may error 

let count = 0;

while(count < 5){
    console.log("DO LOOP: " + count);
    count++;
}

/* 

>>1st iteration<<
let count = 0;

while(0 < 5){
    console.log("DO LOOP: " + 0);
    count++;
}

RESULT -> DO LOOP: 0

>>2nd iteration<<
let count = 1;

while(1 < 5){
    console.log("DO LOOP: " + 1);
    count++;
}

RESULT -> DO LOOP: 1

>>3rd iteration<<
let count = 2;

while(2 < 5){
    console.log("DO LOOP: " + 2);
    count++;
}

RESULT -> DO LOOP: 2

>>4th iteration<<
let count = 3;

while(3 < 5){
    console.log("DO LOOP: " + 3);
    count++;
}

RESULT -> DO LOOP: 3

>>5th iteration<<
let count = 4;

while(4 < 5){
    console.log("DO LOOP: " + 4);
    count++;
}

RESULT -> DO LOOP: 4

>>6th iteration<<
let count = 5;

while(5 < 5){
    console.log("DO LOOP: " + 5);
    count++;
}


*/

/* 
SYNTAX:

do {
    // Code Block
    // Iteration
}while (condition)


*/

//  mag output ng isang beses kapag may error
let score = 0;

do{
    console.log("DO WHILE LOOP: " + score);
    score++;
} while (score < 5)


// 3. For Loop

/* 

SYNTAX:

for (initialization; condition; iterator) {
    // code block
}


*/


for(let i = 0; i < 5; i++) {
    console.log("FOR LOOP: " + i);
}

for(let i = 0; i < 10; i++){
    if(i % 3 == 0){
        console.log("COUNT: " + i + " - Divisible by 3.");
    }else{
        console.log("COUNT: " + i);
    }
}

// continue - break 


for(let count = 0; count < 20; count++){
    if(count == 18){
        break;
    }
    
    console.log("COUNT: " + count);
}


for(let count = 0; count < 20; count++){
    if(count == 15){
        console.log("Hello it is me: " + count);
        continue;
    }

    console.log("COUNT: " + count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning){
    if(accountLocked != 3){
        let input = prompt("Please Enter your password.");
        if(input != password){
            console.log("Incorrect password. chance: ", 2-accountLocked);
            accountLocked++;
        }else{
            isLoggedIn = true;
            alert("Welcome, User!")
            isRunning = false;
        }
    }else{
        alert("Account is Locked!, Please contact the admin.")
        isRunning = false;
    }
}

let input = parseInt(prompt("Please enter a number. "));

for(let i = 0; i <= input; i++){
    console.log(i);
}
