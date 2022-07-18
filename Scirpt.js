const pass = document.querySelector("#pass");
const passconfirm = document.querySelector("#passconfirm");

const firstname = document.querySelector("#firstname")

const lastname = document.querySelector("#lasttname");

const email = document.querySelector("#Em");

const phonenum = document.querySelector("#phone")

const submit = document.querySelector("#submit")
submit.addEventListener("click", submit);



const reset = document.querySelector("#reset");
reset.addEventListener("click", resetall);

function resetall(){
    firstname.value = ""
    lastname.value = ""
    phonenum.value = ""
    email.value = ""
    pass.value = ""
    passconfirm.value = ""
}