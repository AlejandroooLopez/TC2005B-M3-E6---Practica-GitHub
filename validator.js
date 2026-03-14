// Lógica de validación
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isValidPassword(password) {
    return password.length >= 6;
}

// Exportar para Node.js (Jest) si estamos en ese entorno
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { isValidEmail, isValidPassword };
}