function iniciarSesion(){

    let user = {}

    user.nombre = document.getElementById('name').value; 
    user.clave = document.getElementById('password').value;

    if (user.nombre != "" && user.clave != "") {
        localStorage.setItem ('item', JSON.stringify(user));
        localStorage.setItem ('usr', JSON.stringify(user.nombre));
        location.href = "index.html";
    }

    else {
        alert ("Debe completar ambos campos");
    }

}   


document.addEventListener ("DOMContentLoaded", function(e){
    document.getElementById('ingresar').addEventListener ("click", function(e){
        iniciarSesion();
    });   
});