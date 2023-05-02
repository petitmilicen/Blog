$().ready(function() {
    // validate the comment form when it is submitted
    $("#mi-post").validate({
        rules: {
            titulo: {
                required: true,
                minlength: 20,
                maxlength: 40
            },
           
            texto: {
                required: true,
                minlength: 200
            },

        },
        messages: {
            titulo: {
                required: "Debes completar tu titulo",
                minlength: "Tu titulo debe de tener al menos 20 caracteres",
                maxlength: "El maximo del titulo es de un maximo de 40 caracteres"
            },
            texto: {
                required: "El campo de texto es obligatorio",
                minlength: "El campo de texto debe tener al menos 200 caracteres"
            },

    
        }

    });
});