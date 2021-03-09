const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#container-form");
const btnCloseForm = document.querySelector(".btn-close");
var findmeee = document.getElementById("buttonmap");
const card = document.querySelector(".card-animals");
var output = document.getElementById("map");
var edit = document.getElementById("Button-edit");
var BtnAddedit = document.getElementById("add-edit");


edit.addEventListener("click", () => {

    formAddAnimal.style.display = "block";
    BtnAddedit.innerText =("Editar mascota");
    

});

addAnimal.addEventListener("click", () => {

    formAddAnimal.style.display = "block";
    BtnAddedit.innerText =("Añadir mascota");

});

btnCloseForm.addEventListener("click", () => {

    formAddAnimal.style.display = "none";

});

function findMe() {
  function localization(posicion) {

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    //Show the map
    let map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(map);
    //Add zoom 
    L.control.scale().addTo(map);
    //Add a marker
    var x = new L.marker([latitude, longitude], { draggable: true }).addTo(map);
    x.addEventListener("click", () => {
      console.log(x.getLatLng().lng)
      console.log(x.getLatLng().lat)
      card.style.display = 'block';
    });
  }
  function error() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
  }
  navigator.geolocation.getCurrentPosition(localization, error);
}
findmeee.addEventListener("click", () => {
  findMe()
});