//strings

// let str = '';

// let str2 = new String();


// let str = 'hello';

// console.log(str.charAt(1)); //letter by index

// console.log(str.length);

// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i));
// }

// console.log(str.concat(' world'));

// console.log(str.endsWith('o')); //if it ends on some item its true or false

// console.log(str.includes('ll')); //true

// console.log(str.indexOf('o'));

// console.log(str.charAt(str.indexOf('h'))); // 'h' striing

// console.log(str.indexOf('l')); //show the first index of item

// console.log(str.lastIndexOf('l')); //shows the last index of an item

// console.log(str.repeat(2));
// console.log('lol '.repeat(1000));

// console.log(str.replace('hell', 'cia')); //ciao

// let badWord = 'hello';
// console.log(badWord.replace('*'.repeat(badWord.length)));

// console.log(str.search('ll')); //index


// console.log(str.slice(0, 3)); //slices something

// console.log(str.split('')); //splits into separated items in a new array
// console.log(str.substring(0 , 6)); //splits into separated items but remains one string not an array


// let names = 'ivan';
// let capitalLetter = '';

// for (let i = 0; i < names.length; i++ ) {
//     if( i == 0) {
//         capitalLetter += names.charAt(i).toUpperCase();
//     }
//     capitalLetter += names.charAt(i);
// }
// console.log(capitalLetter);

// console.log(str.trimStart()); //trimEnd or trim just cut space from beginning or end or from the both side


// console.log('hello'[1]);

// let animals = [
//     'frog',
//     'cat',
//     'dog'
// ];
// let removed = animals.splice(0, 1, 'bird');
// console.log(removed);


const userText = prompt('type smth');
const badWord = 'logos';
const words = userText.split(' ');
let result = '';

for(let i = 0; i < badWord.length; i++) {
    if(words[i] == badWord) {
        console.log(words.replace(badWord, '*'));
        result += words.replace(badWord, '*')
    } else {
        result += words[i];
    }
}

console.log(words);
console.log(result);