$().ready(function() {
    // validate the comment form when it is submitted
    $("#mi-post").validate({
        rules: {
            titulo: {
                required: true,
                minlength: 20
            },
           
            comentario: {
                required: true,
                minlength: 200
            }
        },
        messages: {
            titulo: {
                required: "Debes completar tu titulo",
                minlength: "Tu titulo debe de tener al menos 20 caracteres"
            },
            comentario: {
                required: "El campo de texto es obligatorio",
                minlength: "El campo de texto debe tener al menos 200 caracteres"
            }
    
        }

    });
});