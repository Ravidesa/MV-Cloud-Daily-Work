const firebaseConfig = {
  apiKey: "AIzaSyBVUhOroQ3YQVEntiaYpnO1utE6nrbI_FQ",
  authDomain: "contactform-8f4e3.firebaseapp.com",
  databaseURL: "https://contactform-8f4e3-default-rtdb.firebaseio.com",
  projectId: "contactform-8f4e3",
  storageBucket: "contactform-8f4e3.appspot.com",
  messagingSenderId: "192353202681",
  appId: "1:192353202681:web:89d45b2bf82f5651de4d28",
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("cpassword").value;

  var gender = document.querySelector('input[name="gender"]:checked').value;
  var age = document.getElementById("age").value;
  var bio = document.getElementById("bio").value;
  var income = document.getElementById("income").value;

  saveData(firstName, lastName, email, password, cpassword, gender, age, bio, income);

  //display message
  document.querySelector(".alert").style.display = "block";

  //remove message
  setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
  }, 2000);


  document.getElementById("contactForm").reset();
}

const saveData = (firstName, lastName, email, password, cpassword, gender, age, bio, income) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    cpassword: cpassword,
    gender: gender,
    age: age,
    bio: bio,
    income: income,
  });
};
