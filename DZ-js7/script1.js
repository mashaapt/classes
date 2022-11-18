const person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';

person.showData = function() {
    console.log(this.firstName + ' ' + this.secondName);
}
// showData();

let newPerson = {...person};
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
// showData([[person, newPerson]]);
person.showData();
newPerson.showData();