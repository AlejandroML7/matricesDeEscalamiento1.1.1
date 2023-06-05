
const selectEmpresa =  document.querySelector('#empresa');
const accion = document.getElementById("accion");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ingresarBtn = document.getElementById("ingresar");
const form = document.querySelector('#form');






form.addEventListener("submit", function(event) {
    event.preventDefault();
    window.location.href = "./panelConsultor.html";

  });
  









