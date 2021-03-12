const addAnimal = document.getElementById("btn-addAnimal");
const formAddAnimal = document.querySelector("#cr-form");
const btnCloseForm = document.querySelector(".btn-close");


// Table functions 
$('#DataPets').DataTable({
    order: [
        [3, 'desc']
    ],
    pagingType: 'full_numbers',
    lengthMenu: [
        [5, 10, 25, 50, -1],
        [5, 10, 25, 50, "All"]
    ],
    initComplete: function() {
        this.api().columns().every(function() {
            var column = this;
            var select = $('<select><option value=""></option></select>')
                .appendTo($(column.footer()).empty())
                .on('change', function() {
                    var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                    );

                    column
                        .search(val ? '^' + val + '$' : '', true, false)
                        .draw();
                });

            column.data().unique().sort().each(function(d, j) {
                select.append('<option value="' + d + '">' + d + '</option>')
            });
        });
    }
});


addAnimal.addEventListener("click", () => {

    formAddAnimal.style.display = "block";

});

btnCloseForm.addEventListener("click", () => {

    formAddAnimal.style.display = "none";

});