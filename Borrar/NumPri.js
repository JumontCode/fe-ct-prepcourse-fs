var arrayOfNumbers = [1,2,3,4,5];
var arreglo = [];
var string = 503;

// Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

    var numAString = string.toString();
    var esCapicua = numAString.split('').reverse().join('');
    if(esCapicua === numAString){console.log('Es capicua')}
    else{console.log('No es capicua')}
    
