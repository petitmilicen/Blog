$(document).ready(function() {
    // Selecciona el formulario de donación
    var form = $('#donacionForm');
  
    // Agrega un evento de envío de formulario
    form.on('submit', function(event) {
      // Detiene el envío del formulario
      event.preventDefault();
  
      // Obtiene los valores de los campos
      var nombre = $('#nombre').val().trim();
      var monto = $('#monto').val().trim();
      var mensaje = $('#mensaje').val().trim();
  
      // Valida que el campo de nombre no esté vacío y contenga solo letras y espacios
      var nombreRegex = /^[a-zA-Z ]+$/;
      if (!nombre) {
        alert('Por favor, ingrese su nombre.');
        return;
      } else if (!nombreRegex.test(nombre)) {
        alert('Por favor, ingrese un nombre válido que contenga solo letras y espacios.');
        return;
      }
  
      // Valida que el campo de monto sea un número y esté entre 1 y 999999999
      if (isNaN(monto) || monto < 1 || monto > 999999999) {
        alert('Por favor, ingrese un monto válido entre $1 y $999.999.999.');
        return;
      }
  
      // Valida que el campo de mensaje no esté vacío y contenga menos de 100 caracteres
      if (!mensaje) {
        alert('Por favor, ingrese un mensaje.');
        return;
      } else if (mensaje.length > 100) {
        alert('Por favor, ingrese un mensaje de menos de 100 caracteres.');
        return;
      }
  
      // Envía el formulario si todos los campos son válidos
      form.submit();
    });
  });
  