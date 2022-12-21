// for(let i = 0;i <= 10; i++) {
//     console.log(i)
// }

// let i = 0;
// while(i <= 10) {
//     console.log(i++)
// }


///////////

// var a = 5;

// if(a > 4) {
//     console.log(a); //5
//     let b = 10;
// } else {
//     a = 20;
// }

// console.log(a);//10

//////

// var result;
// var b = prompt('');

// if (b > 0) {
//     result = 'positive';
// } else {
//     result = 'negative';
// }

// console.log(result);

//////

// if(true) {
//     var a = 5;
//     console.log(a);
//     a = 10;
// }

// console.log(a);

////////

// let a = 5;

// if(true) {
//     let a = 5;
//     console.log(a);
//     a = 10;
// }

// console.log(a);

/////////////


// let i = 0;

// while(i = 10) {
//     i = 10
//     console.log(i) //10 inside
// }

// console.log(i); //0 outside


// let isTrue = false;
// do {
//     let num = prompt('enter num');
//     if (num > 0) {
//         isTrue = true;
//     } else {
//         isTrue = false;
//     }
//     console.log(isTrue);
// } while (isTrue);
//positive - true, negative - false
//better to do DO firstly, not while do , but do while; but better just while though

////////1
// let i = -200;
// while(i <= 200) {
//     console.log(i);
//     i++;
// }


//////////2
// const word = 'apple'.toUpperCase();
// let guess = prompt('guess the fruit');

// while(guess !== word) {
//     // guess = false;
// }
// if(guess === word) {
//     console.log('good')
// } else {
//     console.log('bad')
// }




// const word = 'apple'.toUpperCase();
// let fruit;

// do {
//     fruit = prompt('guess the fruit');
// } while(fruit !== word);



//////////3
// let num;
// let i = 0;
// let counts = 0;
// while(i < 5) {
//     num = prompt('enter ur num');
//     if(num > 0) {
//         counts++;
//     }
//     i++;
// }
// console.log(counts);


////////4. break
// let i = 0;

// point: {
//     while(i < 10) {
//         let j = 0;
    
//         console.log(i++);
    
//         while (j < 10) {
//             console.log(j++);
//             if(j === 5) {
//                 break point;
//             }
//         }
//     }
// }



/////5.   continue
let j = 0;

while (j < 10) {
    j++;
    
    if(j === 5) {
        continue;//missed 5,cause we mentioned it in the is statement condition
    }
    // if(j % 2) {
    //     continue;
    // }
    console.log(j);

}


//test
// dcsf