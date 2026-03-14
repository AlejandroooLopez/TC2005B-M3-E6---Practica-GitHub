const { isValidEmail, isValidPassword } = require('./validator');

describe('Pruebas de Validación del Formulario', () => {
    test('Debe validar correctamente un email bien formado', () => {
        expect(isValidEmail('usuario@dominio.com')).toBe(true);
        expect(isValidEmail('usuario_invalido.com')).toBe(false);
    });

    test('Debe validar que la contraseña tenga 6 o más caracteres', () => {
        expect(isValidPassword('123456')).toBe(true);
        expect(isValidPassword('12345')).toBe(false);
    });
});