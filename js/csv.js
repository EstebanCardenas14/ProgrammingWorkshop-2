let globaldata;
var id = 0;
let saveChanges = document.querySelector("#btnsavechanges");
let newInfo;

let addmicroship = document.querySelector("#addmicroship").value;
let addspecies = document.querySelector("#addspecies").value;
let addsex = document.querySelector("#addsex").value;
let addsize = document.querySelector("#size").value;
let addpotentDangerous = document.querySelector("#addpDangerous").value;
let addneighborhood = document.querySelector("#addneighborhood").value;
let addrace = document.querySelector("#addrace").value;
let addowner = document.querySelector("#addowner").value;
let addadress = document.querySelector("#addadress").value;
let addlatitudFA = document.querySelector("#addlatitudFA").value;
let addLongitudFA = document.querySelector("#addLongitudFA").value;


// console.log(namePet, namePerson, race, direccion, latitude, longitude, species, neighborhood,size,image);
var form = document.getElementById("formAdd");
d3.dsv(";", "./data/pets-citizens.csv", function (d) {
    return [
        d.microchip,
        d.species,
        d.sex,
        d.size,
        d.potentDangerous,
        d.neighborhood,
    ];
}).then(function (data) {
    $(document).ready(function () {

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
        
        
        $('#table1 tbody').on('click', 'tr', function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected');
            } else {
                t.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });
        $('#btnsavechanges').on('click', function () {
            if ($(this).hasClass('selected')) {
                t.row('.selected').remove().draw(false);
            }
        });
        $('#buttonsave').on('click', function () {
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
        });

        $('editSaveChanges').on('click', '.table-remove', function () { $(this).parents('tr').detach(); });

        // Automatically add a first row of data
        $('#editSaveChanges').click();
        globaldata = data;
    })
}).catch(function (error) {
    // handle error
    console.log('error', error);
});

let closeFormAdd = getElementById('closeFormAdd')
closeFormAdd.addEventListener('click', () => {
    getElementById('formAdd').style('display: none');
})


