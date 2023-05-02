// JavaScript (jQuery)
$(document).ready(function() {
  // Validación del formulario de donación
  $('#donacionForm').submit(function(event) {
    // Prevenir envío del formulario si hay errores de validación
    event.preventDefault();

    // Obtener valores de los campos del formulario
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var monto = $('#monto').val();
    var mensaje = $('#mensaje').val();
    var pago = $('#pago').val();

    // Validar que el campo de nombre no esté vacío y que no contenga números ni caracteres especiales
    if (!nombre || !/^[a-zA-Z ]+$/.test(nombre)) {
      alert('Por favor ingrese su nombre completo sin números ni caracteres especiales');
      return;
    }

    // Validar que el campo de correo electrónico sea válido
    if (!email || !isValidEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido');
      return;
    }

    // Validar que el campo de monto sea un número mayor a cero y menor o igual a 5000
    if (!monto || monto <= 0 || monto > 999999999) {
      alert('Por favor ingrese un monto válido (entre $1 y $999.999.999)');
      return;
    }

    // Validar que el campo de mensaje no exceda los 100 caracteres
    if (mensaje.length > 100) {
      alert('El mensaje no debe exceder los 100 caracteres');
      return;
    }

    // Validar que se haya seleccionado un método de pago distinto a "Seleccione un método"
    if (!pago || pago == "#") {
      alert('Por favor, seleccione un método de pago');
      return;
    }

    // Envía el formulario
    this.submit();

     // Muestra una alerta de agradecimiento
     alert('¡Gracias por su donación! Su comprobante será enviado por correo electrónico');
  });

  // Función para validar un correo electrónico
  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
