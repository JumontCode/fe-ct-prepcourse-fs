/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:

   if(x == y){sonIguales = true}
   else {sonIguales = false}
   return sonIguales;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:

   if(str1.length == str2.length){tienenMismaLongitud = true}
   else{tienenMismaLongitud = false};
   return tienenMismaLongitud;
}

function menosQueNoventa(num) {
   // Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:

   if(num < 90){menosQueNoventa = true}
   else{menosQueNoventa = false}
   return menosQueNoventa;
}

function mayorQueCincuenta(num) {
   // Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:

   if(num > 50){mayorQueCincuenta = true}
   else{mayorQueCincuenta = false}
   return mayorQueCincuenta;
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:

   if(num % 2 == 0){esPar = true}
   else{esPar = false}
   return esPar;
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:

   if(num % 2 !== 0){esImpar = true}
   else{esImpar = false}
   return esImpar;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
