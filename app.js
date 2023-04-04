console.log(empresas);
selectEmpresa =  document.querySelector('#empresa');

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
