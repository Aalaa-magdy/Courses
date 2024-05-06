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
  head[1].innerHTML = `Log Out`;
  head[1].addEventListener("click", function () {
    returnHeader();
  });
  head[0].innerHTML = `Profile`;
  head[0].href = "profile.html";
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
function returnHeader() {
  let head = document.querySelectorAll(".login");
  head[0].innerHTML = "Sing In";
  head[0].href = "signin.html";
  head[1].innerHTML = "Sing Up";
  head[1].href = "signup.html";
  localStorage.removeItem("Found");
}

if (found) {
  upDateHeader();
}
 function showProfile() {
  let profile = document.getElementById("access");
  profile.innerHTML='';
  profile.classList.add("course-box");
  profile.innerHTML = '';
  for (let i = 0; i < students[numOfUser].cart.length; i++) {
  let xx=document.createElement("div");
  xx.innerHTML= students[numOfUser].cart[i];
  xx.removeChild(xx.lastElementChild);
  xx.classList.add("course-con");
  let ss=document.createElement("button");
  ss.classList.add("over");
  ss.classList.add("btn");
  ss.onclick= function(){
  xx.remove();
  removeCourse(i);
  };
  ss.textContent="Remove";
  
  xx.appendChild(ss);
  profile.appendChild(xx);
  // console.log(xx.innerHTML);
  }
  
}

showProfile();

function removeCourse(i){
  students[numOfUser].cart.splice(i,1);
  updateLocalStorage();
}