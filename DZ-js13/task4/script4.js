const lis = document.getElementsByTagName('li');

function colors() {
    Array.from(lis).forEach(li => {
        li.addEventListener('click', function onClick() {
            const color = li.textContent;

            if(li.style.color === color) {
                li.style.color = 'black';
            } else {
                li.style.color = color;
            }
        })
    })
}
colors();