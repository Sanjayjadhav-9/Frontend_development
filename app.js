// Form Validation
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    
    if(nameValue == ""){
        e.preventDefault();
        alert("Please provide the name");
        name.focus();
        return false;
    }
    
    if(!isNaN(nameValue)){
        e.preventDefault();
        alert("Please provide the valid name");
        name.focus();
        return false;
    }
    
    if(emailValue == ""){
        e.preventDefault();
        alert("Please provide the valid email");
        email.focus();
        return false;
    }
    
    if(phoneValue == ""){
        e.preventDefault();
        alert("Please provide the phone number");
        phone.focus();
        return false;
    }
    
    if(phoneValue.length < 10 || phoneValue.length > 10){
        e.preventDefault();
        alert("Please provide the valid phone number");
        phone.focus();
        return false;
    }
    
    if(passwordValue == ""){
        e.preventDefault();
        alert("Please provide the password");
        password.focus();
        return false;
    }
    
    if(passwordValue.length < 8){
        e.preventDefault();
        alert("password cannot be less than 8 digits");
        password.focus();
        return false;
    }

    alert("Data submitted successfully");

    console.log(nameValue, emailValue, phoneValue, passwordValue);
});