// console.log(document.body.clientWidth);
// console.log(document.body.clientHeight);

// let scrollHeight = MAth.max(
//         document.bosy.scrollHeight, document.documentElement.scrollHeight,
//         document.bosy.offsetHeight, document.documentElement.offsetHeight,
//         document.bosy.clientHeight, document.documentElement.clientHeight

// );
// console.log(scrollHeight);


// console.log('Scroll from up' + window.pageYOffset);
// console.log('Scroll from left' + window.pageXOffset);

// window.addEventListener('scroll', function() {
//     this.document.getElementById('showScroll').innerHTML = window.scrollY + 'px';
// })

// function goToTop() {
//     window.scroll(0, 0);
// }

// console.log(document.documentElement.clientWidth);
// // console.log(window.innerWidth);


// function displayWindowSize() {
//     const w = document.documentElement.clientWidth;
//     const h = document.documentElement.clientHeight;
//     document.getElementById('result').innerHTML = `width = ${w}, height = ${h}`;
// }
// window.addEventListener('resize', displayWindowSize);


let getE = a => document.getElementById(a);
let df = document.forms.f1;

df.cbbtn.onclick = function() {
    if(this.checked) {
        getE('h1').style.fontWeight = 'bold';
        getE('btn').disabled = false;
    } else {
        getE('h1').style.fontWeight = 'normal';
        getE('btn').disabled = true;;
    }
}

{/* <input type="checkbox" id="toggle-me" />
const checkbox = document.getElementById('toggle-me');
checkbox.checked = !checkbox.checked; */}
