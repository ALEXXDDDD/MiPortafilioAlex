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

document.querySelectorAll('.pag-proyectos').forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.style.transform = 'scale(1.1)';
        div.style.transition = 'transform 0.2s';
    });
    div.addEventListener('mouseleave', () => {
        div.style.transform = 'scale(1)';
    });
});

const offcanvas = document.getElementById("myOffcanvas");
const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");

  // Abrir
  btnOpen.addEventListener("click", () => {
    offcanvas.classList.add("my-show");
    offcanvas.style.visibility = "visible";
  });

  // Cerrar
  btnClose.addEventListener("click", () => {
    offcanvas.classList.remove("my-show");
    offcanvas.style.visibility = "hidden";
  });
//DESARROLLO BACKEND
document.addEventListener("DOMContentLoaded", () => {
  const btnOpenBackend = document.getElementById("btnOpenBackend");
  const btnCloseBackend = document.getElementById("btnCloseBackend");
  const overlay = document.getElementById("formBackendOverlay");
  const formBackend = document.getElementById("formBackend");

  // Abrir modal
  btnOpenBackend.addEventListener("click", () => {
    overlay.classList.add("active");
    formBackend.classList.add("active");
  });

  // Cerrar con botón
  btnCloseBackend.addEventListener("click", () => {
    overlay.classList.remove("active");
    formBackend.classList.remove("active");
  });

  // Cerrar haciendo clic fuera del modal
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
      formBackend.classList.remove("active");
    }
  });
});
  
