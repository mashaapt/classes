const signUpBtn = document.getElementsByClassName('signup')[0];
const inputs = Array.from(document.querySelectorAll('input, select'));

const info = getInfo();

console.log(info.sex)

putGender();
actvBtn();
toProfilePage();
setUserInfo();
writeQueryParams();


function setUserInfo() {
    for(let key in info) {
        const element = document.querySelector(`span[name*="${key}"]`);
        if (element) {
            element.textContent = info[key];

            // console.log(element);
        }
    }
}

function getInfo() {
    return {
        fname: getQueryParam('fname'),
        lname: getQueryParam('lname'),
        email: getQueryParam('email'),
        sex: getQueryParam('sex'),
        position: getQueryParam('position'),
        agree: getQueryParam('agree')
    }
}

function getQueryParam(param) {
    const parts = window.location.search.split('?')[1]?.split('&') ?? [];

    return parts.find(part => part.startsWith(param))?.split('=')[1];
}

function actvBtn() {
    inputs.forEach(input => {

        input.addEventListener('change', (event) => {

            const name = input.getAttribute('name');
            info[name] = input.value;

            checkIfButtonDisabled();
        })
    })
}

function checkIfButtonDisabled() {
    const enabled = info.fname && info.lname && info.email && info.sex && info.position && info.agree;
    
    if (enabled) {
        signUpBtn.removeAttribute('disabled');
    } else {
        signUpBtn.setAttribute('disabled', true);
    }
}

function toProfilePage() {
    signUpBtn?.addEventListener('click', function() {
            window.location.href = `./index3.html?${writeQueryParams()}`;

    })
}

function putGender() {
    let image = document.getElementsByClassName(info.sex)[0];
    if (image) {
        image.style.display = 'block';
    }
}

function writeQueryParams() {
    // 'fname=Masha&lname=hh&'

    let result = '';

    for(let key in info) {
        const value = info[key];

        const part = `${key}=${value}`;

        result += part + '&';
    }

    return result;
}