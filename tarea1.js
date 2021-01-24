
//Tarea Esteban Perez

//tarea 1
function numero(num){

    if(num % 2 == 0){
        return('el numero es par')
    }else{
        return('el numero es impar')
    }
}

//tarea 2 

function devolverPosicion(n) {
  var str = "abcdefghijklmnñopqrstuvwxyz";
  var n = str.indexOf("f"); //cambiar letra aca
  return n;
}

//tarea 3

function calculaPrecioTotal(precio) {
  var impuestos = 1.19;
  var precioTotal = ( precio * impuestos );
  return precioTotal;
}

//tarea 4 // closure

var NuevoJugador = 'esteban' // cambiar jugador aca

function NuevoDado (){
  console.log(NuevoJugador)
  var x = Math.floor(Math.random()*6)
  return 'tiró un dado y salió ' + x
}

NuevoDado()

//tarea 5 // prototipos

function Persona(nombreCompleto,edad){
this.nombreCompleto = nombreCompleto;
this.edad = edad;

}

const guardarEnLocalStorage = new Persona ('Esteban Perez',29);
const guardarEnSessionStorage = new Persona ('Esteban Perez',29);

console.log(guardarEnLocalStorage,guardarEnSessionStorage);


