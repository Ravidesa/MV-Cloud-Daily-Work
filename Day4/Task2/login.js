document.getElementById("loginButton").addEventListener("click",  function(e){
    e.preventDefault();

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let regex = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z.]{2,6}$/

    if(email.value == ""){
        document.getElementById("error-msg").innerText = 'Please provide email!';
        return;
    }else if(!regex.test(email.value)){
        document.getElementById("error-msg").innerText = 'Email id is not correct!';
        return;
    }else if(password.value == ""){
        document.getElementById("error-msg").innerText = 'Please provide password!';
        return;
    }else if(password.value.length < 5){
        document.getElementById("error-msg").innerText = 'Password length must be of 5 character!';
        return;
    }
    document.getElementById("error-msg").innerText = "";
    document.getElementById("myForm").reset();
    window.location = './home.html';
});