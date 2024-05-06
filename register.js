
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let emailInput = document.getElementById("email");
let pass = document.getElementById("pass");
let confirm = document.getElementById("confirm");
let emailError = document.getElementById("emailError");
let firstError = document.getElementById("firstError");
let lastError = document.getElementById("lastError");
let passError = document.getElementById("passError");
let confirmError = document.getElementById("confirmError");
let mail = true,
  fName = false,
  lName = false,
  pas = false,
  confirmPass = false;
let students;
function fillArray() {
  if (localStorage.students == null) students = [];
  else students = JSON.parse(localStorage.getItem("students"));
}
fillArray();
function updateLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}
// check emailValidity
emailInput.addEventListener("blur", function () {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid Gmail email address";
    mail = false;
  } else {
    for (let i = 0; i < students.length; i++) {
      if (emailInput.value == students[i].gmail) {
        emailError.textContent = "This Email is already exist";
        mail = false;
      }
    }
    if (mail) emailError.textContent = "";
  }
});

// check nameValidity
firstName.addEventListener("blur", function () {
  if (firstName.value.length == 0)
    firstError.textContent = "this field is required";
  else {
    let pattern = /[0-9!@#$%^&*()-=+_.]/;
    if (pattern.test(firstName.value)) {
      firstError.textContent = "Name should contain only letters";
    } else {
      firstError.textContent = "";
      fName = true;
    }
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value.length == 0)
    firstError.textContent = "this field is required";
  else {
    let pattern = /[0-9!@#$%^&*()-=+_.]/;
    if (pattern.test(lastName.value)) {
      lastError.textContent = "Name should contain only letters";
    } else {
      lastError.textContent = "";
      lName = true;
    }
  }
});
pass.addEventListener("blur", function () {
  if (pass.value.length < 6)
    passError.textContent = "Password should be more than 6 characters";
  else {
    passError.textContent = "";
    pas = true;
  }
});
confirm.addEventListener("blur", function () {
  if (confirm.value !== pass.value)
    confirmError.textContent = "invalid confirmation";
  else {
    confirmError.textContent = "";
    confirmPass = true;
  }
});
function upDateHeader() {
  let head = document.querySelectorAll(".login");
  head[1].innerHTML = `Log Out`;
  head[1].addEventListener("click", function () {
    returnHeader();
  });
  head[0].innerHTML = `Profile`;
  head[0].href = "profile.html";
  localStorage.setItem("Found", true);
}
function returnHeader() {
  let head = document.querySelectorAll(".login");
  head[0].innerHTML = "Sing In";
  head[0].href = "signin.html";
  head[1].innerHTML = "Sing Up";
  head[1].href = "signup.html";
  localStorage.removeItem("Found");
}

// sign up page
function addStudent() {
  if (mail && fName && lName && pas && confirmPass) {
    let student = {
      gmail: emailInput.value,
      userName: firstName.value + " " + lastName.value,
      password: pass.value,
      cart:[],
    };
    students.push(student);
     updateLocalStorage();
     localStorage.setItem("numOfUser",students.length-1);
    upDateHeader();
  }
}
