//ejercicio 1
//buscar y eliminar mascota
console.warn('Mascotas');
const mascotas = ['perros','gatos','canarios','pez','serpiente']
console.log(mascotas);

console.warn('Mascota eliminada a eleccion');
const eliminarMascota =(elemento,matriz) =>{

const indice = matriz.indexOf(elemento);
matriz.splice(indice,1) // cantidad de elemento a eliminar

}
eliminarMascota('pez',mascotas); // elemento a eliminar
console.log(mascotas);


console.warn('Otras acciones');
//eliminar ultima mascota
const eliminarUltimaMascota =() =>{

   const indice = mascotas.indexOf();
   mascotas.pop(indice);

   return mascotas;
}
//agregar mascota
const agregarMascota =() =>{

mascotas.push('unicornio')

   return mascotas;
}

const contadorMascotas = () =>{

   const resultado = mascotas.filter(mascotas => mascotas.length = 'os');
return "en el arreglo hay " + resultado.length + " que terminan con os";
}

//Ejercicio 2

const trabajador = {
      nombre: 'Jhon Smith',
      cargo: 'QA',
      empresa: {
            ubicación: {
            comuna: 'Santiago',
            puesto: 'nº 24',
            },
            datos: {
            nombre: 'ACME',
            },
            clientes: ['Facebook', 'Google'],

      },
         gustos: ['comer', 'ver televisión', 'dormir'],
         hijos: null,  
   }

const desestructuracion1 = (trabajador) =>{

let {nombre,cargo,hijos, empresa:{datos:{nombre:nombreTrabajo}},gustos:[...gustitos]} = trabajador;
// if (hijos === null) {
//    console.log('no tiene hijos');
   
// }

return `El trabajador ${nombre} trabaja en ${nombreTrabajo} con cargo ${cargo} y le gusta ${gustitos}, ${hijos}`

}

const desestructuracion2 = (trabajador) =>{

   let {nombre,cargo,empresa:{ubicación:{comuna:nombreComuna,puesto:nPuesto}},empresa:{clientes:[...clients]}} = trabajador;

   return `El trabajador ${nombre} va a su trabajo en ${nombreComuna} es ${cargo} en el puesto ${nPuesto}, trabaja con ${clients} `
}

