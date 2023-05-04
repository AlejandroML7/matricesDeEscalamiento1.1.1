
const selectEmpresa =  document.querySelector('#empresa');
const accion = document.getElementById("accion");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const ingresarBtn = document.getElementById("ingresar");
const form = document.querySelector('#form');
const titulo = document.querySelector('#titulo');

selectEmpresa.addEventListener('change', (e) => {
    e.preventDefault();
    datosIngreso.nombreEmpresa = e.target.value;
    console.log(datosIngreso);
})


accion.addEventListener('change', (e) => {
    e.preventDefault();
    datosIngreso.accion = e.target.value;
    console.log(datosIngreso);
})

email.addEventListener('input', (e) => {
    e.preventDefault();
    datosIngreso.correo = e.target.value;
    console.log(datosIngreso);
})


password.addEventListener('blur', (e) => {
    e.preventDefault();
    datosIngreso.password = e.target.value;
    console.log(datosIngreso);
})

const datosIngreso = {
    nombreEmpresa: '',
    accion: '',
    password: '',
    correo: ''
}


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





form.addEventListener("submit", function(event) {
    event.preventDefault();


    

    if (accion.value == "consultor") {
        window.location.href = "./panelConsultor.html";
        console.log(datosIngreso);
        return;
        
    } 
    if(accion.value == "administrar"){
        window.location.href = "./panelAmin.html";
        return;
    }
  });
  
