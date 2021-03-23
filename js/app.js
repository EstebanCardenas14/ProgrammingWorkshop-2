const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#formAdd");
const btnCloseForm = document.querySelector("#closeFormAdd");
var imgmap = document.getElementById("img-map");
var buttonmap2 = document.getElementById("buttonmap2");
var buttonmap3 = document.getElementById("buttonmap3");
var output = document.getElementById("map");
var output2 = document.getElementById("mapa2");
let savemodal = document.getElementById("save-modal")
var BtnAddedit = document.getElementById("add-edit");
let addlatitudFAA = document.querySelector("#addlatitudFA");
let addLongitudFAA = document.querySelector("#addlongitudFA");
let editlatitud = document.querySelector("#editlatitud");
let editlongitud = document.querySelector("#editlongitud");
let btnx = document.querySelector("#btnx2")
var latitudmodal = document.getElementById("latitud-modal")
var longitudmodal = document.getElementById("longitud-modal")
var updateMap = document.getElementById("actualizarmapa")
var arrlat = [];
var arrlon = [];
let map;
function findMe() {
  function localization(posicion) {

    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    //Show the map
    map = L.map('map').setView([latitude, longitude], 15);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(map);
    //Add zoom 
    L.control.scale().addTo(map);
    //Add a marker
    updateMap.style.display = "block";
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
    x2.addEventListener("mouseover", () => {
      latitudmodal.innerText = x2.getLatLng().lat + "";
      longitudmodal.innerText = x2.getLatLng().lng + "";
    });
  }
  function error2() {
    output2.innerHTML = "<p>No se pudo obtener tu ubicación</p>";
  }
  navigator.geolocation.getCurrentPosition(localization2, error2);
}

addAnimal.addEventListener("click", () => {
  formAddAnimal.style.display = "block"
});
btnCloseForm.addEventListener("click", () => formAddAnimal.style.display = "none");

btnx.addEventListener("click", () => {
  output.style.display = "none";
  btnx.style.display = "none"
  updateMap.style.display = "none"
});
imgmap.addEventListener("click", () => {
  output.style.display = "block"
  btnx.style.display = "block"
  updateMap.style.display = "block"
  findMe()
});
buttonmap2.addEventListener("click", () => {
  savemodal.innerText  = "Agregar Latitud y Longitud 1"
  findMe2();
});
buttonmap3.addEventListener("click", () => {
  savemodal.innerText  = "Agregar Latitud y Longitud 2"
  findMe2();
});


savemodal.addEventListener("click", () => {
  if(savemodal.innerText == "Agregar Latitud y Longitud 1") {
    addlatitudFAA.value = latitudmodal.innerText;
    addLongitudFAA.value = longitudmodal.innerText;
  }
  else if (savemodal.innerText == "Agregar Latitud y Longitud 2") {
    editlatitud.value = latitudmodal.innerText;
    editlongitud.value = longitudmodal.innerText;
  } 
  arrlat.push(latitudmodal.innerText);
  arrlon.push(longitudmodal.innerText);

  $("#mapaModal").modal('hide');
})
updateMap.addEventListener("click", () => {
  console.log(arrlat)
  try {
    for (let i = 0; i < arrlat.length; i++) {
      let x2 = new L.marker([arrlat[i], arrlon[i]], { draggable: true }).addTo(map);
    }
  } catch (error) {

  }
})
