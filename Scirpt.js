const pass = document.querySelector("#pass");
const passconfirm = document.querySelector("#passconfirm");
const passerr = document.querySelector("#perror");
const passconfirmerr = document.querySelector("#pcerror");

const firstname = document.querySelector("#firstname")
const ferror = document.querySelector("#ferror")

const lastname = document.querySelector("#lasttname");
const lerror = document.querySelector("#lerror");

const email = document.querySelector("#Em");
const emailerr = document.querySelector("#eerror")

const phonenum = document.querySelector("#phone")
const phonerr = document.querySelector("#pherror");

const submit = document.querySelector("#submit")
submit.addEventListener("click", submit);




submit.addEventListener("click", function (event){
    if (firstname.value == ""){
        ferror.textContent = "Please Write your first name"
    }
    if (lastname.value == ""){
        lerror.textContent = "Please Write your last name"
    }
    if(phonenum.value.length!=10 ||phonenum.ValidityState.patternMismatch){
        phonerr.textContent = "Please enter a valid phoennumber";
    }
    if(email.validity.typeMismatch || email.value == ""){
        emailerr.textContent = "Please type a valid email ex: abcd@gmail.com"
    }
    if (pass.value.length <5 || pass.value.length >20){
        passerr.textContent = "Please enter a password that has a length between 5 and 20"
    }
    if (passconfirm.value != pass.value){
        passconfirmerr.textContent = "Please enter the same as the password";
    }
})

firstname.addEventListener("input", function (event){
    ferror.textContent = "";
});

lastname.addEventListener("input", function (event){
    lerror.textContent = "";
});
phonenum.addEventListener("input", function(event){
    phonerr.textContent = "";
})

email.addEventListener("input", function(event){
    emailerr.textContent = "";
});

pass.addEventListener("input", function(event){
    passerr.textContent = "";
});

passconfirm.addEventListener("input",function(event){
    passconfirmerr.textContent = ""
})


const reset = document.querySelector("#reset");
reset.addEventListener("click", resetall);

function resetall(){
    firstname.value = ""
    ferror.textContent = ""
    lastname.value = ""
    lerror.textContent = ""
    phonenum.value = ""
    phonerr.textContent = ""
    email.value = ""
    emailerr.textContent =""
    pass.value = ""
    passerr.textContent = ""
    passconfirm.value = ""
    passconfirmerr.textContent = ""
}