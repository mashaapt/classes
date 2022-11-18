//1

// let arr = [5, 6, 7, 8, 9];
// let sum = 0;

// arr.forEach((num) => (sum += num));
// console.log(sum);




//2

// let arr = [5, 6, 7, 8, 9];

// let newArr = arr.map(num => num * num);
// console.log(newArr);




//3

// let arr = [{ name: 'Ivan', country: 'Ukraine' },
// { name: 'Petro', country: 'Ukraine' },
// { name: 'Miguel', country: 'Cuba' }
// ]

// console.log(arr.every(country => country == 'Ukraine'));




//4

// let arr = [{ name: 'Ivan', country: 'Ukraine' },
// { name: 'Petro', country: 'Ukraine' },
// { name: 'Miguel', country: 'Cuba' }
// ]

// console.log(arr.some(obj => obj.country == 'Cuba'));





//5

// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// console.log(arr.filter(Array.isArray));




//6
//1)

// const arr = [1, 2, 5, 0, 4, 5, 6];

// let foundZero = false;
// const sum = arr.reduce((current, item) => {
//     if (item === 0) {
//         foundZero = true;
//     }

//     if (foundZero) {
//         return current;
//     }

//     return current + item;
// }, 0);

// console.log(sum);



//2)

// const arr = [1, 2, 5, 0, 4, 5, 6];

// let hasTen = false;

// const memo = arr.reduce((memo, item) => {
//     hasTen = memo.sum >= 10;

//     if (hasTen) {
//         return memo;
//     }

//     memo.sum += item;
//     memo.count += 1;

//     return memo;
// }, {
//     count: 0,
//     sum: 0
// });

// console.log(memo);





//7

// let arr = [1, -2, 3, 0, 4, -5, 6, -11];

// let posNums = arr.filter(num => num >= 0);
// // console.log(posNums);

// let sqrt = posNums.map(num => Math.sqrt(num));
// console.log(sqrt);