// let a = 5;
// let b = 10;

// const sum = (a, b) => {
//     let res = 0;
//     if (a > b) {
//         res += a + b;
//     } else {
//         res += a - b;
//     }
//     return res;
// }

// const sum = (a, b) => {
//     return (a > b) ? a + b: a - b;
// }



// console.log(sum(a, b));



// створити функцію яка через промтп приймає три числа і визначає
//  яке більше 

// 



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


const random = () => {
    let start = confirm('Починаєм гру?');
    // let a = console.log('start game');

    const number = () => {
        let num1 = +prompt('Введіть перше число');
        let num2 = +prompt('Введіть друге число');

        const checkRandom = (num1, num2) => {
            let random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
            console.log('рандомне число ' + random);
            let res = +prompt('Введіть число яке на вашу думку згенерувалось');

            console.log('enter checkRandom');
            let attemp = 4;
            do{
                attemp--;

            } while (attemp > 0);


            // return (res !== random) ? alert('Ви не вгадали'):
            //     alert(`Вітаємо ви вгадали рандомне число, це було ${res}`)


        }

        return (isNaN(num1) === true) ? alert('вводіть тільки числа') :
            (isNaN(num2) === true) ? alert('вводіть тільки числа') :
                (num2 - num1 < 10 && num1 - num2 < 10) ?
                    alert('крок між числами повинен бути не менше 10') :
                    checkRandom(num1, num2);


    }


    return (start !== true) ? alert('Для старту гри клацніть на кнопку') :
        number();

}