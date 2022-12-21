const getByClass = cls => document.getElementsByClassName(cls);

const txar1 = getByClass('txar1')[0];
const txar2 = getByClass('txar2')[0];
const editBtn = getByClass('editBtn')[0];
const txarea = document.getElementsByTagName('textarea')[0];
const editing = getByClass('editing')[0];
const addSaveBtns = getByClass('addSaveBtns')[0];
const styleBtn = getByClass('styleBtn')[0];
const styling = getByClass('styling')[0];
const sizes = document.querySelectorAll('.sizes input');
const fontFams = getByClass('fontFams')[0];
const colorBtn = getByClass('colorBtn')[0];
const colorsForBtns = getByClass('colorsForBtns')[0];
const cells = getByClass('cell');


saveEdit();
editButton();
styleButton();
showColorTable();
colors();


function saveEdit() {
    addSaveBtns.addEventListener('click', function() {
        txar1.innerHTML = txarea.value; 
        txar2.style.display = 'none';
    })
}

function editButton() {
    editBtn.addEventListener('click', function() {
        txar2.style.display = 'block';
        txarea.value = txar1.innerHTML;
    })
}

function styleButton() {
    styleBtn.addEventListener('click', function() {
        styling.style.display = 'block';
        editing.style.display = 'none';
        addSaveBtns.style.display = 'none';
        txar2.classList.add('style');
    })
}

for(let i = 0; i < sizes.length; i++) {
    sizes[i].onclick = function () {
        txar1.style.fontSize = this.value;
    }
}

for(let i = 0; i < fontFams.length; i++) {
    fontFams[i].onclick = function () {
        txar1.style.fontFamily = this.value;
    }
}
function showColorTable() {
    colorBtn.addEventListener('click', function() {
        colorsForBtns.style.display = 'flex';
    })
}

function colors() {
    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', function onClick() {
            const color = cell.style.background;
            editing.style.backgroundColor = color;
            editing.style.backgroundColor = color;

        })
    })
}