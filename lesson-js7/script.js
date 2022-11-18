// let person = {
//     name: 'Lisa',
//     age: 23,
//     isDeveloper: true,
//     company: null,
//     look: {
//         height: 166,
//         weight: 58,
//         hair: 'blonde'
//     }
// };

// let user = new Object();

// user.name = 'Masha';



//rewrite an object

// let user = {
//     name: 'Rosemary',
//     age: 33
// };

// user.name = 'Dora';

// user = {
//     name: 'Rose',
//     age: 13
// };

// user = true;


// const user = {
//     name: 'Mary',
//     age: 11
// };

// user.age = 13;

// user.email = 'melancholia.888@gmail.com';


// let color1 = 'yellow'; //yellow
// let color2 = color1; //yellow

// color1 = 'green'; //green and colo2 = still yellow

// let user1 = {
//     name: 'Masha',
//     age: 18,
//     langs: [
//         en,
//         ua,
//         rus,
//         jp
//     ]
// };
// let user2 = user1; //became Mary
// user1.name = 'Mary';
// user2.age = 23; //changed user1 and user2
// console.log(user1);
// console.log(user2);


//its better to do objects with const

// let user1 = {
//         name: 'Masha',
//         age: 18
// };

// let user2 = {...user1}; //making copy of an object
// user2.name = 'Rose';

// console.log(user1);
// console.log(user2);




// const user = {
//     name: 'Tiger',
//     age: 34,
//     isDev: true,
//     showUserInfo: function() {
//         console.log(`Name: ${user.name}, age: ${user.age}, He is a developer.`);
//     }
// };

// user.showUserInfo();

// console.log(Object.assign(user, {title: 'Bio'}));

// let userLook = {
//     eyes: 'green',
//     height: 180,
//     weight: 80
// };

// user.look = userLook;

// Object.assign(user, { look: userLook});

// console.log(user);




// const user = Object.create({ name: 'Mary', age: 24 });
// console.log(user);



const user = {
    name: 'Lisa',
    age: 16
};

// console.log(Object.entries(user));

// const person = Object.entries([['username', 'Lisa' ]]);
// console.log(person);

console.log(Object.keys(user)); //name & age

console.log(Object.values(user)); //Lisa & 16

console.log(Object.freeze(user));
user.name = 'Masha';
console.log(user); //freeze doesnt allow to change values of keys

// Object.isFrozen(user);

 console.log(Object.keys(user).length);
