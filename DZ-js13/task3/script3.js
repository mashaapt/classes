const imgs = document.getElementsByClassName('img');

function copyImg() {
    Array.from(lis).forEach(img => {
        img.addEventListener('click', function onClick() {
            const url = prompt('write url image');
            img.style.backgroundImage = `url(${url})`;
        })
    })
}
copyImg();