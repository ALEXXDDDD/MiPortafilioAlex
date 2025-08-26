// Selecciona todas las divs con la clase 'proyecto y les añade un efecto hover'
document.querySelectorAll('.proyecto').forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.transform = 'scale(1.1)';
        div.style.transition = 'transform 0.2s';
    });
    div.addEventListener('mouseleave', () => {
        div.style.transform = 'scale(1)';
    });
});
// Añade un mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
    alert('¡Bienvenido a mi portafolio!');
});
