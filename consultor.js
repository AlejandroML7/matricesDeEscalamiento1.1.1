const titulo = document.querySelector('#titulo');
const diurno = document.querySelector('#t-diurno');

const contenedorTiposMatriz = document.querySelector('#contenedor_tipos-matriz');
const contenedorMatriz = document.querySelector('#contenedor_matriz');
const ulListaTiposDeMatrices = document.querySelector('#lista_tipos-matrices');
const tiposMatrices = [];
let textos = [];


// llamar a la funcion para mostrar los datos haciendo el filtro antes
mostarJSON();


function mostarJSON() {

    //petición de los datos al API
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://localhost/datosClientes.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            
            
            //se crea un arreglo con todos los contactos
            const contactos = datos.contactos;
            console.log(contactos);
            
              // se recorre el array de los contactos para obtener cuantas variantes de matriz tiene el cliente
              let valoresMatriz = new Set();
              contactos.forEach(objeto => {
                let tipoMatriz = objeto.Matriz;

                if (tipoMatriz) {
                  valoresMatriz.add(tipoMatriz);
                }
              });
              
              let nuevoArray = [...valoresMatriz];


              llenarContenedorTiposMatriz(nuevoArray);


              //ddEventListener para los li para llenar las tablas haciendo un filtro con el textContent
              ulListaTiposDeMatrices.addEventListener('click', (e)=>{

                

                const tabla = document.querySelector('#tabla');
                const txt = e.target.textContent;
                const tBody = document.querySelector('.tbody');
                
                while (tBody.firstChild) {
                  tBody.removeChild(tBody.firstChild);
                }
        

                //tBody.innerHTML = '';

                const objetosFiltrados = contactos.filter(contacto => contacto.Matriz === txt);
                const tituloMatriz = document.querySelector('#titulo-matriz');
                tituloMatriz.textContent= `Matriz: ${txt}`;
                objetosFiltrados.forEach(objeto => {
                  const valores = Object.values(objeto);
                  const tr = document.createElement('tr');
                  console.log(tr);
                  valores.forEach(valor => {
                    const td = document.createElement('td');
                    td.innerText = valor;
                    tr.appendChild(td);
                  });
                  tBody.appendChild(tr);
                });
                
                tabla.classList.remove('oculto');
                console.log(objetosFiltrados);

                
              } );
        }
    }
}




function llenarContenedorTiposMatriz(arr){

    let contador = 1; 

    arr.forEach(obj =>{
        const li = document.createElement('li');
        li.id = `item-${contador}`;
        li.textContent = obj;
        
        ulListaTiposDeMatrices.appendChild(li);
        contador++;
        })  
}



 








