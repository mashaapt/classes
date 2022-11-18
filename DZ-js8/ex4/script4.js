let urUrl = prompt('Enter your url');
let prefix1 = 'http://';
let prefix2 = 'https://';

console.log(urUrl.replace(prefix1, '').replace(prefix2, ''));