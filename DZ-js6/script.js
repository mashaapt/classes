const playGame = () => {
    

    let num = () => {
        let num1 = +prompt('enter the first num');
        let num2 = +prompt('enter the second num');

        const checkRandom = () => {

            let attempts = 4;

            do {
                let random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
                let ask = prompt('guess num');

                if (ask === random) {
                    alert('congrats')
                } else {
                    alert(`Sorry, but number is ${random}. Try again)`)
                }

            } while (--attempts);
        }

        const invalidNumbers = isNaN(num1) || isNaN(num2);

        return invalidNumbers 
            ? alert('type only nums') 
            : Math.abs(num1 - num2) < 10 
                ? alert('one num must be larger by 10 than the another num') 
                : checkRandom();
    }

    num();
}


let oneMoreTime = true;

let wantToPlay = confirm('Wanna play?');

if (wantToPlay) {

    while(oneMoreTime) {
        playGame();
    
        oneMoreTime = confirm('No more attempts, do you wanna play one more time?')
    }
}
