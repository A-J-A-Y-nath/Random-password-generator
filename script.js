// declaration section
let passwordBox = document.getElementById("Password");
let passGenerate = document.getElementById("generate");

// password characters

const passwordLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 {}[]*!@#$%^&()_-+=.?:,~";

// password generator button

passGenerate.addEventListener('click',function(){
    // password range
    const passLength = document.getElementById("range").value;

    // making password  box clear
    let password = '';
    passindex = passwordLetters.length;

    for(let i=0;i<passLength;i++){
        password+=passwordLetters[(Math.floor(Math.random()*passindex))]
    }
    // display password
    passwordBox.value = password;
})