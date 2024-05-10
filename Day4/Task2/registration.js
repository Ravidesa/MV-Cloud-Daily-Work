
    document.getElementById("myButton").addEventListener("click", function(e) {
        e.preventDefault();
    
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let aboutYour = document.getElementById("aboutYour");
        let gender = document.querySelector('input[name="gender"]:checked');
        let aboutSch = document.getElementById('yourschool');
        // let error = document.getElementById("error-msg");

        let regex = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z.]{2,6}$/
    
        console.log(aboutYour);
    
        if(fname.value == ""){
            document.getElementById("error-msg").innerText = 'Please provide First Name!';
            return;
        }else if(lname.value == ""){
            document.getElementById("error-msg").innerText = 'Please provide Last Name!';
            return;
        }else if(email.value == ""){
            document.getElementById("error-msg").innerText = 'Please provide email!';
            return;
        }else if(!regex.test(email.value)){
            document.getElementById("error-msg").innerText = 'Email id is not correct!';
            return;
        }else if(password.value == ""){
            document.getElementById("error-msg").innerText = 'Please provide password!';
            return;
        }else if(aboutYour.value == ""){
            document.getElementById("error-msg").innerText = 'Please provide about your self!';
            return;
        }else if(gender == null) {
            document.getElementById("error-msg").innerText = 'Please select gender!';
            return;
        }else if(aboutSch.value == "") {
            document.getElementById("error-msg").innerText = 'Please provide your school!';
            return;
        }
        document.getElementById("error-msg").innerText = "";
        document.getElementById("myForm").reset();
        window.location = './confimRegistration.html';
    })