function showMenu() {
  const menu = document.querySelector("header nav");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function more(x) {
  let btn = document.querySelectorAll(".question button");
  let parent = document.querySelectorAll(".question");
  if (btn[x].textContent === "+") {
    parent[x].style.height = "12rem";
    btn[x].textContent = "-";
    let p = document.createElement("p");
    p.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit 
    . Provident iusto quasi voluptates. Iure soluta cum tenetur quidem libero dicta,  
    vero necessitatibus molestias ratione quia culpa obcaecati, ab, possimus maiores maxime`;
    p.className = "ans";
    parent[x].appendChild(p);
  } else {
    parent[x].removeChild(parent[x].lastChild);
    btn[x].textContent = "+";
    parent[x].style.height = "5.7rem";
  }
}
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });
// nextBtn.addEventListener("click", () => {
//   scrollContainer.scrollLeft += 450;
// });
// backBtn.addEventListener("click", () => {
//   scrollContainer.scrollLeft -= 450;
// });

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
  if (localStorage.students == null) students = [];
  else students = JSON.parse(localStorage.getItem("students"));
// check emailValidity
emailInput.addEventListener("blur", function () {
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid Gmail email address";
    mail=false;
  }
   else {
      for(let i=0;i<students.length;i++)
    {
      if(emailInput.value===students[i].gmail)
      {
        emailError.textContent="This Email is already exist";
        mail=false;
      }
    }
    if(mail)
    emailError.textContent = "";
   
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

function updateLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}


// sign up page
function addStudent() {
  if (mail && fName && lName && pas && confirmPass) {
    let student = {
      gmail: emailInput.value,
      userName: firstName.value + " " + lastName.value,
      password: pass.value,
    };
    students.push(student);
    updateLocalStorage();
  }
}
console.log(students);
