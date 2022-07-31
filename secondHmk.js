Array1= ['rojo', 'azul', 'amarillo']
Array2= ['blanco', 'negro', 'rojo']

//1. Escribir una funcion que reciba un array de strings y devuelva un string concatenando todos sus valores
function joinStr(arr){
    let str= ""
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
        
    }
    return str
}
console.log(joinStr(Array1))

//2. Dados 2 array, devolver un array con todos los elementos que coinciden entre ellos
for (let i = 0; i < Array1.length; i++) {
  const item = [];
  for (let k = i; k < Array2.length; k++) {
    if(Array1[i] === Array2[k]){
      item.push(Array1[i])
    }
   
  }
  console.log(item)
};

//3. Dado el siguiente objeto
let carrito = {
    total: 10,
    productos: [
        {
            nombre: 'leche',
            precio: 2,
            unidades: 5
        }
    ]
}
//completar la siguiente funcion para que agregue un nuevo producto al carrito y actualice su total
function agregarProducto(nombre, precio, unidades) {
    // Completar aca...
    carrito.productos.push({nombre, precio, unidades})
    carrito.total += precio * unidades
    return carrito
}
console.log(agregarProducto("pan", 5, 2))
