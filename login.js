let found, numOfUser;
if (localStorage.Found == null) found = false;
else found = localStorage.getItem("Found");
if (localStorage.numOfUser == null) numOfUser = -1;
else numOfUser = localStorage.getItem("numOfUser");
let students;
function updateLocalStorage() {
  localStorage.setItem("students", JSON.stringify(students));
}
function fillArray() {
  if (localStorage.students == null) students = [];
  else students = JSON.parse(localStorage.getItem("students"));
}
fillArray();

function login() {
  let em = document.getElementById("lemail");
  let ps = document.getElementById("lpass");

  let either = false;
  for (let i = 0; i < students.length; i++) {
    if (em.value == students[i].gmail) {
      if (ps.value == students[i].password) {
        found = true;
        localStorage.setItem("numOfUser", i);
        break;
      } else {
        either = true;
        break;
      }
    }
  }
  if (either) {
    let som = document.getElementById("either");
    som.innerHTML = `Something wrong in Email or Password`;
    som.style.color = "#c70e58db";
  } else if (!found) {
    let som = document.getElementById("either");
    som.innerHTML = `User Not Found`;
    som.style.color = "#c70e58db";
  } else if (found) {
    upDateHeader();
  }
}
// localStorage.removeItem("cart");
function upDateHeader() {
  let head = document.querySelectorAll(".login");
  head[0].innerHTML = `Log Out`;
  head[0].addEventListener("click", function () {
    returnHeader();
  });
  head[1].innerHTML = `Profile`;
  head[1].href = "profile.html";
  localStorage.setItem("Found", true);
}
function checkPossible(i) {
  if (localStorage.Found) {
    let allCourses = document.querySelectorAll(".course-con");
    students[numOfUser].cart.push(allCourses[i].innerHTML);
    updateLocalStorage();
  } else {
    window.alert("Login fist ,please");
  }
}

if (found) {
  upDateHeader();
}

function returnHeader() {
  let head = document.querySelectorAll(".login");
  head[0].innerHTML = "Sing In";
  head[0].href = "signin.html";
  head[1].innerHTML = "Sing Up";
  head[1].href = "signup.html";
  localStorage.removeItem("Found");
}

function showProfile() {
  let profile = document.getElementById("access");
  profile.innerHTML = "";
  for (let i = 0; i < students[numOfUser].cart.length; i++) {
    let con = document.createElement("div");
    con.innerHTML = students[numOfUser].cart[i];
    con.classList.add("exe");
    con.classList.add("course-con");
    profile.appendChild(con);  
  }
      let edit = document.querySelectorAll(".exe .over");
      for(let i=0;i<edit.length;i++){
        edit[i].textContent="Remove";
        edit[i].addEventListener("click",function(){
        
        })
      }
}

showProfile();
