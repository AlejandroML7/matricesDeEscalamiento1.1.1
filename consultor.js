const titulo = document.querySelector('#titulo');
const diurno = document.querySelector('#t-diurno');
const tablaDia = document.querySelector('#diurno');
const tablaNoche = document.querySelector('#nocturno');
const contenedorTiposMatriz = document.querySelector('#contenedor_tipos-matriz');
const ulListaTiposDeMatrices = document.querySelector('#lista_tipos-matrices');
const tiposMatrices = [];

// llamar a la funcion para mostrar los datos haciendo el filtro antes
mostarJSON();


function mostarJSON() {

    //petición de los datos al API
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','datosClientes.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            
            //se crea un arreglo con todos los contactos
            const contactos = datos.contactos;
            
            
              // se recorre el array de los contactos para obtener cuantas variantes de matriz tiene el cliente
              let valoresMatriz = new Set();
              contactos.forEach(objeto => {
                let tipoMatriz = objeto.matriz;
                if (tipoMatriz) {
                  valoresMatriz.add(tipoMatriz);
                }
              });
              
              let nuevoArray = [...valoresMatriz];
              
             
              

              llenarContenedorTiposMatriz(nuevoArray);
            
        }
    }
}


function llenarContenedorTiposMatriz(arr){
    arr.forEach(obj =>{
        const li = document.createElement('li');
        li.textContent = obj;
        ulListaTiposDeMatrices.appendChild(li);
        })
}



/**   function crearTablaDesdeObjeto(Obj) {
                const encabezados = Object.keys(Obj);
                const valores = Object.values(Obj);
                
                
                encabezados.forEach(encabezado => {
                  const th = document.createElement('th');
                  th.innerText = encabezado;
                  trHead.appendChild(th);
                });
            
            
                valores.forEach(valor => {
                    const td = document.createElement('td');
                    td.innerText = valor;
                    trBody.appendChild(td);
                  });
            
                
            
              }*/


// eventlisteners

ulListaTiposDeMatrices.addEventListener('click', mostrarTabla);

//funciones

function mostrarTabla(e) {
    

    if (e.target.id === 't-diurno') {
        tablaNoche.classList.add('oculto');
        tablaDia.classList.remove('oculto');
        return
    } if (e.target.id === 't-nocturno') {
        tablaDia.classList.add('oculto');
        tablaNoche.classList.remove('oculto');
        return;
    } else {
        console.log('error');
    }

    
}
