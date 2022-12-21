// let a = 5;
// let b = 10;
// let c = 20;

// const sum = (a,b) => {
//     let res = 0;
//     if (a > b) {
//        res = a + b;
//     } else {
//        res = a - b;
//     }
//     return res;
// }

// const sum = (a, b) => {
//     return (a > b) ? a + b : a - b;
// }
// console.log(sum(a, b));

// let a = prompt('type num');
// let b = prompt('type num');
// let c = prompt('type num');

// const num = (a, b, c) => {
//     let num = (a > b && a > b) ? a :
//         (b > a && b > c) ? b :
//             (c > a && c > b);

//     alert(num);
// }

// num();

const random = () => {
    let start = confirm('Wanna play?');

    let num = () => {
        let num1 = parseInt(prompt('enter the first num'));
        let num2 = parseInt(prompt('enter the second num'))

        const checkRandom = () => {
            let random = Math.floor(Math.random() * (num2 - num1 +1) + num1);
            let ask = prompt('guess num');

            let attemp = 4;
            do {
                if (result === random) {
                    alert ('congrats') 
                } else {
                alert(`Sorry, but number is ${random} `)
                }
            } while (attemp);
            checkRandom();
           
        }

       
        return (isNaN(num1) === true) ? alert('type only nums') :
        (isNaN(num2) === true) ?  alert('type only nums') :
        (num2 - num1) < 10 || (num1 - num2) < 10 ?
        alert('one num must be larger on 10 than another num') :
        checkRandom();

    }
            
    return (start !== true) ? alert ('push the button for start') : num();
    
        }

       


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
    
    // let userName = prompt('Type your name please');
    // let password = '';
    // let passUser = 'Logos';
    
    // if (userName) {
    //     let curPass = prompt(`Please type your password, ${userName}`)
    //     if (curPass === passUser) {
    //         alert('Welcome')
    //     } else {
    //         alert('Wrong password')
    //     }
    // } else {
    //     alert('Enter has been declined')
    // }
    