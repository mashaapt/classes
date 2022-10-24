//3

let num = prompt('check your num');;

let findNum = (num) => {
    if (num / 1 === num
        && num / num === 1
        && num % 2 !== 0
        && num % 3 !== 0
        && num === 2 || num === 3) {
            alert('prime num');
    } else {
        alert('not prime num');
    }
}
findNum(num);