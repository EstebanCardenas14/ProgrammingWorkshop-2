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