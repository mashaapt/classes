//regular expressions

// let regExp = /hello/
// // let regExp1 = new RegExp('hello');
// let str = 'hello';

// console.log(regExp.test(str));
// test() returns boolean

// let regExp = /^hello/
// put ^ when the string begins with this string

// let regExp = /hello$/
// put $ when the string ends with this string

// let regExp = /^hello.*world$/
// put .* when you want to put blabla between some strings 

// let regExp = /[a-z]/
// diapazon(spectrum/ range) through the letters only for small ones(nums are true too)
// for capital letters put /[A-Z]/
// when there is only till C, but you put D and then C - will be true

// let regExp = /[0-9]/

// let regExp = /[A-Za-z0-9]/
// let str = '1aa23';
// mixed

// let regExp = /[^A-Za-z0-9]/
// if in mixed there is ^ symbol - means you cant write it - will be false

// [0-9] = \d
// the same

// [^0-9] = \D
// not for nums

// [A-Za-z0-9] = \w
// everything but symbols

// [^A-Za-z0-9] = \W
// only for symbols

// let regExp = /\s/ 
// checks if there is a space

// let regExp = /\0/ 
// checks for null

// let regExp = /\n/
// let str = `scsdcs/ndecfs`
// new line

// let regExp = /\t/
//tabulation

// console.log('\u{03A9}'); 
// omega unicode


// let regExp = /^\d?$/
// it can be 1 num or nothing


// let regExp = /^\d{3}$/
// how many nums have to be(3)

// let regExp = /^\d{3,6}$/
// or from 3 to 6 nums have to be


// let regExp = /^\d{3,}$/
// or 3, minimum 3 nums have to be

// let regExp = /^\d{3}\w{0,}$/
// min 3, maybe 0 also

// let regExp = /^hello$/
// console.log(/^hello$/.i.test(regExp))
// .i makes it capitals

// /g means global

// /m means multiline

// let regExp = /^^hello.*world$/;
// let str = 'hello abchdbch world';
// let check = {
//     v: regExp
// }
// console.log(regExp.sourse);
// source shows the inner text of str


// pattern.lastIndex shows the last index from you string(patter)

// ignoreCase ignores str or smth else(add i and it will be true again)

//  /^\^$/
// if you for example wants to see that string has ^ (some other symbols too)





