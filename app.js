
const selectEmpresa =  document.querySelector('#empresa');
const accion = document.getElementById("accion");
const ingresarBtn = document.getElementById("ingresar");
const form = document.querySelector('#form');


llenarSelect(empresas);


function llenarSelect(arr) {
    arr.forEach(empresa => {
        const option = document.createElement('option')
        option.value = empresa.nombre;
        option.innerText = empresa.nombre;
        console.log(option.value);
        document.querySelector('#empresa').appendChild(option);
    });
    
}

console.log(selectEmpresa);
console.log(accion);
console.log(ingresarBtn);


form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (accion.value == "consultor") {
        window.location.href = "./panelConsultor.html";
        return;
    } 
    if(accion.value == "administrar"){
        window.location.href = "./panelAmin.html";
        return;
    }
  });
