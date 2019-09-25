let addItemBtn = document.querySelector(".header_nav .btn"); //add item btn
let closeModal = document.querySelector("form header .close"); //close form btn
let modalForm = document.querySelector(".modal"); //popup form
let response = document.querySelector(".dashboard .response");
let closeResponse = document.querySelector(".dashboard .response i");
console.log(addItemBtn);

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
