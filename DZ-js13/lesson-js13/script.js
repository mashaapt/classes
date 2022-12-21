const handleClick = () => {
    // alert('Click');
    this.style.backgroundColor = 'red';
    this.style.padding = '20px';
}

const getId = v => document.getElementById(v);

const btn = getId('click');
console.log(btn);

// btn.onclick = handleClick;
// btn.onclick = function(event) {
// //     console.log(this);
// this.style.backgroundColor = 'red';
// this.style.padding = '20px';
// }

// btn.addEventListener('click', handleClick);
btn.addEventListener('click', function(){
    alert('click again');
})

btn.onmousedown = function(){
    console.log('click down');
}

btn.onmouseup = function(){
    console.log('click up');
}

const input = getId('it');
input.onfocus = function(e) {
    console.log('focus');
}
//onblur, onchange