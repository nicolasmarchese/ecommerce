
document.addEventListener("DOMContentLoaded", function(){


    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
   
    
    let usuario = localStorage.getItem('item');
     
    let logeado = localStorage.getItem('usr');

    document.getElementById('usuario').innerHTML = logeado;

    if(usuario == null){
        location.href = "login.html";
    }
   
});

