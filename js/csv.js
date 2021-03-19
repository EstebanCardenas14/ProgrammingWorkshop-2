d3.dsv(";", "./data/pets-citizens.csv", function(d) {
        return [
            d.microchip,
            d.species,
            d.sex,
            d.size,
            d.potentDangerous,
            d.neighborhood
        ];
    }).then(function(data) {
        $(document).ready(function() {
            $('#example').DataTable({
                data: data,
                columns: [
                    { title: "microship" },
                    { title: "species" },
                    { title: "sex" },
                    { title: "size" },
                    { title: "potentDangerous" },
                    { title: "neighborhood" },
                    { "defaultContent": `<button class = "btn btn-success" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>` }
                    // { title: "owner" },
                    // { title: "address" },
                    // { title: "picture" },
                ]
            });
        });
    })
    .catch(function(error) {
        // handle error
        console.log('error', error);

    });

    // var buttonSave;
    // var namePet;
    // var namePerson;
    // var race;
    // var direccion;
    // var latitude;
    // var longitude;
    // var species;
    // var neighborhood;
    // var size;
    // var image;
    // namePet = document.querySelector("#NamePet").value;
    // namePerson = document.querySelector("#NamePerson").value;
    // race = document.querySelector("#race").value;
    // direccion = document.querySelector("#direccion").value
    // latitude = document.querySelector("#latitudFA").value;
    // longitude = document.querySelector("#LongitudFA").value;
    // species = document.querySelector("#species").value;
    // neighborhood = document.querySelector("#neighborhood").value;
    // size = document.querySelector("#size").value;
    // image = document.querySelector("#image").value

    // console.log(namePet, namePerson, race, direccion, latitude, longitude, species, neighborhood,size,image);
  var form = document.getElementById("formAdd");
     
    buttonSave = document.getElementById("buttonsave");
    buttonSave.addEventListener("click", () =>  {

         
        var dataf = new FormData(form);
        insertRowinTable(dataf)
        console.log("hola");
    
})

function insertRowinTable(dataf ){
    var TableRef = document.getElementById("example");
    var TableRowRef = TableRef.insertRow(1);

    var NewCellRef = TableRowRef.insertCell(0);
    NewCellRef.textContent = document.querySelector("#NamePerson").value;
    console.log(dataf.get("NamePerson"));

     NewCellRef = TableRowRef.insertCell(1);
     NewCellRef.textContent = document.querySelector("#species").value;

     NewCellRef = TableRowRef.insertCell(2);
     NewCellRef.textContent = document.querySelector("#NamePet").value;

     NewCellRef = TableRowRef.insertCell(3);
     NewCellRef.textContent = document.querySelector("#size").value;

     NewCellRef = TableRowRef.insertCell(4);
     NewCellRef.textContent = document.querySelector("#direccion").value

     NewCellRef = TableRowRef.insertCell(5);
     NewCellRef.textContent = document.querySelector("#neighborhood").value;


}

    