const btnNo = document.querySelector("#btn-random");
const customAlert = document.querySelector("#custom-alert");
const closeAlert = document.querySelector("#close-alert");

btnNo.addEventListener("click", function () {
    customAlert.style.display = "block";  // Mostrar la alerta personalizada
});

closeAlert.addEventListener("click", function () {
    customAlert.style.display = "none";  // Ocultar la alerta cuando se cierre
});
