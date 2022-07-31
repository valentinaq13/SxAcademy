
//1. Dado el siguiente objeto
let carrito = {
    precioTotal: 10,
    productos: [
        {
            nombre: "Fideos",
            precio: 5,
            unidades: 2,
            categorias: "alimentos"
        }
    ],
}
//y el siguiente listado de productos que existen en el supermercado (con sus respectivas precios y categorias)
const productosDelSuper = [
    { nombre: "Queso", precio: 10, categoria: 'lacteos' },
    { nombre: "Gaseosa", precio: 5, categoria: 'bebidas' },
    { nombre: "Cerveza", precio: 20, categoria: 'bebidas' },
    { nombre: "Arroz", precio: 7, categoria: 'alimentos' },
    { nombre: "Fideos", precio: 5, categoria: 'alimentos' },
    { nombre: "Lavandina", precio: 9, categoria: 'limpieza' },
    { nombre: "Shampoo", precio: 3, categoria: 'higiene' },
    { nombre: "Jabon", precio: 4, categoria: 'higiene' },
]

// Escribir una funcion agregarProducto teniendo en cuenta que:
// - El producto agregado deberá incluir la categoria y el precio sacados del listado "productosDelSuper".
// - Al agregar un producto, validar que sea un producto vendido por el supermecado
// - Si agrego un producto que ya existe en el carrito, en lugar de agregarlo 
// deberia incrementar la cantidad del existente
// - Se debe actualizar el precioTotal del carrito, teniendo en cuenta el precio 
// y cantidad de unidades del producto
// Ejemplo de la funcion esperada.
function agregarProducto(nombre, unidades) {
    
    const productSuper = productosDelSuper.find(el => el.nombre === nombre);
    if (productSuper === undefined) {
        return "No hay disponibilidad del producto ingresado"
    } else {
        const productCarrito = carrito.productos.find(el => el.nombre === productSuper.nombre)
        if (productCarrito === undefined) {
            carrito.productos.push({ nombre: productSuper.nombre, precio: productSuper.precio, unidades, categorias: productSuper.categoria})
            
        } else {
            productCarrito.unidades += unidades
            carrito.precioTotal += productCarrito.unidades * productCarrito.precio
        }
    };
   
}
// console.log(carrito)
// console.log(agregarProducto("Shampoo", 3))
// console.log(carrito)
// Ejemplo
// agregarProducto('Agua', 2);
// El carrito deberia verse asi
carrito = {
    precioTotal: 10,
    productos: [
        {
            nombre: 'Agua',
            precio: 5,
            unidades: 2,
            categorias: 'bebidas'
        }
    ],
    
}

// Si agrego otra Agua
// agregarProducto('Agua', 1);
// El carrito deberia verse asi
carrito = {
    precioTotal: 15,
    productos: [
        {
            nombre: 'Agua',
            precio: 5,
            unidades: 3,
            categorias: 'bebidas'
        },
        {
            nombre: 'Fideos',
            precio: 5,
            unidades: 3,
            categorias: 'alimentos'
        }
    ]
}


//2. Desarrollar la siguiente funcion
function eliminarProduct(nombre) {
    
        let elementoAeliminar = carrito.productos.find(el => el.nombre === nombre)
        if(elementoAeliminar){
        let nuevo = carrito.productos.filter(el => el.nombre !== elementoAeliminar.nombre)
        carrito.productos = nuevo
        carrito.precioTotal -= elementoAeliminar.precio * elementoAeliminar.unidades
        return "producto eliminado correctamente !"
        }else{console.log("Producto inexistente en el carrito") }
   
    
};
// console.log(carrito)
// console.log(eliminarProduct("Agua"))
// console.log(carrito)

// - Teniendo en cuenta que si intentan eliminar un producto que no existe, deberá lanzar un error.

// 3. Escribir una funcion que devuelva un listado con todas las categorias (sin repeticiones) 
// de los productos del carrito
function carritoCategories() {
    let allCategories = [];
    const array = carrito.productos
    for (let i = 0; i < array.length; i++) {
        if (!allCategories.includes(array[i].categorias)) {
            allCategories.push(array[i].categorias)
            
        }
        //console.log(array[i])
    };
    return allCategories
};
//console.log(carrito.productos)
console.log(carritoCategories())