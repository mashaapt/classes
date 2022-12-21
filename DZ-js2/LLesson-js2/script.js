// let a = 1;

// let b = false;

// console.log(a > b);


// let a = 2;
// let b = 2;
// let d = a == b;
// console.log(d);

// let x = a != b;
// console.log(x);

// let f = true;

// let j = f == a;
// console.log(j);




// let num = +prompt('Ввведіть число')
// if (isNaN(num) === false) {
//     console.log('все гуд');
// } else {
//     console.log('все не гуд');
// }


let a = 1;
a++;
console.log(a);




// if (confirm('Починаєм гру?') == true) {
//     console.log('game start');

//     let num1 = +prompt('Введіть перше число ');
//     if (isNaN(num1) === false) {
//         console.log(num1);

//         let num2 = +prompt(`Введіть друге число ,
//          а ваше перше число було ${num1}`);
//         if (isNaN(num2) === false) {
//             console.log(num2);

//             let random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
//             console.log('рандомне число ' + random);

//             let res = +prompt('Введіть число яке на вашу думку згенерувалось');
//             if (res === random) {
//                 alert(`Вітаємо ви перемогли, рандомне число було ${random}`);
//             } else {
//                 alert('Ви не вгадали, спробуйте ще!')
//             }




//         } else {
//             alert('Ви ввели не число');
//         }

//     } else {
//         alert('Ви ввели не число');
//     }



// } else {
//     alert('Перезагрузіть сторінку щоб розпочати гру');
// }







// Якщо користувач вводить «Ім’я», то питати пароль, якщо натиснув скасувати(escape)
//  - виводити «Вхід скасований», якщо вводить щось інше - «Я вас не знаю». 
// Пароль перевіряти так.Якщо введений пароль «ЛОГОС», то виводити «Ласкаво просимо!»,
//  Інакше - «Пароль невірний», при скасуванні - «Вхід скасований».

let newUser = prompt('Вітаємо в системі придумайте логін: ');
let passUser = 'ЛОГОС';



let userName = prompt("Введіть логін ");
if (userName == newUser){  
    let curPass = prompt("Введіть пароль ");
    if (curPass == passUser) {
        alert(`${userName} вітаємо на порталі!`);
    }
    else {
        console.log('не правильний пароль');
    }

} else{
    console.log('не правильний логін');
}