$(document).ready(function() {
    $('#form-login').validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
      },
      messages: {
        email: {
          required: "Por favor, ingrese su correo electrónico",
          email: "Por favor, ingrese un correo electrónico válido"
        },
        password: {
          required: "Por favor, ingrese una contraseña",
          minlength: "La contraseña debe tener al menos 8 caracteres"
        },

      }
    });
  });
  