let urPassword = prompt('Enter your password');

if (!urPassword.includes('@')
    || urPassword.startsWith('@')
    || urPassword.endsWith('@')) {
    alert('Enter the proper password!')
} else {
    alert('Welcome!')
};
