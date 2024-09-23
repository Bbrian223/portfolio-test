document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-status').innerText = 'Gracias por tu mensaje. ¡Te responderé pronto!';
        document.getElementById('contacto-form').reset();
    } else {
        document.getElementById('form-status').innerText = 'Por favor, completa todos los campos.';
    }
});
