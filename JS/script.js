function valueFisrtName(){
    const firstName = document.querySelector('.firstname').value;
}

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

    })
}



selectedSendForm();