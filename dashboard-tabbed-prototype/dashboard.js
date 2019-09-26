//=========MOBILE NAV SET UP HERE
const burger = document.querySelector(".burger");
const sideNav = document.querySelector(".side_bar");
const closeNav = document.querySelector("#close_nav");
const navLinks = document.querySelectorAll("#nav_link");
console.log(navLinks);

// navLinks.forEach(navLink => {
//   navLink.addEventListener("click", () => {
//     sideNav.style.transform = "translateX(-100%)";
//   });
// });

burger.addEventListener("click", () => {
  sideNav.style.transform = "translateX(0)";
});

closeNav.addEventListener("click", () => {
  sideNav.style.transform = "translateX(-100%)";
});

//===========TABBED CONTENT SET UP HERE
function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  for (let i = 0; i < activeTabs.length; i++) {
    activeTabs[i].className = activeTabs[i].className.replace("active", "");
  }

  event.target.parentElement.className += " active";
  console.log(
    (document.getElementById(event.target.href.split("#")[1]).className +=
      " active")
  );
}

const element = document.getElementById("nav_tab");
element.addEventListener("click", onTabClick, false);

//=========MODAL SET UP HERE
let addItemBtn = document.querySelector(".header_nav .btn"); //add item btn
let closeModal = document.querySelector("form header .close"); //close form btn
let modalForm = document.querySelector(".modal"); //popup form
let response = document.querySelector(".dashboard .response");
let closeResponse = document.querySelector(".dashboard .response i");

//func to make modal form popup when addItemBtn is clicked
addItemBtn.addEventListener("click", () => {
  modalForm.style.display = "flex";
});

//func to make modal close when closeModal is clicked
closeModal.addEventListener("click", () => {
  modalForm.style.display = "none";
  console.log("close");
});

//func to close response msg
closeResponse.addEventListener("click", () => {
  response.style.visibility = "hidden";
});
