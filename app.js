
const selectEmpresa =  document.querySelector('#empresa');
const accion = document.getElementById("accion");
const ingresarBtn = document.getElementById("ingresar");

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

ingresarBtn.addEventListener("click", function(event) {
    event.preventDefault();

    if (accion.value == "consultor") {
        window.location.href = "./panelConsultor.html";
    } if(accion.value == "administrar"){
        window.location.href = "./panelAmin.html";
    }

   
  });
