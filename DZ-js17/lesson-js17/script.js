// // window.setTimeout()
// function sayHello(){
//     alert('Hello');
// }
// // setTimeout(func, delay);
// // setInterval(func, delay);
// setTimeout(sayHello, 4000);
// setInterval(sayHello, 2000);

// function sayHello() {
//     document.write?.('<h1>Hello</h1>');
// }
// setTimeout(sayHello, 2000);

// function sayHello() {
//     document.write?.('<h1>Hello</h1>');
//     if(document.body.children.length === 2) {
//         clearInterval(t);
//     }
// }
// let t = setInterval(sayHello, 1000);

// const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
// const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
// console.log(utcDate1.toUTCString());
// // expected output: Fri, 02 Feb 1996 03:04:05 GMT
// console.log(utcDate2.toUTCString());
// // expected output: Sun, 31 Dec 1899 00:00:00 GMT

// let d = new Date;
// let arrDate = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
// console.log(arrDate[d.getDay()]);


// const setTime = () => {
//     let newDate = new Date();
//     let hours = newDate.getHours();
//     let mins = newDate.getMinutes();
//     let secs = newDate.getSeconds();

//     document.getElementById('time').innerHTML = hours + ':' + mins + ':' + secs;
// }
// setInterval(setTime, 1000);