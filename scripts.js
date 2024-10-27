// Seleccionar los elementos del carrusel
const amigos = document.querySelectorAll('.amigo');
const modal = document.getElementById('info-modal');
const modalImg = document.getElementById('modal-img');
const modalInfo = document.getElementById('modal-info');
const closeModal = document.querySelector('.close');

// Mostrar información al hacer clic en una imagen
amigos.forEach(amigo => {
    amigo.addEventListener('click', () => {
        const imgSrc = amigo.querySelector('img').src;
        const infoText = amigo.getAttribute('data-info');
        
        modal.style.display = 'flex';
        modalImg.src = imgSrc;
        modalInfo.textContent = infoText;
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
