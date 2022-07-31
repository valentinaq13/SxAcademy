//1. Escribir un programa que, dada una edad, imprima en consola si la persona es mayor de 18 años y puede conducir.

function mayorDeEdad(number){
    if(number >= 18){console.log("Persona autorizada para conducir")}
    else{console.log("Persona menor de 18 años, no autorizada a conducir")}
};

//2. Escribir un programa que, dada una nota (número), imprima en consola la calificación según la nota:
function numero (number){
    if(number >=0 && number <=3){console.log("Muy deficiente")}
    else if (number >=3 && number <5){console.log("Insuficiente")}
    else if(number >=5 && number <6){console.log("Suficiente")}
    else if(number >=6 && number <7){console.log("Bien")}
    else if(number >=7 && number <9){console.log("Notable")}
    else if(number >=9 && number <10){console.log("Sobresaliente")}
    else {console.log("ingrese un numero del 0 a 10")} //es mejor contemplar un caso distinto al esperado.
};
//3. Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
for (let i = 1; i <= 6; i++) {
    let acumulador= "";
   for (let j = 1; j <= i; j++) {
    acumulador += i
   }
    console.log(acumulador)
};
//4. Realizar un script que escriba una pirámide del 1 al 6 de la siguiente forma:
let acumulator = "";
for (let i = 1; i <= 6; i++) {
    acumulator = acumulator + i;
    console.log(acumulator)
   
};