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

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});
nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 450;
});
backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 440;
});

