function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function subscribeSubmit(){
    const target = document.getElementById("form");
    const warning = document.getElementById("warning");
    if(!validateEmail(target.value)){
        target.style.borderColor = "red";
        target.onfocus = function(){
            target.style.boxShadow = "0 0 8px rgba(219, 13, 65, 0.6)";
        }
        warning.style.display = "block";
    } else {
        target.style.borderColor = "";
        target.onfocus = function(){
            target.boxShadow = "0 0 8px rgba(13, 126, 219, 0.6)";
            target.border = "2px solid rgb(74, 114, 148)";
        }
        warning.style.display = "none";
        target.focus()
        alert("Subscription success!")
    }
    target.onblur = function(){
        target.style.boxShadow = ""
    }
}

