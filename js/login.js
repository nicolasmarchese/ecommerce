function iniciarSesion(){

    let user = {}

    user.nombre = document.getElementById('name').value; 
    user.clave = document.getElementById('password').value;
   
    
    if (user.nombre !== "" && user.clave !== "") {
       
        localStorage.setItem ('item', JSON.stringify(user));
        localStorage.setItem ('usr', JSON.stringify(user.nombre));
        
        location.href = "index.html";
    }

}   


document.addEventListener ("DOMContentLoaded", function(e){
    (function () {   

        var forms = document.querySelectorAll(".needs-validation")
       
        Array.prototype.slice.call(forms)
       
        .forEach(function (form) {
       
             form.addEventListener("submit",function (e) {
               
                 if (!form.checkValidity()) {
                    e.preventDefault()
                    e.stopPropagation()
                 } else {
                    e.preventDefault() 
                 }
                 form.classList.add("was-validated")
               },false)
           })
          
       })()
    document.getElementById('ingresar').addEventListener ("click", function(e){
        iniciarSesion();
    });   
});