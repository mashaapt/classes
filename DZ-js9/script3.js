const validateInput = (num) => {
    if (isNaN(num)) {
        return alert('You must type a Number');
    }

    if (num === '') {
        return alert('Please type your Number/Numbers');
    }

    return true;
};


function getValidNumber() {
    let num = +prompt('Enter num');

    while(!validateInput(num)) {
        num = +prompt('Enter num');
    }

    return num;
}

function getNumbersUntilBlank() {
    let nums = [];
    let num = prompt('Enter num');

    while(num !== '') {
        num = prompt('Enter num');

        if (num !== '') {
            nums.push(num);
        }
    }

    return nums;
}

function start() {

    let choose = prompt('Choose what do you want to do with your numbers. Type one of these: PI ; To power ; Absolute num ; Max ; Min');
    
    

    if (choose.toUpperCase() === 'PI') {
        return alert(Math.PI);
    }

   
    if (choose.toUpperCase() === 'TO POWER') {
        return Math.pow(
            getValidNumber(), 
            getValidNumber()
        );
    }


    if (choose.toUpperCase() === 'ABSOLUTE NUM') {
        return Math.abs(getValidNumber());
    }

    if (choose.toUpperCase() === 'MAX') {
        alert(`When you finish typing your nums, just leave the empty space and press 'ok'`);
        const nums = getNumbersUntilBlank();

        return Math.max(...nums);
    }

    if (choose.toUpperCase() === 'MIN') {
        alert(`When you finish typing your nums, just leave the empty space and press 'ok'`);
        const nums = getNumbersUntilBlank();

        return Math.min(...nums);
    }
    
}

const result = start();

if(result) {
    alert('Result: ' + result);
}
    
