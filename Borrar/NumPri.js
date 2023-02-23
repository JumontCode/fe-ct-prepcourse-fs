var arrayOfNumbers = [1,2,3,4,5];
const arrayOfText = ['hsdsd','hj','hjk'];
var arreglo = ["You", "looking", "beautiful", "are" ];
var string = 'abcdefghiijhd';

//  for(var i = 0; i<arrayOfText.length; i++){

    // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   /*var text = arrayOfText.sort(function(a,b){
      if(a > b){return 1}
      if(a < b){return -1}
      return 0;
   })
   console.log(text) */
    
//    const enOrden = [].concat(arreglo);
//    enOrden.sort();
   
   
// console.log(enOrden)

   // var cadena = string.split(' ');
   // var palabra = cadena.map(i => i.split('').reverse().join(''));
   // var palabraInverso = palabra.join('');
   
   // console.log(palabraInverso);

   var arregloPadre = [];
   var palabraSeparada = string.split('');
   var palabraOrdenada = palabraSeparada.sort();
   for(var prop in palabraOrdenada){
      arregloPadre[palabraOrdenada[prop]] ?  arregloPadre[palabraOrdenada[prop]]++ : arregloPadre[palabraOrdenada[prop]]=1;
   }
   console.log(arregloPadre);