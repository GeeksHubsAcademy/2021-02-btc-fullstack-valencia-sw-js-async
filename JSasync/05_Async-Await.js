//Forma parte de la versión ES7 o ES2016

function addToArray (data, array) {
      const promise = new Promise(function (resolve, reject) {
        setTimeout(function() {
          array.push(data);
          resolve(array);
        }, 2000);
        
        if (!array) {
          reject(new Error('No existe un array'));
        }
      })
      
      return promise;
    }
    

    //probamos la funcion asincrona
    const array = [1, 2, 3];
    
    async function processData (data, array) {  //async 
      try {
        const result = await addToArray(data, array);  //await llamararemos a la función asíncrona con promesas
        console.log(result)
      } catch (err) {  //en caso de error
        return console.log(err.message);
      }
    }
    
    //llamamos a la funcion processData
    processData(4, array) // [1,2,3,4]

    processData(5, array) // [1,2,3,4,5]

    processData(6, array) // [1,2,3,4,5,6]