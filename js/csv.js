var data;
d3.dsv(";", "./data/pets-citizens.csv", function (d) {
    return [
        d.microchip,
        d.species,
        d.sex,
        d.size,
        d.potentDangerous,
        d.neighborhood
    ];
}).then(function (data) {
    $(document).ready(function () {
        $('#table1').DataTable({
            data: data,
            columns: [
                { title: "microship" },
                { title: "species" },
                { title: "sex" },
                { title: "size" },
                { title: "pDangerous" },
                { title: "neighborhood" },
                { "defaultContent": `<button class = "btn btn-success" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>` },
                { title: "race" },
                { title: "owner" },
                { title: "address" },
                { title: "picture" },
            ]
        });
    });
})
    .catch(function (error) {
        // handle error
        console.log('error', error);

    });

// var buttonSave;
var newInfo;

var microship = document.querySelector("#microship").value;
var species = document.querySelector("#species").value;
var sex = document.querySelector("#sex").value;
var size = document.querySelector("#size").value;
var potentDangerous = document.querySelector("#pDangerous").value;
var neighborhood = document.querySelector("#neighborhood").value;
var race = document.querySelector("#race").value;
var owner = document.querySelector("#owner").value;
var adress = document.querySelector("#adress").value;
var latitudFA = document.querySelector("#latitudFA").value;
var LongitudFA = document.querySelector("#LongitudFA").value;


// console.log(namePet, namePerson, race, direccion, latitude, longitude, species, neighborhood,size,image);
var form = document.getElementById("formAdd");

buttonSave = document.getElementById("buttonsave");
buttonSave.addEventListener("click", () => {


    var dataf = new FormData(form);
    insertRowinTable(dataf)
    console.log("hola");

})

function insertRowinTable(dataf) {
    var TableRef = document.getElementById("table1");
    var TableRowRef = TableRef.insertRow(1);

    var NewCellRef = TableRowRef.insertCell(0);
    NewCellRef.textContent = microship
    NewCellRef = TableRowRef.insertCell(1);
    NewCellRef.textContent = species;

    NewCellRef = TableRowRef.insertCell(2);
    NewCellRef.textContent = sex;

    NewCellRef = TableRowRef.insertCell(3);
    NewCellRef.textContent = size

    NewCellRef = TableRowRef.insertCell(4);
    NewCellRef.textContent = potentDangerous

    NewCellRef = TableRowRef.insertCell(5);
    NewCellRef.textContent = neighborhood
    
    NewCellRef = TableRowRef.insertCell(6);
    NewCellRef.textContent = ""

    NewCellRef = TableRowRef.insertCell(7);
    NewCellRef.textContent = race

    NewCellRef = TableRowRef.insertCell(8);
    NewCellRef.textContent = owner

    NewCellRef = TableRowRef.insertCell(9);
    NewCellRef.textContent = adress
    data = data + [nameOwner, species, namePet, size, direccion, neighborhood]
    console.log(data);

}

