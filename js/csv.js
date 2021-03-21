let globaldata;
let id = 0;
let editSaveChanges = document.querySelector("#editSaveChanges");
let rowdata;
let example =[23.410];

let addmicroship = document.querySelector("#addmicroship").value;
let addspecies = document.querySelector("#addspecies").value;
let addsex = document.querySelector("#addsex").value;
let addsize = document.querySelector("#addsize").value;
let addpotentDangerous = document.querySelector("#addpDangerous").value;
let addneighborhood = document.querySelector("#addneighborhood").value;
let addrace = document.querySelector("#addrace").value;
let addowner = document.querySelector("#addowner").value;
let addadress = document.querySelector("#addadress").value;
let addlatitudFA = document.querySelector("#addlatitudFA").value;
let addLongitudFA = document.querySelector("#addlongitudFA").value;

// console.log(namePet, namePerson, race, direccion, latitude, longitude, species, neighborhood,size,image);
var form = document.getElementById("formAdd");

d3.dsv(";", "./data/pets-citizens.csv", function(d) {

    example = d.microchip;
    return [
        d.microchip,
        d.species,
        d.sex,
        d.size,
        d.potentDangerous,
        d.neighborhood,
        d.race,
        d.owner,
        d.address
    ];
}).then(function(data) {
    $(document).ready(function() {

        var t = $('#table1').DataTable({
            data: data,
            columns: [
                { title: "microship" },
                { title: "species" },
                { title: "sex" },
                { title: "size" },
                { title: "pDangerous" },
                { title: "neighborhood" },
                { title: "race" },
                { title: "owner" },
                { title: "address" },
                { "defaultContent": `<button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>` },
            ],
            select: true
        });


        $('#table1 tbody').on('click', 'tr', function() {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                t.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        $('#editSaveChanges').on('click', () => {
            console.log(document.querySelector("#editrace").value)
            let editrace = document.querySelector("#editrace").value
            let editowner = document.querySelector("#editowner").value
            let editadress = document.querySelector("#editadress").value

            if (editadress.length == 0|| editowner.length == 0|| editadress.length == 0) {
                alert("Porfavor ingrese los nuevos datos")

         } else {
                rowdata = t.row('.selected').data();
                form.style.display = "none"
                t.row.add([
                    rowdata[0],
                    rowdata[1],
                    rowdata[2],
                    rowdata[3],
                    rowdata[4],
                    rowdata[5],
                    editrace,
                    editowner,
                    editadress,
                    `<button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>`,
                ]).draw(false);
                t.row('.selected').remove().draw(false);
            }

            alert('Actualizacion exitosa')

        });

        $('#buttonsave').on('click', function () {
            if(document.querySelector("#addmicroship").value == "" ||  document.querySelector("#addspecies").value == " " ||  document.querySelector("#addsex").value == " " ||
            document.querySelector("#addsize").value == " " || document.querySelector("#addpDangerous").value == " " ||  document.querySelector("#addneighborhood").value == " " ||
            document.querySelector("#addrace").value == "" ||  document.querySelector("#addowner").value == "" ||  document.querySelector("#addadress").value == "" ){
                   alert("Señor Usuario por favor ingrese todos los datos")   
             }else{

            t.row.add([
                document.querySelector("#addmicroship").value,
                document.querySelector("#addspecies").value,
                document.querySelector("#addsex").value,
                document.querySelector("#addsize").value,
                document.querySelector("#addpDangerous").value,
                document.querySelector("#addneighborhood").value,
                document.querySelector("#addrace").value,
                document.querySelector("#addowner").value,
                document.querySelector("#addadress").value,
                `<button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>`,
            ]).draw(false);
           }
        });


        $('editSaveChanges').on('click', '.table-remove', function() { $(this).parents('tr').detach(); });
        // Automatically add a first row of data
        globaldata = data;
    });
}).catch(function(error) {
    // handle error
    console.log('error', error);
});