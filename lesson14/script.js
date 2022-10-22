// let a = 1;
// let b = false;

// console.log(a > b);

// if (a > b) {
//     console.log('hi')
// }





// let a = 1;
// let b = 2;
// let d = a == b;
// console.log(d);


// let x = a != b;


// let f = true;
// let j = f == a;
//true = 1; false = 0


// let num = prompt('write a num');
// if (num === true) {
//     console.log('good')
// } else (
//     console.log('bad')
// )


// if (isNaN(num) === false) {
//     console.log('gud')
// }





// let a = 1;
// a++;
// ++a;
// console.log(a);
// // ∆




// if (confirm('Wanna play?') == true) {
//     console.log('START');
//     let num1 = +prompt('type the first number');

//     if (isNaN(num1) === false) {
//         console.log(num1);

//         let num2 = +prompt(` Your first number was: ${num1}, so now please type the second one`);
//         if (isNaN(num2) === false) {
//             console.log(num2)

//             let random = Math.floor(Math.random() * (num2 - num1 +1) + num1);
//             // console.log('Random num is ', random);

//             let result = +prompt('Type your guess');
//             if (result === random) {
//                 alert('Congrats')
//             } else {
//                 alert(`Sorry, but number is ${random} `)
//             }
//         }


//     } else {
//         console.log('Not a number')
//     };



// } else {
//     alert('REFRESH THE PAGE')
// }

let userName = prompt('Type your name please');
let password = '';
let passUser = 'Logos';

if (userName) {
    let curPass = prompt(`Please type your password, ${userName}`)
    if (curPass === passUser) {
        alert('Welcome')
    } else {
        alert('Wrong password')
    }
} else {
    alert('Enter has been declined')
}

