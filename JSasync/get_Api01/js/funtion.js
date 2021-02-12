//compilamos con node.js

var a = 12;
var b = 13;

console.log(a+b);


//alert("Adios!!!!");


function getPosts(success, error) {
    var req = new XMLHttpRequest();
        req.open('GET', 'https://api.chucknorris.io/jokes/random');
    
        req.onload = function() {
          if (req.status == 200) {
            success(JSON.parse(req.response));
          }
          else {
            error();
          }
        };

        req.send();
    }
    /*
    getPosts(
        function(r) {
            console.log(r)
        },
        function(r) {
            console.log('Ocurrió un error')
        },
    )*/

    //console.log(r.value);

/*
    //Promise

    function getPosts() {
        return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
            req.open('GET', 'https://api.chucknorris.io/jokes/random');
    
            req.onload = function() {
              if (req.status == 200) {
                resolve(JSON.parse(req.response));
              }
              else {
                reject();
              }
            };
    
            req.send();
        })
    }
    
    getPosts().then(r =>{
        console.log(r);
      }).catch(() => {
        console.log('Algo salió mal');
      });*/