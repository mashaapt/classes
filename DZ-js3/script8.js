let a = prompt('enter your number');
let b = prompt(`you want to raise your number ${a} to the power of ...`);

//1

// for( i = 0; i < 1; i++ ) {
//     let result = Math.pow(a, b);
//     document.write(`<h3>${result}</h3>`)
// }


//2

let result = 1;
let i;

if (b > 0) {
    for (i = 0; i < b; i++) {
        result *= a;
    }
} else if (b < 0) {
    for (i = 0; i > b; i--) {
        result *= 1/a;
    }
} 
document.write(`<h3>${result}</h3>`)