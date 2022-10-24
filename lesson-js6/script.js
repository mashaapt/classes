// let a = prompt('enter the num');

// switch (a) {
//     case 1:
//         console.log('num 1');
//         break;

//     case 2:
//         console.log('num 2');
//         break;

//     case 3 || 4:
//         console.log('num 3 or 4');
//         break;

//     default:
//         console.log('error');
// }


//func declaration

// let a = 10;

// function hello(ten) {
//     console.log('hi');
//     console.log(ten + 2);
// }

// hello(a);






//func expression

// let hi = function() {
//     console.log('hi');

// }

// hi();




//arrow func

// let sum = (num1, num2) => {
//     console.log(num1 + num2);
// }

// let b = 5;
// let c = 10;

// sum(b, c);

// let nums1 = prompt('enter num 1');
// let nums2 = prompt('enter num 2');

// let sum = (num1, num2) => {
//    console.log(num1 + num2);
// }

// sum();

let city = prompt('Enter your city!');

const findCity = (urCity) => {
    switch (urCity) {
        case 'Lviv':
            alert(`You are from ${urCity}.`);
            break;

        case 'Kyiv':
            alert(`You are from ${urCity}.`);
            break;

        case 'Dnipro':
            alert(`You are from ${urCity}.`);
            break;

        case 'Lutsk':
            alert(`You are from ${urCity}.`);
            break;

        default:
            alert('Unknown city.')
            break;
    }
};

findCity(city);
