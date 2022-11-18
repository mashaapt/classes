let num = prompt('Type your num, to find out the square root of it.');

const getSqrt = (num) => {

    if (isNaN(num)) {
        return alert('You must type a Number');
    }

    if (num < 0) {
        return alert('Type a possitive number')
    }

    if (num === '') {
        return alert('Please type your Number');
    }


    alert(`The square root of ${num} is ${Math.sqrt(num)}`);
}

getSqrt(num);
