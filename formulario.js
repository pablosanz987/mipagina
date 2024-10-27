// Selecciona las estrellas y añade los eventos de mouseover y clic
const estrellas = document.querySelectorAll('#estrellas span');

estrellas.forEach((estrella, index) => {
    // Agrega color al pasar el mouse
    estrella.addEventListener('mouseover', () => {
        estrellas.forEach((star, i) => {
            star.style.color = i <= index ? '#ffb400' : '#ccc';
        });
    });

    // Fija la calificación al hacer clic
    estrella.addEventListener('click', () => {
        estrellas.forEach((star, i) => {
            star.classList.toggle('selected', i <= index);
            star.style.color = i <= index ? '#ffb400' : '#ccc';
        });
    });
});

// Restablece el color de las estrellas cuando se sale de la fila
document.getElementById('estrellas').addEventListener('mouseleave', () => {
    estrellas.forEach(star => {
        star.style.color = star.classList.contains('selected') ? '#ffb400' : '#ccc';
    });
});
