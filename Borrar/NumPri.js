var arrayOfNumbers = [1,2,3,4,5];
var arreglo = [];



var arrayOfStrings = ['amore','odio','amados']
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:

  // for(var i = 0; i > arrayOfStrings.length; i++){
  //   if(arrayOfStrings[0][i] === 'a'){
  //     arreglo.push(arrayOfStrings[i]);
  //     console.log('Estas son las palabras con a: ' + arreglo);
  //   }
  // }
  

  arrayOfStrings.forEach(element => {if(element[0] === 'a'){arreglo.push(element)}})
  console.log(arreglo)