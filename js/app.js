const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#container-form");
const btnCloseForm = document.querySelector(".btn-close");


addAnimal.addEventListener("click", () => {

    formAddAnimal.style.display = "block";

});

btnCloseForm.addEventListener("click", () => {

    formAddAnimal.style.display = "none";

});