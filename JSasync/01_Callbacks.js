
//Si array exist añade valor al array y luego ejecuta el callback

function addToArray (data, array, callback) {
    if (!array) {
            callback(new Error('No existe el array'), null);
     } else {
        array.push(data);
        callback(null, array);
      }
    }


//probamos la funcion callback    
//var array = [1,2,3];

addToArray(4, array, function (err) { //funcion callback
    if (err) return console.log(err.message); // Error message
    console.log(array); //imprime por consola nuevo array
})

// [1, 2, 3, 4]