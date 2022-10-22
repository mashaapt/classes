//2

let userName = prompt('Type your name please');
let password = '';
let passUser = 'Logos';

if (userName) {
    let curPass = prompt(`Please type your password, ${userName}`)
    if (curPass === passUser) {
        alert('Welcome')
    } else {
        alert('Wrong password')
    }
} else {
    alert('Enter has been declined')
}