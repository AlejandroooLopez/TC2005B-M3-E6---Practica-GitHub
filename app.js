document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageEl = document.getElementById('message');

    try {
        if (!isValidEmail(email)) {
            throw new Error("Formato de correo inválido");
        }
        if (!isValidPassword(password)) {
            throw new Error("La contraseña debe tener al menos 6 caracteres");
        }
        
        messageEl.style.color = "green";
        messageEl.textContent = "¡Registro exitoso!";
        
        // Log de éxito en consola (parte del logging)
        console.log(`Nuevo usuario registrado con email: ${email}`);

    } catch (error) {
        messageEl.style.color = "red";
        messageEl.textContent = error.message;
        
        // Enviar el error a Sentry para monitoreo en la nube
        if (typeof Sentry !== 'undefined') {
            Sentry.captureException(error);
        }
    }
});