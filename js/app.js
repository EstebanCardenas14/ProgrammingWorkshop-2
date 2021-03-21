const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#formAdd");
const btnCloseForm = document.querySelector("#closeFormAdd");
var imgmap = document.getElementById("img-map");
var buttonmap = document.getElementById("buttonmap");
var buttonmap2 = document.getElementById("buttonmap2");
const card = document.querySelector(".card-animals");
var output = document.getElementById("map");
var output2 = document.getElementById("mapa2");

var BtnAddedit = document.getElementById("add-edit");
var txtlatitude = document.getElementById("latitude");
var txtlongitude = document.getElementById("longitude");
let btnx = document.querySelector("#btnx2")

var arrlat = [];
var arrlon = [];

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
    try {
      for (let i = 0; i < arrlat1.length; i++) {
        var x = new L.marker([arrlat[i], arrlon[i]], { draggable: true }).addTo(map);
      }
    } catch (error) {
      
    }
   
  }
  function error() {
    output.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
  }
  navigator.geolocation.getCurrentPosition(localization, error);
}
function findMe2() {
  function localization2(posicion2) {

    let latitude2 = posicion2.coords.latitude;
    let longitude2 = posicion2.coords.longitude;
    //Show the map
    let map2 = L.map('mapa2').setView([latitude2, longitude2], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(map2);
    //Add zoom 
    L.control.scale().addTo(map2);
    //Add a marker
    let x2 = new L.marker([latitude2, longitude2], { draggable: true }).addTo(map2);
    x.addEventListener("click", () => { 
      arrlat1.push( x2.getLatLng().lat)
      arrlon2.push(x2.getLatLng().lng)
    });
  }
  function error2() {
    output2.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
  }
  navigator.geolocation.getCurrentPosition(localization2, error2);
}



addAnimal.addEventListener("click", () => {

    formAddAnimal.style.display = "block";
    BtnAddedit.innerText =("Añadir mascota");

});

btnCloseForm.addEventListener("click", () => formAddAnimal.style.display = "none");
btnx.addEventListener( "click", ()=>{
  console.log("safasf")
  output.style.display = "none";
  btnx.style.display = "none"
});
imgmap.addEventListener("click", () => {
  output.style.display = "block"
  btnx.style.display = "block"
  findMe()
});
buttonmap2.addEventListener("click", () => {
  
  findMe2();
});

buttonmap.addEventListener("click", () => {
  output.style.display = "block"
  btnx.style.display = "block"
  findMe()
});

