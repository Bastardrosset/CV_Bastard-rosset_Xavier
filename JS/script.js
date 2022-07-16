// Validation input firstName
function ifValidFirstName() {
    const firstName = document.querySelector('#firstname');
    firstName.addEventListener('change', function() {
        validFirstName(this);
    })
}
const validFirstName = function () {
    const firstName = document.querySelector('#firstname');
    const comment = firstName.nextElementSibling;
    const regexFirstName = new RegExp (/^[a-zA-Z]+$/);

    let testFirstName = regexFirstName.test(firstName.value);
    let testLengthFirstName = firstName.value.length >= 3;

        if(testFirstName,testLengthFirstName) {
            comment.innerHTML = 'Format Prénom valide';
            comment.style.color = 'green';
        }else {
            comment.innerHTML = 'Format prénom non valide, les caractères spéciaux, les chiffres et symbole ne sont pas permis';
            comment.style.color = 'red';
        }

}

// Validation input name
function ifValidName() {
    const name = document.querySelector('#name');
    name.addEventListener('change', function(){
        validName(this);
    })
}
const validName = function () {
    const name = document.querySelector('#name');
    const comment = name.nextElementSibling;
    const regexName = new RegExp (/^[a-zA-Z-]+[a-zA-Z]+$/);

    let testRegexName = regexName.test(name.value);

    if(testRegexName){
        comment.innerHTML = 'Format Nom valide';
        comment.style.color = 'green';
    }else {
        comment.innerHTML = 'Format nom invalide, les caractères spéciaux et les chiffres ne sont pas permis';
        comment.style.color = 'red';
    }

}

// Validation input email
function IfValidEmail() {
    const email = document.querySelector('#email');
    email.addEventListener('change', function(){
        validEmail(this);
    })
}
const validEmail = function(){
    const email = document.querySelector('#email');
    const comment = email.nextElementSibling;
    const regexEmail = new RegExp ( /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);

    let testRegexEmail = regexEmail.test(email.value);

    if(testRegexEmail){
        comment.innerHTML = 'Format Email valide';
        comment.style.color = 'green';
    }else {
        comment.innerHTML = 'Format Email non valide, vérifiez';
        comment.style.color = 'red';
    }

}

// Validation input phone
function ifValidPhone(){
    const phone = document.querySelector('#phone');
    phone.addEventListener('change', function(){
        validPhone(this);
    })
}
const validPhone = function (){
    const phone = document.querySelector('#phone');
    const comment = phone.nextElementSibling;
    const regexPhone = new RegExp (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/);

    let testRegexPhone = regexPhone.test(phone.value);
    let testLengthPhone = phone.value.length < 14;

        if(testRegexPhone,testLengthPhone){
            comment.innerHTML = 'Format Phone valide';
            comment.style.color = 'green';
        }else {
            comment.innerHTML = 'Format phone invalide, seul les chiffres sont autorisés';
            comment.style.color = 'red';
        }
}

// Validation textArea message
function ifValidMessage() {
    const message = document.getElementById('message');
    message.addEventListener('change', function(){
        validMessage(this);
    })
}
const validMessage = function (){
    const message = document.getElementById('message');
    const comment = message.nextElementSibling;
    const regexMessage = new RegExp (/^\w{50,300}$/);

    let testRegexMessage = regexMessage.test(message.value);
    let minAndMaxiLengthMessage = message.value.length > 50;

        if(testRegexMessage,minAndMaxiLengthMessage){
            comment.innerHTML = 'Message valide';
            comment.style.color = 'green';
        }else {
            comment.innerHTML = 'Votre message doit contenir au moins 50 caractères';
            comment.style.color = 'red';
        }
}

ifValidFirstName();
ifValidName();
IfValidEmail();
ifValidPhone();
ifValidMessage();


function selectedSendForm(){
    const sendForm = document.querySelector('.button1');
    sendForm.addEventListener('click',(e) => {
        localStorage.setItem('firstname', document.querySelector('#firstname').value);
        localStorage.setItem('name', document.querySelector('#name').value);
        localStorage.setItem('email', document.querySelector('#email').value);
        localStorage.setItem('phone', document.querySelector('#phone').value);
        localStorage.setItem('message', document.querySelector('#message').value);

        const form ={
            firstname : localStorage.getItem('firstname'),
            name : localStorage.getItem('name'),
            email : localStorage.getItem('email'),
            phone : localStorage.getItem('phone'),
            message : localStorage.getItem('message')
        }
            // console.log('formulaire as ', form);

        const toSend = {
            form,
        }
        // console.log('toSend form as', form);

    })
}



selectedSendForm();