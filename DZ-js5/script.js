// //1

// let question = prompt('Type some number');

// const countSeason = (season) => {
//     switch (season) {
//         case 1:
//             alert(`It's January!`);
//             break;

//         case 2:
//             alert(`It's February!`);
//             break;

//         case 3:
//             alert(`It's March!`);
//             break;

//         case 4:
//             alert(`It's April!`);
//             break;

//         case 5:
//             alert(`It's May!`);
//             break;

//         case 6:
//             alert(`It's June!`);
//             break;

//         case 7:
//             alert(`It's July!`);
//             break;

//         case 8:
//             alert(`It's August!`);
//             break;

//         case 9:
//             alert(`It's September!`);
//             break;

//         case 10:
//             alert(`It's October!`);
//             break;

//         case 11:
//             alert(`It's November!`);
//             break;

//         case 12:
//             alert(`It's December!`);
//             break;

//         default:
//             alert('Impossible. You have to put a number from 1 to 12!');
//             break;
//     }
// }

// countSeason(parseInt(question));






//2

// let num = prompt('check your num');;

// let findNum = (num) => {
//     if (num % 2 > 0
//         && num % 3 > 0
//         && num % 5 > 0
//         && num % 7 > 0
//         || (num === 2 || num === 3 || num == 7)) {
//             alert('prime num');
//     } else {
//         alert('not prime num');
//     }
// }
// findNum(num);








//3

// let num1 = parseInt(prompt('Enter number'));
// let num2 = parseInt(prompt('Enter number'));
// let num3 = parseInt(prompt('Enter number'));
// let num4 = parseInt(prompt('Enter number'));

// let nums = [num1, num2, num3, num4];

// function biggestNum(nums) {
//     // let maxNum = Number.MIN_SAFE_INTEGER;
//     let maxNum = nums[0];

//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] > maxNum) {
//             maxNum = nums[i];
//         }
//     }
//     return maxNum;
// }

// const result = biggestNum(nums);

// alert(result);

