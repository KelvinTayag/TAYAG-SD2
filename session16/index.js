console.log("Hello World!");

// [SECTION] Selection Control Structure
// 1. if-else else-if statement

// let age = 10;

// if(age >= 18) {
//     console.log("You are eligible for driver license.");
// }

// let city = "manila";

// if(city == "manila"){
//     console.log("Welcome to the capital region.");
// }else {
//     console.log("The selected area is not in Manila.");
// }

// if(age >= 18 && city == "cebu"){
//     console.log("You can register for the event.");
// } else if (age <= 18) {
//     console.log("You are not eligible for the event.");
// } else {
//     console.log("All criteria not met.");
// }

// let role = prompt("Please etnter your role.").toLocaleLowerCase();

// if(role == "admin") {
//     alert("Welcome to UA Portal, Administrator!");
// } else if(role == "teacher") {
//     alert("Welcome to UA, Faculty!");
// } else if (role == "student") {
//     alert("Welcome to UA, Assumptionist!");
// } else {
//     alert("Please enter valid role");
// }


// STRING PUT A "" 
let role = prompt("Please etnter your role.").toLocaleLowerCase();

switch (role) {
    case "admin":
        alert("Welcome to UA Portal, Administrator!");
        break;
    case "teacher": 
        alert("Welcome to UA, Faculty!");
        break;
    case "student":
        alert("Welcome to UA, Assumptionist!");
    default:
        alert("Please enter valid role");
        break;
}


// 2/ Switch-Case Statement

// INTEGERS 

// let day = 2;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4: 
//         console.log("Thursday");
//         break;
//     case 5: 
//         console.log("Friday");
//     default:
//         console.log("Please enter between 1-5 only");
//         break;
// }