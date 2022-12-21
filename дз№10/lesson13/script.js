// var x;
// let y;

// x = 5;
// y = 8;
// console.log(x-y);

// a = 5; console error
// var a = 10; console 10

let x2 = '5 lalal';
console.log(typeof x2);
//string

let x1 = 5;
console.log(typeof x1);
//number

let x3 = false;
console.log(typeof x3);
//boolean

let x5 = null;
console.log(x5);

let x6 = {
    name: 'kitten',
    age: 3,
    favFood: 'fish',
    look: {
        hair: 'red',
        size: 'small'
    }
};
console.log(x6.look);

let x7 = Symbol('frog');
console.log(x7);
//symbol

const theBiggestInt = 9007199254740991n;
console.log(theBiggestInt);
//bigint just huge nums

// let a = Number,MAX_SAFE_INTEGER;

let a = 'hello';
alert(a);

let answer = prompt('R u hungry?', 'Yes/No');
console.log(answer);

let confirmation = confirm('U ready?');
console.log(confirmation);

