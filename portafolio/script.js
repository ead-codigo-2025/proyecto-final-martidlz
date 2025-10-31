// Seleccionamos todas las imágenes de los botones
const botones = document.querySelectorAll('.boton-imagen img');

botones.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s';
  });
  
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});
