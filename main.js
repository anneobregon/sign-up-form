    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var password = document.getElementById("password");
    var email = document.getElementById("email");
    var submit = document.getElementById("submit");

    var errMsgFirst = document.getElementById("errFirst");
    var errMsgLast = document.getElementById("errLast");
    var errMsgPass = document.getElementById("errPass");
    var errMsgEmail = document.getElementById("errEmail");

    var image = document.getElementsByClassName("image");

    isFocused = false;


function handleSubmit(event) {
    event.preventDefault();

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(firstname.value === '') {
        errMsgFirst.textContent = "First Name cannot be empty";
        errMsgFirst.style.display = "block";
        image[0].style.display = "block";
        firstname.style.border = "1px solid hsl(0, 100%, 74%)";
        firstname.placeholder = '';
    } else {
        errMsgFirst.style.display = "none";
        image[0].style.display = "none";
        firstname.style.border = "1px solid hsl(0, 0%, 87%)";
    }

    if(lastname.value === '') {
        errMsgLast.textContent = "Last Name cannot be empty";
        errMsgLast.style.display = "block";
        image[1].style.display = "block";
        lastname.style.border = "1px solid hsl(0, 100%, 74%)";
        lastname.placeholder = '';
    } else {
        errMsgLast.style.display = "none";
        image[1].style.display = "none";
        lastname.style.border = "1px solid hsl(0, 0%, 87%)";
    }

    if(password.value === '') {
        errMsgPass.textContent = "Password cannot be empty";
        errMsgPass.style.display = "block";
        image[3].style.display = "block";
        password.style.border = "1px solid hsl(0, 100%, 74%)";
        password.placeholder = '';
    } else {
        errMsgPass.style.display = "none";
        image[3].style.display = "none";
        password.style.border = "1px solid hsl(0, 0%, 87%)";
    }

    if (email.value === '') {
        errMsgEmail.textContent = "Email cannot be empty";
        errMsgEmail.style.display = "block";
        image[2].style.display = "block";
        email.style.border = "1px solid hsl(0, 100%, 74%)";
        email.placeholder = '';
    } else if ( !email.value.match(mailformat)) {
        errMsgEmail.textContent = "Looks like this is not an email";
        errMsgEmail.style.display = "block";
        image[2].style.display = "block";
        email.style.border = "1px solid hsl(0, 100%, 74%)";
        email.placeholder = '';
    } else {
        errMsgEmail.style.display = "none";
        image[2].style.display = "none";
        email.style.border = "1px solid hsl(0, 0%, 87%)";
    }
  
}



email.addEventListener('blur', function() {
    isFocused = false;
    focusChecker();
})
firstname.addEventListener('blur', function() {
    isFocused = false;
    focusChecker();
})
lastname.addEventListener('blur', function() {
    isFocused = false;
    focusChecker();
})
password.addEventListener('blur', function() {
    isFocused = false;
    focusChecker();
})

firstname.addEventListener('focus', function() {
    firstname.style.border = "1px solid hsl(248, 32%, 49%)";
    isFocused = true;
    focusChecker();

    email.style.border = "1px solid hsl(0, 0%, 87%)";
    lastname.style.border = "1px solid hsl(0, 0%, 87%)";
    password.style.border = "1px solid hsl(0, 0%, 87%)";
})

lastname.addEventListener('focus', function() {
    lastname.style.border = "1px solid hsl(248, 32%, 49%)";
    isFocused = true;
    focusChecker();

    email.style.border = "1px solid hsl(0, 0%, 87%)";
    firstname.style.border = "1px solid hsl(0, 0%, 87%)";
    password.style.border = "1px solid hsl(0, 0%, 87%)";
})

password.addEventListener('focus', function() {
    password.style.border = "1px solid hsl(248, 32%, 49%)";
    isFocused = true;
    focusChecker();

    email.style.border = "1px solid hsl(0, 0%, 87%)";
    firstname.style.border = "1px solid hsl(0, 0%, 87%)";
    lastname.style.border = "1px solid hsl(0, 0%, 87%)";
})

email.addEventListener('focus', function() {
    email.style.border = "1px solid hsl(248, 32%, 49%)";
    isFocused = true;
    focusChecker();

    firstname.style.border = "1px solid hsl(0, 0%, 87%)";
    lastname.style.border = "1px solid hsl(0, 0%, 87%)";
    password.style.border = "1px solid hsl(0, 0%, 87%)";
})

function focusChecker() {
    if(isFocused){
        firstname.placeholder = 'First Name';
        errMsgFirst.style.display = "none";
        image[0].style.display = "none";
    
        lastname.placeholder = 'Last Name';
        errMsgLast.style.display = "none";
        image[1].style.display = "none";
    
        email.placeholder = 'Email Address';
        errMsgEmail.style.display = "none";
        image[2].style.display = "none";
    
        password.placeholder = 'Password';
        errMsgPass.style.display = "none";
        image[3].style.display = "none";
    
    } else {
        email.style.border = "1px solid hsl(0, 0%, 87%)";
        firstname.style.border = "1px solid hsl(0, 0%, 87%)";
        lastname.style.border = "1px solid hsl(0, 0%, 87%)";
        password.style.border = "1px solid hsl(0, 0%, 87%)";
    }
}

submit.addEventListener("click", handleSubmit);