
//filtrar con resultadoFinal (156 tienen palta y lechuga juntos)

const getPaltaYlechuga = sandwichOrders.filter((sandwichOrder) => {
    const filter= 'lechuga';
    const filter2= 'palta';

    const resultadoFinal = ((sandwichOrder.ingredients.indexOf(filter)>=0)&&
    (sandwichOrder.ingredients.indexOf(filter2)>=0));

    return resultadoFinal;

});


//Función que me permita encontrar una orden
// a través del id yque me devuelva un string

const findId =(id)=>{
const resultado = sandwichOrders.find(orden => orden.id === id);
const {id:i,ordered:o,protein:p,bread:b} = resultado;

if (resultado){
return `La orden fue realizada el ${o} , la orden llevó ${p} y ${b}.`
}
return `No se encontró la orden con id ${i}`

};

//encontrar orders con pepinillos entre sus ingredients,
// debería devolver un true|false como respuesta.

const findOrderPepinillos = (id) => {
    const filterOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type].includes(filter))
    const result = filterOrdersByType({ type: 'ingredients',filter:'pepinillos'})
                    .find(sandwichOrder => sandwichOrder.id === id)

    if(result){
        return true
    }

    return false

}



//encontrar todas las orden que se hicieron en un día en específico
const filtrarOrdenes = (ordered) => {

const filterOrdersByType = ({ type = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type] === ordered)
        const filtroOr = filterOrdersByType({ type: 'ordered'}).length;
        
        
    return (`Se encontraron ${filtroOr} ordenes para la fecha ${ordered}`);

};

//devuelva las fechas de todas las ordenes que tuvieron 
//como proteina not burger y de ingredients cebolla caramelizada

const getSandwichOrdersDates = () => {

const mapOrdersByType = ({ type = '', filter = ''}) => sandwichOrders.filter(sandwichOrder => sandwichOrder[type].includes(filter))
    const sOrder = mapOrdersByType({ type: 'ingredients',filter:'cebolla caramelizada'}).map(sandwichOrder => sandwichOrder.ordered)
    const sOrder2 = mapOrdersByType({ type: 'protein',filter:'not burger'}).map(sandwichOrder => sandwichOrder.ordered)
return sOrder && sOrder2;
}
// los encuentra por separado pero no se como unir ambos filtros


