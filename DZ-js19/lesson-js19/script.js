// String.match(RegExp);
// RegExp.exec(String);
// //check if they match, return array or null
// '123s'.match(/^(\d{3})(\w+)$/);
// // two groups () ()
// 'heyhey world'.match(/^(hey|ho).*(world|hey)$/);

// const arr = ['1', ['2', '3'], '4', [['5'], ['6']]];
// console.log(arr.flat(1));
// // opens first arr in arr

// console.log(arr.flat(Infinity));
// // opens everything till the end, now we have [1,2,3,4,5,6]

// const re = /(?<year>\d{4})([/,-])(?<month>\d{2}-(?<day>\d{2})/;
// const result = re.exec(`2015/01-02`);

// console.log('i saw a beardca'.match(/\bbear/));
// // at the beginning or in the end
// console.log('i saw a dvsbearfcff'.match(/\Bbear/));
// // between  other words

// console.log('my dog is a good dog'.replace(/dog/g, 'cat'));
//g - global made more then 1, without g it woukd relace just first 'dog

// console.log('hello world'.replace(/|\w+), (\w+!/, '$2: $1));
