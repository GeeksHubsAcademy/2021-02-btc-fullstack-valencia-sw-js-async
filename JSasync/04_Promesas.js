
//Desde JavaScript (ES6 o ES2015) las Promesas ya son nativas, no necesitan librerias adicionales.

/*  la función addToArray crea un objeto Promise que recibe como parámetros 
    una función con las funciones resolve y reject.
            resolve ---> works
            reject  ---> don't works
    resolve la llamaremos cuando nuestra ejecución finalice correctamente.*/


function addToArray (data, array) {
      const promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
          array.push(data);
          resolve(array);   //Funciona
        }, 1000);
        
        if (!array) { //no existe ele array
          reject(new Error('No existe un array'));  //en caso de excepción
        }
      })
      
      return promise; //devuelve el resultado de la funcion promise
    }
    
    
    //probamos la funcion con promise 
    const array = [1, 2, 3];

    addToArray(4, array) // (1 seg de delay)-> [1, 2, 3, 4]
        .then(function () { return addToArray(5, array); }) // (1 seg de delay)-> [1, 2, 3, 4, 5]
        .then(function () { return addToArray(6, array); }) // (1 seg de delay)-> [1, 2, 3, 4, 5, 6]
        .then(function () { return addToArray(7, array); }) // (1 seg de delay)-> [1, 2, 3, 4, 5, 6, 7]
        .then(function () { return addToArray(8, array); }) // (1 seg de delay)-> [1, 2, 3, 4, 5, 6, 7, 8]
        .then(function () { console.log(array); })
       
