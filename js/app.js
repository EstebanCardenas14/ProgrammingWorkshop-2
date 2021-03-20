const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#formAdd");
const btnCloseForm = document.querySelector("#closeFormAdd");
var imgmap = document.getElementById("img-map");
var buttonmap = document.getElementById("buttonmap");
const card = document.querySelector(".card-animals");
var output = document.getElementById("map");
var edit = document.getElementById("Button-edit0");
var edit1 = document.getElementById("Button-edit1");
var edit2= document.getElementById("Button-edit2");
var BtnAddedit = document.getElementById("add-edit");
var txtlatitude = document.getElementById("latitude");
var txtlongitude = document.getElementById("longitude");
var btnx = document.getElementById("btnx")



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
      txtlatitude.value = x.getLatLng().lat;
      txtlongitude.value = x.getLatLng().lng;
    
      card.style.display = 'block';
    });
  }
  function error() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
  }
  navigator.geolocation.getCurrentPosition(localization, error);
}


addAnimal.addEventListener("click", () => {

    formAddAnimal.style.display = "block";
    BtnAddedit.innerText =("Añadir mascota");

});

btnCloseForm.addEventListener("click", () => formAddAnimal.style.display = "none");

imgmap.addEventListener("click", () => {
  output.style.display = "block"
  btnx.style.display = "block"
  findMe()
});

buttonmap.addEventListener("click", () => {
  output.style.display = "block"
  btnx.style.display = "block"
  findMe()
});
btnx.addEventListener( "click", ()=>{
  output.style.display = "none";
  btnx.style.display = "none"
});
edit.addEventListener("click", () => {

    formAddAnimal.style.display = "block";
    BtnAddedit.innerText =("Editar mascota");

});

edit1.addEventListener("click", () => {

  formAddAnimal.style.display = "block";
  BtnAddedit.innerText =("Editar mascota");

});

edit2.addEventListener("click", () => {

  formAddAnimal.style.display = "block";
  BtnAddedit.innerText =("Editar mascota");

});