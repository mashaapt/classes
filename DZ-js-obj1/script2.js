const myMath = {};
let a = 5;
let b = 2;

myMath.sum = function() {
    let result = a + b;
    console.log(`${a} + ${b} = ${result} `);
}

myMath.multiplication = function() {
    let result = a * b;
    console.log(`${a} * ${b} = ${result} `);
}

myMath.division = function() {
    let result = a / b;
    console.log(`${a} / ${b} = ${result} `);
}

myMath.subtraction = function() {
    let result = a - b;
    console.log(`${a} - ${b} = ${result} `);
}

myMath.sum();
myMath.multiplication();
myMath.division();
myMath.subtraction();
