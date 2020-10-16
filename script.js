//definere alle vores konstanter
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#inputName');
const submitBtn = document.querySelector('#submitName');
const forgetBtn = document.querySelector('#forgetName');

const h1 = document.querySelector('h1')
const personalGreeting = document.querySelector('.personalGreeting')

//Vi laver events for form, submit/forget button. 
form.addEventListener('submit', function(e){
    e.preventDefault();
});

submitBtn.addEventListener('click', function(){
    localStorage.setItem('Name', nameInput.value);
    nameDisplayCheck()
})

forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('Name')
    nameDisplayCheck()
})

//Henter navnet ud
function nameDisplayCheck(){
    if(localStorage.getItem('Name')){
        let Name = localStorage.getItem('Name');
//Laver head tagget/personal greeting dynamisk
        h1.textContent = 'Welcome ' +  Name
        personalGreeting.textContent = 'Welcome to our website ' +  Name
        forgetDiv.style.display = 'block'
        rememberDiv.style.display = 'none'
//Tilpasser side elementer via if/else statement i forhold til om navnet eksistere i local Storage
    } else{
        h1.textContent = 'Welcome stranger'
        personalGreeting.textContent = 'Welcome person that we do not know yet'
        forgetDiv.style.display = 'none'
        rememberDiv.style.display = 'block'
    }
}

document.body.onload = nameDisplayCheck