const password = document.getElementById("code");
const confir = document.getElementById("concode");
const notmat = document.querySelector(".notmatch")
const short = document.querySelector(".short")

confir.addEventListener("input", function() {
    const confirmvalue = confir.value;
    const passvalue = password.value;

    if (confirmvalue !== passvalue ||  confirmvalue.length < 4) {
        password.classList.add("error");
        confir.classList.add("error");
    } else {
        password.classList.remove("error");
        confir.classList.remove("error");
        notmat.textContent ="";
    }


    if (confirmvalue === passvalue && confirmvalue.length >= 4) {
        password.classList.add("noterror");
        confir.classList.add("noterror");
    } else {
        password.classList.remove("noterror");
        confir.classList.remove("noterror");
    }



    if (confirmvalue !== passvalue){
        notmat.textContent ="*Passwords do not match";
    } else{
        notmat.textContent ="";
    }
    
});



password.addEventListener("input",function(){
    const confirmvalue = confir.value;
    const passvalue = password.value;

    if( passvalue.length < 4){
        password.classList.add("error");
        confir.classList.add("error");
        short.textContent="*Password too short"
    }
    else{
        password.classList.remove("error");
        confir.classList.remove("error");
        short.textContent ="";
    }

    if(passvalue !== confirmvalue){
        password.classList.add("error");
        confir.classList.add("error");
    }
})





const email = document.getElementById("mail");
const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("input", function () {
    const emailvalue = email.value; // Move this line inside the event listener

    if (!emailpattern.test(emailvalue)) {
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

});


 