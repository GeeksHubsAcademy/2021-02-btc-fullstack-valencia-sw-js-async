//var url = 'https://api.chucknorris.io/jokes/random';
//var response = await fetch(url);

//let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON

//console.log(commits[0].value);
fetch('https://jsonplaceholder.typicode.com/todos/1') // 1
.then(response => response.json()) // 2
.then(console.log); // 3
