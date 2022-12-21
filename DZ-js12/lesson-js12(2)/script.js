//id

// const getById = (value) => document.getElementById('box');
// let box = getById('box');
// console.log(box);

// box.innerHTML = '<h3>Hello</h3>';
//changing box by hello


// link.target = 'blank';
//opening link in other tab





//cllass


// const getByClass = (value) => document.getElementsByClassName(value);
// const text = getByClass('text');
// text[0].getElementsByClassName.color = 'green';
// text[1].getElementsByClassName.color = 'blue';


// for(let i = 0; i < text.length; i++) {
//     let color = prompt('type a color');
//     text[i].getElementsByClassName.color = 'red';
// }




//tag


// const getByTag = (value) => document.getElementsByTagName(value);
// const li = getByTag('li');
// const size = 15;
// for(let i = 0; li <= li.length; li++) {
//     li[i].style.color = 'red';
//     li[i].innerText = `New item ${i + 1}`;
//     li[i].style.fontSize = `${size}px`;

// }





//name tag

// const radio = getByName('tr');
// radio[1].checked = true;




//queryselector

// const getQSel = (value) => document.querySelector(value);
// const text = getQSel('.text');
// console.log(text);
// const getQSelA = (value) => document.getQuerySelectorAll(value);
// const text = getQSelA('#box h1 .inner');

//first element that it finds
//query selector all picks all the texts with the tag




// for (let el of document.body.children) {
//     el.matches('.text') && el.getElementsByClassName.color === 'blue';
//     // if(el.matches('.text')) {
//     //     el.style.color = 'blue';
//     // }
// }



// const li = getQSel('li:first-child');
// console.log(li.closest('#box'));
//closest shows only from parents



// const createEl = (value) => document.createElement(value);

// const div = createEl('div');
// div.innerText = 'Created div';

// getQSel('.inner').append('div');
//append adds something new to the ending of smth
//prepend adds smth new to the beggining
//before and after - the same


//also .replaceWith just replace smth with smth
//also .remove just remove smth

// getQSel('.inner h2').insertAdjacentHTML('beforebegin', '<li>item1</li>');
//beforebegin - before tag, afterbegin - after tag / beforeend, afterend



// getQSel('.inner h2').insertAdjacentText('beforebegin', '<li>item1</li>');
//insertAdjacentText make literally html text, also you can add such things like beforebegin and so on



// const clone = getByID('box').cloneNode(true);
// console.log(clone.children[0].children[0].innerText = 'not box');
// getById('paste').append(clone);
//true means clone
//false makes shallow copy




// getById('paste').appendChild(clone);
// getById('paste').Child(clone);
// getById('paste').insertBefore(clone, getQSel('#paste h3));
// getById('paste').replaceChild(getQSel('#paste h3));
// getById('paste').removeChild(getQSel('#paste h3));




