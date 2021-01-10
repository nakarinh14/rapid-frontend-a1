window.onload = function(){
    const target = document.getElementById("form");
    const button = document.getElementById("submit");
    // add onblur effect, edge case when clicking into default empty input, and went out of focus. trigger input validation.
    target.onblur = validateInput
     //tried click event, there is a delayed on getting input form value. so listen to input change
    target.addEventListener('input', validateInput);
    button.addEventListener('click', displaySuccess);
}

function validateInput(){
    const target = document.getElementById("form");
    const warning = document.getElementById("warning");
    const button = document.getElementById("submit");
    console.log(target.value)
    console.log(validateEmail(target.value))
    if(!validateEmail(target.value)){
        target.classList.remove("success")
        target.classList.add("error")
        warning.style.display = "block";
        button.disabled = true;
    } else {
        target.classList.remove("error")
        target.classList.add("success")
        warning.style.display = "none";
        button.disabled = false;
    }
}

function displaySuccess(){
    const div = document.getElementById("box");
    div.innerHTML = "<div class='display-success'><h4>Thank you</h4>"+
    "<p>Your subscribtion was a success!<p><div>"
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
