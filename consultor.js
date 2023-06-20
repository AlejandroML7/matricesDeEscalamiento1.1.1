const main = document.querySelector('.contenedor_tablas');
const contenedorTiposMatriz = document.querySelector('#contenedor_tipos-matriz');
const contenedorMatriz = document.querySelector('#contenedor_matriz');
const ulListaTiposDeMatrices = document.querySelector('#lista_tipos-matrices');
const tiposMatrices = [];
const url = 'datosClientes.json';
let textos = [];


// Asignar los distintos roles
let cliente = true;
let operadorClaro = false;
let admin = true;



// al cargar el documento 

document.addEventListener('DOMContentLoaded',()=>{
    if(cliente  && admin || admin){
      mostarJSON();
      funcionAdmin();
    }else if(cliente){
      mostarJSON();
    } else if(operadorClaro) {
      console.log('ud es operador claro');
    }
})


                

                
function funcionAdmin(){
  console.log('ingreso como administrador');
  const sectionContactos = document.createElement('section');
  sectionContactos.id = 'section-contactos';
  document.body.appendChild(sectionContactos);
  let datosJson;
//basic autentications
  fetch(url)
    .then(res => res.json())
    .then((salida) => {
      datosJson = salida;
      
      const contactos = datosJson.content;//crea un array con todos los contactos
      console.log(contactos);
      //creamos un aside donde va un boton que lista todos los contactos y la lista de contactos
      const aside = document.createElement('aside');
      aside.id = "selct_lista-contactos";

      //creamos el boton 
      const btnContactos = document.createElement('button');
      btnContactos.type = 'text';
      btnContactos.id = "lista_contactos";
      btnContactos.textContent = 'Contactos';
      const btnSpan = document.createElement('span');
      btnSpan.classList.add('material-symbols-outlined');
      btnSpan.textContent = 'list';
      btnContactos.appendChild(btnSpan);
      aside.appendChild(btnContactos);

      //creamos el boton para cerrar la lista de contactos
      const btnCerrar = document.createElement('button');
      btnCerrar.id = "lista_contactos-cerrar"
      btnCerrar.textContent = 'X';

      
        
        
        
        

      //div para contener los contactos en una lista 
      const divListacontactos = document.createElement('div');
      divListacontactos.id = 'contenedor_contactos';
      
      // funcion para mostrar la lista de contactos
      btnContactos.addEventListener('click',(e)=>{
        e.preventDefault();
        while (divListacontactos.firstChild) {
          divListacontactos.removeChild(divListacontactos.firstChild);
        }
        

        btnContactos.remove();
        aside.appendChild(btnCerrar);

        
        
        
        // ul para contener cada li con un contacto
        const ul = document.createElement('ul');
        divListacontactos.appendChild(ul);
        aside.appendChild(divListacontactos);
        

        //recorrer la lista de contactos y mostrarlos en pantalla
        contactos.forEach(contacto =>{
          const nombre = contacto.Contact.FullName;
          const id = contacto.Contact.EmployeeUser;
          const li = document.createElement('li');
          li.innerHTML = `${nombre}  `;
          ul.appendChild(li);
          
        });

        //creamos el contenedor de la información del contacto seleccionado
        const divContactoSeleccionado = document.createElement('div');
        divContactoSeleccionado.classList.add('div-contactos', 'oculto');
        sectionContactos.appendChild(divContactoSeleccionado);


        ul.addEventListener('click',(e)=>{

          
          //limpiar el HTML
          while (divContactoSeleccionado.firstChild) {
            divContactoSeleccionado.removeChild(divContactoSeleccionado.firstChild);
          }
          divContactoSeleccionado.classList.remove('oculto');
          divContactoSeleccionado.style.display = 'flex'
          
          //filtramos del objeto con los contactos el contacto seleccionado
          const nombreSeleccionado = e.target.textContent.trim();
          const contactoSeleccionado = contactos.find(contacto => contacto.Contact.FullName === nombreSeleccionado);
          while (divContactoSeleccionado.firstChild) {
            divContactoSeleccionado.removeChild(divContactoSeleccionado.firstChild);
          }
          if (contactoSeleccionado) {
          
          const contenidoDiv = `<h2>${contactoSeleccionado.Contact.FullName}</h2>
                                <p>ID: ${contactoSeleccionado.Contact.EmployeeUser}</p>
                                <p>Active: ${contactoSeleccionado.Contact.Active}</p>
                                <p>Company: ${contactoSeleccionado.Contact.Company}</p>
                                <p>ContactName: ${contactoSeleccionado.Contact.ContactName}</p>
                                <p>Department: ${contactoSeleccionado.Contact.Department}</p>
                                <p>DeptName: ${contactoSeleccionado.Contact.DeptName}</p>
                                <p>Email: ${contactoSeleccionado.Contact.Email}</p>
                                <p>IDCompany: ${contactoSeleccionado.Contact.IDCompany}</p>
                                `
                               /* <div id="contenedor_confg-matriz">
                                <h3>Matriz:</h3>
                                <p>${contactoSeleccionado.Contact.Matriz}</p> 
                                <span class="material-symbols-outlined" id="btnEditMatriz">
                                edit_note
                                </span>
                                </div>
                                <h3>Disponible:</h3>
                                <div id="contenedor_confg-disponible">
                                <select name="disponible">
                                <option value=${contactoSeleccionado.Contact.MatrizDispo}>${contactoSeleccionado.Contact.MatrizDispo}</option>
                                <option value="si">si</option>
                                <option value="no">no</option>
                                </select>
                                 </div>
                                ;*/
    
                  // Asigna el contenido al div del contacto seleccionado
                  divContactoSeleccionado.classList.add('divcontacto');
                  
                  divContactoSeleccionado.innerHTML = contenidoDiv;

                  const contenedorConfigMatriz = document.createElement('div');
                  contenedorConfigMatriz.id = 'contenedor_confg-matriz';
                  const tiuloMatriz = document.createElement('h3');
                  tiuloMatriz.textContent = 'Matriz:';
                  const pMatriz = document.createElement('p');
                  pMatriz.textContent = contactoSeleccionado.Contact.Matriz;
                  const btnEdit = document.createElement('span');
                  btnEdit.classList.add('material-symbols-outlined');
                  btnEdit.id = 'btnEditMatriz';
                  btnEdit.textContent = 'edit_note';
                  const contenedorConfigDispo = document.createElement('div');
                  contenedorConfigDispo.id = 'contenedor_matriz-disponible';
                  const dispTitle = document.createElement('h4');
                  dispTitle.textContent = 'disponible:';
                  const disp = document.createElement('p');
                  disp.id = 'disponible-cambiar';
                  disp.textContent =contactoSeleccionado.Contact.MatrizDispo;
                  const btnEditDisp = document.createElement('span');
                  btnEditDisp.classList.add('material-symbols-outlined');
                  btnEditDisp.id = 'btnEditDispMatriz';
                  btnEditDisp.textContent = 'edit_note';
                  contenedorConfigMatriz.appendChild(tiuloMatriz);
                  contenedorConfigMatriz.appendChild(pMatriz);
                  contenedorConfigMatriz.appendChild(btnEdit);
                  contenedorConfigDispo.appendChild(dispTitle);
                  contenedorConfigDispo.appendChild(disp);
                  contenedorConfigDispo.appendChild(btnEditDisp);

                  
                  divContactoSeleccionado.appendChild(contenedorConfigMatriz);
                  divContactoSeleccionado.appendChild(contenedorConfigDispo);

                  btnEdit.addEventListener('click',(e)=>{
                    pMatriz.remove();
                  })

                  
                  btnCerrar.addEventListener('click',(e)=>{
                    divContactoSeleccionado.remove();
                  })
                  
          }
        });
        
        
      })

      // funcion para cerrar la lista de contactos
      btnCerrar.addEventListener('click',(e)=>{
        e.preventDefault();
        btnCerrar.remove();
        aside.appendChild(btnContactos);
        divListacontactos.remove();
        
      })
      
      //se agrega el aside dentro del main
      sectionContactos.appendChild(aside);
      
      

      
    })
}



// llamar a la funcion para mostrar los datos haciendo el filtro antes



function mostarJSON() {

    //petición de los datos al API
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',url, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);
            
            
            //se crea un arreglo con todos los contactos
            const contactos = datos.content;
            
            console.log(contactos);
            
              // se recorre el array de los contactos para obtener cuantas variantes de matriz tiene el cliente
              let valoresMatriz = new Set();
              contactos.forEach(objeto => {
                let tipoMatriz = objeto.Contact.Matriz;

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
                const objetosFiltrados = contactos.filter(contacto => contacto.Contact.Matriz === txt);
                
                const tituloMatriz = document.querySelector('#titulo-matriz');
                tituloMatriz.textContent= `Matriz: ${txt}`;
                
                objetosFiltrados.forEach(objeto => {
                  const contacto = objeto.Contact;
                  const valores = Object.values(contacto);
                  const tr = document.createElement('tr');
                  
                  valores.forEach(valor => {
                    const td = document.createElement('td');
                    td.innerText = valor;
                    tr.appendChild(td);
                  });
                  tBody.appendChild(tr);
                });
                
                tabla.classList.remove('oculto');
                

                
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

/*
// Obtén el nuevo valor de "Matriz" del input
const nuevoMatriz = document.getElementById('inputMatriz').value;

// Objeto de contacto a actualizar
const contactoActualizar = {
  "FullName": "usuario bacolombia", // Nombre del contacto
  "Matriz": nuevoMatriz // Nuevo valor de "Matriz" obtenido del input
};

// Realiza la solicitud PUT para actualizar el objeto JSON en archivo.json
fetch('ruta/a/tu/archivo.json', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(contactoActualizar)
})
.then(response => response.json())
.then(data => {
  console.log('Contacto actualizado:', data);
})
.catch(error => {
  console.error('Error al actualizar el contacto:', error);
});

 // Obtén el nuevo valor de "MatrizDispo" del select
const nuevoMatrizDispo = document.getElementById('selectMatrizDispo').value;

// Convierte el valor en true o false
const matrizDispo = nuevoMatrizDispo === 'si' ? true : false;

// Objeto de contacto a actualizar
const contactoActualizar = {
  "FullName": "usuario bacolombia", // Nombre del contacto
  "MatrizDispo": matrizDispo // Nuevo valor de "MatrizDispo" convertido en true o false
};

// Realiza la solicitud PUT para actualizar el objeto JSON en archivo.json
fetch('ruta/a/tu/archivo.json', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(contactoActualizar)
})
.then(response => response.json())
.then(data => {
  console.log('Contacto actualizado:', data);
})
.catch(error => {
  console.error('Error al actualizar el contacto:', error);
});
*/







