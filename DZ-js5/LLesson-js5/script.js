// let a = +prompt('Enter number');


// switch (a) {
//     case 1:
//         console.log('number 1');
//         break;
//     case 2:
//         console.log('number 2');
//         break;
//     case 3 || 4:
//         console.log('number 3 or 4');
//         break;
//     default:
//         console.log('eror');
// }

let a = 10


hello(a);

// function declaration
function hello(number) {
    console.log('Hello');
    console.log(number + 2);
}



// function expresion
let hi = function () {
    console.log('hi');
}
// hi();


// стрілочна функція
let sum = (num1, num2) => {

    console.log(num1 + num2);

}

let b = 5;
let c = 10;



sum(b, c);


//користуач вводить назву міста, з допомогою функції перевірити
// назву та привітати користувача з вказаного міста

// Lviv Kyiv Dnipro Lutsk




// let checkCity = (city) => {
//     switch (city) {
//         case 'Lviv':
//         case 'Kyiv':
//         case 'Dnipro':
//             alert(`Hello ${city}`);
//             break;
//         case 'Lutsk':
//             alert(`Hello ${city}`);
//             break;
//         default:
//             alert(`Unknow ${city}`);
//             break;
//     }
// };

// let city = prompt('Enter your city!');
// checkCity(city);

//Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Створити функцію яка буде приймати одне число.
// В середині функції перевіряємо чи це число є простим.
// Після перевірки виводимо повідомлення в console.log().


// if (num / num === 1 && num / 1 === num){

// }



let num = +prompt("Enter your number");

let checknum = (userNum) => {
    if (userNum / userNum === 1
        && userNum / 1 === userNum
        && userNum % 2 !== 0
        && userNum % 3 !== 0
        || userNum === 3
        || userNum === 2) {
        alert("Simple num")
    }
    else {
        alert("Not simple num")

    }
}
checknum(num);