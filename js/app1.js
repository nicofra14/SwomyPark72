// Funciones para mostrar y ocultar el formulario emergente
const showPopupBtn = document.querySelector("#show-btn");
const popup = document.querySelector(".popup");
const closePopupBtn = document.querySelector(".popup .close-btn");

function showPopup() {
  popup.classList.add("active");
}

function closePopup() {
  popup.classList.remove("active");
}

showPopupBtn.addEventListener("click", showPopup);
closePopupBtn.addEventListener("click", closePopup);

// Actualizar número de teléfono con el indicativo seleccionado
document.addEventListener("DOMContentLoaded", function () {
  const indicativoSelect = document.getElementById("select_indicativo");
  const telefonoInput = document.getElementById("telefono");

  indicativoSelect.addEventListener("change", function () {
    const selectedIndicativo = indicativoSelect.value;
    const phoneNumber = telefonoInput.value;

    telefonoInput.value = selectedIndicativo + phoneNumber;
  });
});

// Validación de formulario
function validateForm() {
  const emailInput = document.getElementById("Email");
  const telefonoInput = document.getElementById("telefono");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefonoPattern = /^[0-9]+$/;

  if (!emailPattern.test(emailInput.value)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false;
  }

  if (!telefonoPattern.test(telefonoInput.value)) {
    alert("Por favor, ingresa un número de teléfono válido.");
    return false;
  }

  return true;
}

// Menú de navegación activo al hacer scroll
 //  const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
 //  const observer = new IntersectionObserver(
 //   (entries) => {//
 //   entries.forEach((entry) => {
 //     const id = entry.target.getAttribute("id");
 //     const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

//      if (entry.isIntersecting) {
  //      document.querySelector(".menu a.selected").classList.remove("selected");
   //     menuLink.classList.add("selected");
   //   }
   // });
 //    },
 //   { rootMargin: "-30% 0px -70% 0px" }
 //  );

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

// Cerrar el modal
document.querySelector("#btn-close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", closePopup);

