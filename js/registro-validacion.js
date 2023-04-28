$(document).ready(function() {
    $('#form-registro').validate({
      rules: {
        nombre: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        password_2: {
          required: true,
          minlength: 8,
          equalTo: "#password"
        }
      },
      messages: {
        nombre: {
          required: "Por favor, ingrese su nombre",
          minlength: "El nombre tiene contener minimo 3 caracteres"
        },
        email: {
          required: "Por favor, ingrese su correo electrónico",
          email: "Por favor, ingrese un correo electrónico válido"
        },
        password: {
          required: "Por favor, ingrese una contraseña",
          minlength: "La contraseña debe tener al menos 8 caracteres"
        },
        password_2: {
          required: "Por favor, confirme su contraseña",
          minlength: "La contraseña debe tener al menos 8 caracteres",
          equalTo: "Las contraseñas no coinciden"
        }
      }
    });
  });
  