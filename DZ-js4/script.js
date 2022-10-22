//1

// let password = 'password';
// let attemptsLeft = 4;
// let validPassword = false;

// do {
//     let ask = prompt('enter the password');
//     if (ask === password) {
//         validPassword = true;
//         alert('welcome');
//     } else {

//         attemptsLeft--;

//         if (attemptsLeft > 0) {
//             alert(`the password is not correct! please enter again. Attemps left ${attemptsLeft}`);
//         } else {
//             alert('Ran out of attempts. Please try again later');

//             // setTimeout(() => {
//             //     attemptsLeft = 4;
//             // }, 60000);
//         }
//     }
// } while (attemptsLeft > 0 && !validPassword);


//2

// let num = prompt('enter your number');
// let f = 1;
// let i = 1;
// do {
//     f *= i;
//     i++;
// } while (i <= num)

// console.log(f);

//3

// let i = 1000;

// do {
//     document.write(`<h3>${i}</h3>`);
//     i += 3;
// } while(i < 9999)

//4

// let i = 1;
// do {
//     document.write(`<h3>${i}</h3>`);
//     i+=2;
// } while (i <  55);


//5

// let i = 5;

// while (i <= 100) {
//     document.write(`<h3>${i}</h3>`)
//     i+=5;
// }


//6

// let counts = 0;
// let nums = 1;

// while(counts < 20) {
//     nums*=2;
//     counts++;
//     document.write(`<h3>${nums}</h3>`)
// }


//7

// let a = 2;

// while (a <= 10000) {
//     let result = 2 * a - 1;
//     document.write(`<h3>${result}</h3>`);
//     a++;
// }

//8

// let a = -166;

// while (a <= 10000) {
//     let result = 2 * a + 200;
//     document.write(`<h3>${result}</h3>`);
//     a+=2;
// }


//9

// let a = prompt('enter your number');
// let b = prompt(`you want to raise your number ${a} to the power of ...`);
// let i =0;

// while (i < 1) {
//     let result = Math.pow(a, b);
//     document.write(`<h3>${result}</h3>`);
//     i++;
// }
