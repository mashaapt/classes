const square = document.getElementsByClassName('square')[0];

function changeColor() {
    square.style.backgroundColor = 'red';
    
    square.addEventListener('mouseover', function handleMouseOver() {

        if(square.style.backgroundColor === 'red') {
            square.style.backgroundColor = 'yellow';
            return;
        };
        
        if (square.style.backgroundColor === 'yellow') {
            square.style.backgroundColor = 'green';
            return;
        };
        
        if (square.style.backgroundColor === 'green') {
            square.style.backgroundColor = 'red';
            return;
        };
    })
}

changeColor()
