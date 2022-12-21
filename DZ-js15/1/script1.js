const firstInput = document.getElementById('moved1');
const secondInput = document.getElementById('moved2');
const btn = document.getElementsByClassName('move')[0];
const placeholder = document.getElementsByClassName('placeholder')[0];

function movingToInput() {
    btn.addEventListener('click', function Moved() {
        if(firstInput.value) {
            secondInput.value = firstInput.value;
            firstInput.value = '';
        }
    })
}
movingToInput();

function newPlaceholder() {
    placeholder.addEventListener('blur', function() {
        if(placeholder.value) {
            placeholder.placeholder = placeholder.value;
            placeholder.value = '';
        }
    })
}
newPlaceholder();