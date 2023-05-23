let eventos = [];
let listaTurnos = []; //carga la infor de turnos

const nombreCliente = document.getElementById('nombreCompleto');
const turno = document.getElementById('turno');
const botonReservas = document.getElementById('reservas');
const eventosContenedor= document.querySelector('#eventosContenedor');


const json = load();


document.querySelector('form').addEventListener('submit', e=>{
    e.preventDefault();
    agregarEvento();
    
});

function agregarEvento(){
    if(nombreCliente.value == "" || turno.value == ""){
        return;
    }
    if(diferenciaFechas(turno.value) <0){
        return;
    }

    const nuevoEvento  = {
        id: (Math.random() * 100).toString(36).slice(3),
        nombre: nombreCliente.value,
        turno: turno.value,
    }

    eventos.unshift(nuevoEvento);

    nombreCliente.value = "";

    crearEvento();
}

function diferenciaFechas(d){
    const diaDelTurno = new Date(d);
    const hoy = new Date();
    const diferencia = diaDelTurno.getTime() - hoy.getTime();
    const dias= Math.ceil(diferencia/(1000 * 3600 * 24)); //porque un día tiene 24h, c/hora tiene 3600s y c/segundo 1000 milisegundos
    return dias;
}


function crearEvento(){
    const eventosHTML = eventos.map(event =>{
        return 
        '<div class="event"><div class="dias"><span class="numero-dias">${diferenciaFechas(event.turno)}</span><span class="texto-dias">Días</span></div><div class="event-name">${event.nombre}</div><div class="event-date">${event.turno}</div><div class="accion"></div> <button class="eliminar" data-id="${event.id}">Eliminar</button></div></div>';
    })
    eventosContenedor.innerHTML = eventosHTML.join("")
}







function guardar(data){
    localStorage.setItem('items', data);
}

function load(){
    return localStorage.getItem('items');
}

//let nombreCliente = document.getElementById("nombreCompleto").value
  
/*let nombreCompleto = document.getElementById('nombreCompleto');
let telefono = document.getElementById('telefono');
let vehiculo = document.getElementById('vehiculo');

let listaClientes = [];

function Cliente(nombreCompleto, telefono, vehiculo){

    this.nombreCompleto = nombreCompleto.toUpperCase(),
    this.telefono= parseInt(telefono),
    this.vehiculo = vehiculo
}
*/







/*let boton = document.getElementById("agregar")
boton.addEventListener("click", function(){
    console.log("Hiciste click en el botón.")
    alert("Evento detectado. Mirá la consola")
})*/