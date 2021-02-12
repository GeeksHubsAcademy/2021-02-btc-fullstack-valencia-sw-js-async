
//seteamos valor del div
const muestra= document.getElementById("data");

//devuelve todos los campos del JSON 
fetch('https://api.chucknorris.io/jokes/random')
 .then(response => response.json())
 .then(random=>muestra.innerHTML=random.value)
 .then(random=>console.log(random));

//devuelve todos los campos del JSON 
fetch('https://api.chucknorris.io/jokes/categories')
 .then(response => response.json())
 .then(console.log);

//devuelve el valor de un campo del JSON
fetch('https://api.chucknorris.io/jokes/categories')
 .then(response => response.json())
 .then(categories=>console.log(categories[5]));


