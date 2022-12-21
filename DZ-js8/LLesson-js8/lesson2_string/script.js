// Object, String, Number, Array

// String

// let str = 'hello';
// let str1 = '';

// let str2 = new String();

// console.log(str1);
// console.log(str2);


let str = 'hello world';

// console.log(str.charAt(5));
// console.log(str.length);

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }

// console.log(str.concat(' world'));
// console.log(str.endsWith('world'));
// console.log(str.includes('llo'));
// console.log(str.includes('o w'));
// console.log(str.includes('ow'));

// console.log(str.indexOf('w'));  //  index (number)
// console.log(str.charAt(6));     // char (string)

// console.log(str.charAt(str.indexOf('w')));  // 'w' (string)

// console.log(str.indexOf('l'));
// console.log(str.indexOf('q'));

// console.log(str.indexOf('l'));
// console.log(str.lastIndexOf('l'));

// console.log(str.repeat(5));
// console.log('a'.repeat(5));

// const badWord = 'hello';

// console.log(str.replace('hello', '*'.repeat('hello'.length)));
// console.log(str.replace(badWord, '*'.repeat(badWord.length)));


// console.log(str.search('world'));
// console.log(str.search('ld'));



// slice, split

// console.log(str.slice(8));

// console.log(str.split('l'));
// console.log(str.split(''));
// console.log(str.split(' '));
// console.log(str.split('.'));
// console.log(str.split(','));
// console.log(str.split('?'));
// console.log(str.split('-'));
// console.log(str.split('hello'));



// console.log(str.startsWith('hello'));
// console.log(str.substring(0, 6));

// console.log('HeLLo'.toLowerCase());
// console.log('hello'.toUpperCase());

// console.log('ivan'.charAt(0).toUpperCase())

// let username = 'ivan';
// let result = '';

// for(let i = 0; i < username.length; i++) {
//     console.log(i);
//     if(i == 0) {
//         result += username.charAt(i).toUpperCase();
//     } else {
//         result +=  username.charAt(i);
//     }
// }

// console.log(result);

// console.log('                            Ivan                                '.trimStart());
// console.log('                            Ivan                                '.trimEnd());
// console.log('                            Ivan                                '.trim());


// str.concat
// str.includes
// str.split
// str.toLowerCase
// str.toUpperCase
// str.trim

// str.charAt
// str.startsWith
// str.endsWith
// str.indexOf
// str.slice


// console.log('hello'.charAt(0));
// console.log('hello'[0]);
// console.log('hello'[1]);
// console.log('hello'[2]);
// console.log('hello'[3]);
// console.log('hello'[4]);
// console.log('hello'.charAt(4));



// const userText = prompt('enter your text');
// const badLetter = 's';
// const badWord = 'javascript';

// if(userText.includes(badWord)) {
//     // const index = userText.search(badWord);
// }

// userText.charAt(
//     userText.search(badLetter) //   index
// ).replace('*');

// let result = '';

// for (let i = 0; i < userText.length; i++) {
//     if (userText.search(badLetter) == i) {
//         // console.log(1);
//         // console.log(userText.charAt(i).replace('*'));
//         result += '*';
//     } else {
//         result += userText.charAt(i);
//     }
// }

// console.log(userText);
// console.log(result);

// const word = 'hello';

// console.log('word', word);
// console.log(word.replace('world','hello'));
// console.log(word);


// const userText = prompt('enter something');

// const badWord = 'logos';

// console.log(userText.replace(badWord, '*'));


const userText = prompt('enter something');

const badWord = 'logos';

const words = userText.split(' ');

let result = '';

for(let i = 0; i < words.length; i++) {
    if(words[i] == badWord) {
        result += words[i].replace(badWord, '*');
    } else {
        result += words[i]; 
    }
} 

console.log(words);
console.log(result);
