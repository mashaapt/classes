//1

let userGrades = 0;
let test = confirm('Let\'s pass some queeze');

let a1 = 'Ottawa'.toUpperCase();
let a2 = 'Kyiv'.toUpperCase();
let a3 = 'Washington'.toUpperCase();
let a4 = 'Reykjavik'.toUpperCase();
let a5 = 'Madrid'.toUpperCase();
let a6 = 'Tokyo'.toUpperCase();
let a7 = 'Canberra'.toUpperCase();
let a8 = 'Paris'.toUpperCase();
let a9 = 'Lisbon'.toUpperCase();
let a10 = 'Tallinn'.toUpperCase();

let q1 = prompt(`What's the capital of Canada?`);
if (q1.toUpperCase() === a1) {
    userGrades++;
}

let q2 = prompt(`What's the capital of Ukraine?`);
if (q2.toUpperCase() === a2) {
    userGrades++;
}

let q3 = prompt(`What's the capital of US?`);
if (q3.toUpperCase() === a3) {
    userGrades++;
}

let q4 = prompt(`What's the capital of Iceland?`);
if (q4.toUpperCase() === a4) {
    userGrades++;
}

let q5 = prompt(`What's the capital of Spain?`);
if (q5.toUpperCase() === a5) {
    userGrades++;
}

let q6 = prompt(`What's the capital of Japan?`);
if (q6.toUpperCase() === a6) {
    userGrades++;
}
let q7 = prompt(`What's the capital of Australia?`);
if (q7.toUpperCase() === a7) {
    userGrades++;
}

let q8 = prompt(`What's the capital of France?`);
if (q8.toUpperCase() === a8) {
    userGrades++;
}

let q9 = prompt(`What's the capital of Portugal?`);
if (q9.toUpperCase() === a9) {
    userGrades++;
}

let q10 = prompt(`What's the capital of Estonia?`);
if (q10.toUpperCase() === a10) {
    userGrades++;
}

if (userGrades >= 9) {
    alert('Congrats, you have good knowledge! 10 of 10 :)')
} else if (userGrades >= 5) {
    alert('Not bad! You\'re doing great!')
} else {
    alert('Not so good result! Go study!')
}
console.log(userGrades);
