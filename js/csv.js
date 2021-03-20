let globaldata;
var id = 0;
var saveChanges = document.querySelector("#btnsavechanges");

d3.dsv(";", "./data/pets-citizens.csv", function(d) {
        return [
            d.microchip,
            d.species,
            d.sex,
            d.size,
            d.potentDangerous,
            d.neighborhood,
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
            $('#btnsavechanges').on('click', function() {
                if ($(this).hasClass('selected')) {
                    t.row('.selected').remove().draw(false);
                }
            });

            try {

                $('#buttonsave').on('click', function() {
                    console.log("asf")
                    t.row.add([
                        microship,
                        species,
                        sex,
                        size,
                        potentDangerous,
                        neighborhood,
                        race,
                        owner,
                        adress,
                        { "defaultContent": `<button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>` },
                    ]).draw(false);
                });

            } catch (Exception) {

            }
            $('editar222').on('click', '.table-remove', function() { $(this).parents('tr').detach(); });

            // Automatically add a first row of data
            $('#addRow').click();
            globaldata = data;

        });
    })
    .catch(function(error) {
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