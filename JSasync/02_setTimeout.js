
//Si array exist añade valor al array y luego ejecuta el callback
function addToArray (data, array, callback) {
      if (!array) {
        return callback(new Error('No existe el array', null));
      }
      setTimeout(function() { 
        array.push(data);
        callback(null, array);
      }, 5000)
    }
    

    //probamos la funcion callback    
    var array = [1,2,3];
    
    addToArray(4, array, function (err) {         //funcion callback
      if (err) return console.log(err.message);   // Error message
      console.log(array);  //imprime por consola nuevo array
    })
    // (5 seg de delay)-> [1, 2, 3, 4]