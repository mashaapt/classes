let capslock = document.getElementsByClassName('capslock')[0];
let textarea = document.getElementsByTagName('textarea')[0];
let isCaps = false;
const keys = Array.from(document.querySelectorAll(`li`));
const wordKeys = ['Backspace', 'Shift', 'CapsLock', 'Enter', 'Tab'];

function press() {
    keys.forEach(key => {
        key.addEventListener('mousedown', function (event) {
            console.log('mousedown', event);

            const charIndex = event.shiftKey ? 1 : 0;
            const pressedKey = key.textContent === ' ' ? key.textContent : key.textContent.trim();

            const didClickWord = wordKeys.includes(pressedKey);


            if (!didClickWord) {
                const char = pressedKey.length === 1 ? pressedKey : pressedKey.split('')[charIndex];
                addCharacter(char, event.shiftKey);
            } else {
                handleSpecialKey(event, pressedKey);

            }
            highlightKey(pressedKey);
        });

        key.addEventListener('mouseup', function () {
            unhighlightAllKeys();
        });

        key.addEventListener('click', function () {

        });
    });
}
press();

function handleSpecialKey(event, pressedKey) {
    switch (pressedKey) {
        case 'Enter': addCharacter('\n', false);
            break;
        case 'Backspace': deleteCharacter();
            break;
        case 'Tab': ifTabAddSpaces(event, pressedKey);
            break;
        case 'CapsLock': isCaps = !isCaps;
            break;
    }
}

function highlight() {


    document.body.addEventListener('keydown', function (event) {
        console.log('event.key', event.key);



        if (!wordKeys.includes(event.key)) {
            addCharacter(event.key, event.shiftKey);
        } else {
            handleSpecialKey(event, event.key);
        }

        highlightKey(event.key);
    });

    document.body.addEventListener('keyup', function (event) {
        unhighlightAllKeys();
    });
}
highlight();

function highlightKey(pressedKey) {

    const keyByContent = keys.find(key => {

        const content = key.textContent.trim().toLowerCase();
        const elementHasWord = content.length > 2;

        if (elementHasWord) {
            return content === pressedKey.toLowerCase();
        } else {
            return content.includes(pressedKey.toLowerCase());
        }
    });

    if (keyByContent && !keyByContent.classList.contains('active')) {
        keyByContent.classList.add('active');
    } else {
        keyByContent?.classList.remove('active');
    }
}

function unhighlightAllKeys() {
    keys.forEach(key => {
        if (!key.textContent.includes('CapsLock')) {
            key.classList.remove('active')
        }
    })
}

function caps() {
    capslock.addEventListener('click', function click() {
        // byClass('.letter').style.textTransform = 'uppercase';
        // byClass('.letter').style.display = 'none';

        capslock.classList.toggle('active');
    })

}
caps();


function deleteCharacter() {
    textarea.value = textarea.value.substring(0, textarea.value.length - 1);
}

function ifTabAddSpaces(event, pressedKey) {
    if (pressedKey === 'Tab') {
        textarea.value += '   ';
        event.preventDefault();
    }
}

function addCharacter(pressedKey, isShift) {
    const isOnTextArea = document.activeElement === textarea;

    if (!isOnTextArea) {
        textarea.value += isShift || isCaps ? pressedKey.toUpperCase() : pressedKey;
    }
}

