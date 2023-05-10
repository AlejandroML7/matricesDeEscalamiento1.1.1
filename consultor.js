const titulo = document.querySelector('#titulo');
const diurno = document.querySelector('#t-diurno');
const tablaDia = document.querySelector('#diurno');
const tablaNoche = document.querySelector('#nocturno');
const contenedorTiposMatriz = document.querySelector('#contenedor_tipos-matriz');
const ulListaTiposDeMatrices = document.querySelector('#lista_tipos-matrices');




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