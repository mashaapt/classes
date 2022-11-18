let radius = prompt('Type your radius');

const getArea = (radius) => {

    if (isNaN(radius)) {
        return alert('You must type a Number');
    }

    if (radius === '') {
        return alert('Please type your radius');
    }


    alert(`Area: ${(Math.PI * radius * 2).toFixed(0)}`);
}

getArea(radius);
