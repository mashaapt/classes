const grid = document.getElementsByClassName('grid')[0];
const cells = document.getElementsByClassName('cell');
const clrTxt = document.getElementsByClassName('color-text')[0];
const imgTxt = document.getElementsByClassName('img-text')[0];
const imgs = document.getElementsByTagName('img');

function clickk() {
    clrTxt.addEventListener('click', function onClick() {
        grid.style.display = 'flex';
    })

    imgTxt.addEventListener('click', function onClick() {
        // grid.style.backgroundColor = 'none';  

        Array.from(imgs).forEach(img => {
            img.parentNode.classList.add('no-bg');
            img.style.display = 'flex';
        })


    })
}
clickk();

function colors() {
    Array.from(cells).forEach(cell => {
        cell.addEventListener('click', function onClick() {
            const color = cell.style.background;

            document.body.style.backgroundColor = color;

        })
    })
}
colors();


// function clickk2() {
//     imgTxt.addEventListener('click', function onClick() {
//         // grid.style.backgroundColor = 'none';  

//         Array.from(imgs).forEach(img => {
//             img.parentNode.classList.add('no-bg');
//             img.style.display = 'flex';
//         })


//     })
// }
// clickk2();


function images() {
    Array.from(imgs).forEach(img => {
        img.addEventListener('click', function onClick() {
            document.body.style.backgroundImage = `url(${img.src})`;
        })
    })
}
images();