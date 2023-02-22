var arrayOfNumbers = [1,2,3,4,5];
var arreglo = [];
var string = 'soyHenry';

// Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var inicio = ''
   var final = ''
   for ( i = 0; i < string.length; i++ ){
     if (string[i].toUpperCase() === string[i]){
      inicio += string[i]
     }else{
      final += string[i]
     } 
   }
   console.log( inicio + final)
