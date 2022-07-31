let str = "hola como"


console.log(str.split("").reverse().join(""))


// // 2. Escribir una funcion que detecte la palabra mas larga dentro de un string
// // Ejemplo
// // palabraMasLarga('Hola como estan') --> 'estan'
// // palabraMasLarga('Fantasticamente bien') --> 'Fantasticamente'
// // palabraMasLarga('si hay empate retorno el primero') --> 'retorno'

function palabraMasLarga(palabra) {
    let str = palabra.split(" ")
    let resultado = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > resultado.length) {
            resultado = str[i]
        }
    }
    return resultado
}
//console.log(palabraMasLarga('Fantasticamente bien'))
// // 3. Escribir una funcion que cuente la cantidad de vocales que hay en un string
// // Ejemplo
// // cantidadVocales("Supercalifragilisticoespialidoso") -> 15
// // cantidadVocales("zzzzzz") -> 0
function cantidadVocales(str) {
    let counter = 0;
    let vocales = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        if (vocales.includes(str[i])) {
            counter += 1
        }

    }
    return counter;
}
console.log(cantidadVocales("Supercalifragilisticoespialidoso"))
//--------------------------------------------------------------------
// // 4. Escribir una funcion que identifique si un string es palindromo (se lee igual de izquierda a derecha, como de derecha a izquierda)
// // Ejemplo
// // esPalindromo('hola') --> false
// // esPalindromo('neuquen') --> true
// // esPalindromo('radar') --> true
// // esPalindromo('reconocer') --> true
// // esPalindromo('anita lava la tina') --> true
function esPalindromo(str) {
    let alReves = str.split("").reverse().join("")
    if (str === alReves) {
        return true
    }
    return false
}
//console.log(esPalindromo('hola'))
// -----------------------------------------
// CALLBACK
// ----------------------------------------
// // 1. Escribir las funciones para poder hacer lo siguiente
// // 
// // alMenos2([1, 2, 3, 4, 5], sonPositivos);    --> true
// // alMenos2([2, -4, 6], sonNegativos);         --> false
// // alMenos2([1, 2, 3, 4, 5], sonMayoresQue2);  --> true

function sonPositivos(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count += 1
        }
    }
    if (count >= 2) {
        return true
    }
    return false
};

function sonNegativos(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count += 1
        }
    }
    if (count >= 2) {
        return true
    }
    return false
};

function sonMayoresQue2(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 2) {
            count += 1
        }
    }
    if (count >= 2) {
        return true
    }
    return false
};

function alMenos2(arr, cb) {
    return cb(arr)
};

//console.log(alMenos2([2, -4, 6], sonNegativos))
// 2. Escribir la funcion agruparPor (agrupar) que agrupe elementos de un arreglo y determinado por una callback function.

// // Ejemplo
// // const arreglo = [
// //     {
// //       nombre: 'Franco',
// //       anoNacimiento: 1988,
// //       lugarNacimiento: 'Cordoba',
// //     },
// //     {
// //       nombre: 'Gaston',
// //       anoNacimiento: 1963,
// //       lugarNacimiento: 'Buenos Aires',
// //     },
// //     {
// //       nombre: 'Franco',
// //       anoNacimiento: 1980,
// //       lugarNacimiento: 'Cordoba',
// //     },
// //   ];
// // agruparPor(arreglo, x => x.nombre);

// // Deberia retornar
// // {
// //     Franco: [
// //       {
// //         nombre: 'Franco',
// //         anoNacimiento: 1988,
// //         lugarNacimiento: 'Cordoba',
// //       },
// //       {
// //         nombre: 'Franco',
// //         anoNacimiento: 1980,
// //         lugarNacimiento: 'Cordoba',
// //       }
// //     ],
// //     Gaston: [
// //       {
// //         nombre: 'Gaston',
// //         anoNacimiento: 1963,
// //         lugarNacimiento: 'Buenos Aires',
// //       }
// // Otro ejemplo

// // agruparPor(arreglo, x => esImpar(t.anoNacimiento));
// // deberia retornar
// // {
// //     false: [
// //       {
// //         nombre: 'Franco',
// //         anoNacimiento: 1988,
// //         lugarNacimiento: 'Cordoba',
// //       },
// //       {
// //         nombre: 'Franco',
// //         anoNacimiento: 1980,
// //         lugarNacimiento: 'Cordoba',
// //       }
// //     ],
// //     true: [
// //       {
// //         nombre: 'Gaston',
// //         anoNacimiento: 1963,
// //         lugarNacimiento: 'Buenos Aires',
// //       }
//
// // ]
// // }