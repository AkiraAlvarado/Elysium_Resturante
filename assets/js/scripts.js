document.addEventListener('DOMContentLoaded', () => {
    const showMenu = (toggleID, navID) => {
      const toggle = document.getElementById(toggleID),
        nav = document.getElementById(navID);
  
      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
    }
  
    showMenu('main-menu__toggle', 'main-menu');
  });


  
  function centrarTextoImagen() {
    const contenido = document.querySelector('.comida');
    const imagen = document.querySelector('.main-local__foto-container');
  
    imagen.style.height = `${contenido.offsetHeight * 1.35}px`;
    console.log(`${contenido.offsetHeight}px`);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    centrarTextoImagen();

    // Añade un event listener para el evento 'resize'
    window.addEventListener('resize', centrarTextoImagen);
});


