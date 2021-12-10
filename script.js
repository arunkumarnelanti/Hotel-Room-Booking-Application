//script.js

const form = document.querySelector("form"),
    eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); //Preventing form from submitting 
    if (eInput.value == "") {
        //if email is empty
        eField.classList.add("shake", "error");
    } else {
        checkEmail(); //calling checkEmail function
    }
    if (pInput.value == "") {
        //if password is empty
        pField.classList.add("shake", "error");
    }

    setTimeout(() => {
        //remove shake class after 500ms
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    //working on input keyup
    eInput.onkeyup = () => {
            checkEmail(); //calling checkEmail function
        }
        //create a function
    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern to validate Email
        if (!eInput.value.match(pattern)) {
            //if pattern not matched with user entered value
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt");
            //if email is not empty then show Enter a valid email address until email is valid else show email can't be empty
            (eInput.value != "") ? errorTxt.innerText = "Enter valid Email Address": errorTxt.innerText = "Email can't be empty";
        } else {
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = () => {
        if (pInput.value == "") {
            //if password is empty
            eField.classList.add("error");
        } else {
            pField.classList.remove("error");
        }
    }

    //lets work on what to do after user filled up proper details
    //if error class not contains in eField and pField then user has entered proper details
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = "Homepage.html"; //remove # and put that url where you want to submit the form data
        console.log("Form submitted");
    }
}