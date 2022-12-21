// Object 

// let person = {};
// person.name = 'Petro';

// let user = new Object();
// user.name = 'Ivan';

// console.log(person);
// console.log(user);



// let person = {
//     name: 'Ivan',
//     age: 23,
//     isDeveloper: true,
//     jobCompany: null,
//     look: {
//         height: 180,
//         weight: 90,
//         hair: 'short'
//     }
// }

// console.log(person.look.hair);


// let user = {
//     name: 'Ivan',
//     age: 25
// }

// user.name = 'Petro';

// console.log(user);

// user = {
//     title: 'Olena',
//     workExperience: 44
// }

// console.log(user);

// user = false;

// console.log(user);


// const user = {
//     name: 'Ivan',
//     age: 25
// }

// console.log(user);

// // user = 25;

// // console.log(user);

// user.name = 'Olena';

// console.log(user);

// // user = { title: 'Vasia', experience: 23 }

// user.email = '1@mail.com';

// console.log(user);


// let a = 25;

// console.log(a);

// a = 10;

// console.log(a);





// let color1 = 'yellow';  //  yellow
// let color2 = color1;    //  yellow

// console.log(color1);
// console.log(color2);

// color1 = 'green';

// console.log(color1);    //  yellow -> green
// console.log(color2);    //  green


// let user1 = { name: 'Ivan', age: 22 };
// let user2 = user1;

// console.log(user1); // Ivan, 22
// console.log(user2); // Ivan, 22

// user1.name = 'Petro';

// console.log(user1); // Petro, 22
// console.log(user2); // Petro, 22




// let user1 = {
//     name: 'Ivan',
//     lastName: 'Tkachenko',
//     age: 22,
//     languages: ['en', 'ua', 'pl', 'es']
// };

// let user2 = user1;

// console.log(user1);
// console.log(user2);

// user1.email = '1@mail.com';

// console.log(user1);
// console.log(user2);

// user2.age = 44;

// console.log(user1);
// console.log(user2);



// const data = { userCount: 200, accountData: {...}, ... };


// const data2 = data;


// data2.userCount++;

// const user = { name: 'Ivan', age: 22, email: '1@mail.com' };

// const userCopy = user;

// user.email = '1@gmail.com';


// {
//     // update user
//     user.email = '1@gmail.com'
// }

// if(userCopy.email == user.email) {
//     console.log(userCopy.email == user.email);
// }


// console.log({
//     name: userCopy.name == user.name,
//     age: userCopy.age == user.age,
//     email: userCopy.email == user.email
// });




// const user = { name: 'Ivan', age: 22, email: '1@mail.com' };

// const userCopy = { ...user };

// console.log(user);
// console.log(userCopy);

// user.name = 'Olena';

// console.log(user);
// console.log(userCopy);

// const user = {};

// user = 'Ivan';


// const updateUer = () => {};
// const fn2 = function() {};


// const user = {
//     name: 'Ivan',
//     age: 33,
//     isDeveloper: true,
//     showUserInfo: function() {
//         console.log(`Name: ${user.name}, age: ${user.age}, isDeveloper: ${user.isDeveloper}.`);
//     }
// }

// console.log(user);
// user.showUserInfo();

// Object.assign(user, { name: 'Olena' });
// console.log(user);

// user.name = 'Olena';

// console.log(user.look);

// const userLook = {
//     height: 180,
//     weight: 80,
//     eyeColor: 'green'
// }

// user.look = look;

// Object.assign(user, { look: userLook });

// console.log(user);

// userLook.height = 150;

// console.log(user);


// const user = Object.create({ name: 'Ivan', age: 23 });

// console.log(user);
// console.log(user.name);
// console.log(user.age);

// const user = Object.create({});

// user.name = 'Ivan';
// console.log(user);


// const user = { name: 'Ivan', age: 23 };
// const person = { name: 'Ivan', age: 23 };

// console.log(Object.entries(user));

// const person = Object.fromEntries([['username', 'Olena']]);
// console.log(person);

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(Object.freeze(user));

user.name = 'Petro';

console.log(user);

console.log(Object.isFrozen(user));


console.log(Object.keys);
console.log(Object.values);
console.log(Object.entries);
console.log(Object.freeze);
console.log(Object.isFrozen);
console.log(Object.create);
console.log(Object.fromEntries);
console.log(Object.assign);
