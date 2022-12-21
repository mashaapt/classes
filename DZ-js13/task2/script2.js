const square = document.getElementsByClassName('square')[0];
const originalBg = square.style.backgroundColor;
const originalBorder = square.style.border;

function changeQ() {
    square.addEventListener('mouseover', function handleMouseOver() {
        // square.classList.add('pink');

        square.style.backgroundColor = 'pink';
        square.style.border = 'solid green 3px';
        square.innerHTML = 'Do you wanna know it?';
    })
}
changeQ();

function changeR() {
    square.addEventListener('mousedown', function mouseDown() {
        square.style.backgroundColor = 'yellow';
        square.style.border = 'dotted skyblue 3px';
        square.innerHTML = `But I won't tell you`;
    } )
}
changeR();

function changeS() {
    square.addEventListener('mouseup', function mouseUp() {
        square.style.backgroundColor = 'pink';
        square.style.border = 'solid green 3px';
        square.innerHTML = 'Do you wanna know it?';
    } )
}
changeS();

function changeBack() {
    square.addEventListener('mouseout', function mouseOut() {
        square.style.backgroundColor = originalBg;
        square.style.border = originalBorder;
        square.innerHTML = 'I have a secret';
    })
}
changeBack();