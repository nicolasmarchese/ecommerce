function iniciarSesion(){

    let usuario = {}

    usuario.nombre = document.getElementById('name').value; 
    usuario.clave = document.getElementById('password').value;

    if (usuario.nombre != "" && usuario.clave != "") {
        usuario.email = usuario.nombre + '@gmail.com';
        usuario.pass = (usuario.clave).length > 6;
        localStorage.setItem ('item', JSON.stringify(usuario));
        location.href = "index.html";
    }

    else {
        alert ("Por favor, ingrese usuario y clave");
    }

}

document.addEventListener ("DOMContentLoaded", function(e){
    document.getElementById('ingresar').addEventListener ("click", function(e){
        iniciarSesion();
    });   
});