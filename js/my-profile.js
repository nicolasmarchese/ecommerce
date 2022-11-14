  
  function mail(){
  
      let mostrarMail = localStorage.getItem('usr');
  
      document.getElementById('mail').value = JSON.parse(mostrarMail);

  }
  

  function campos(){
  
  let datos = {}
  
   datos.nombre = document.getElementById("name").value;
   datos.apellido = document.getElementById("ape").value;
   datos.telefono = document.getElementById("telefono").value;
   datos.mail = document.getElementById('mail').value;
   datos.segundonombre = document.getElementById('segundonomb').value;
   datos.segundoapellido = document.getElementById('segundoape').value;

   
  
  if (datos.nombre !== "" && datos.apellido !== "" && datos.telephone !== ""){
  
      localStorage.setItem('datos', JSON.stringify(datos));
                          
  }
 
  }

  function datosGuardados() { 
    
    let guardadoExitoso = document.getElementById('exito');
  
    guardadoExitoso.innerHTML = `
       
        <div class="alert alert-success alert-dismissible" role="alert">
         <div class="text-center">¡Datos guardados correctamente!</div>
         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        
        `
  }

  function traer(){

    if (!localStorage.getItem('datos')){

       return "";
       
    }else{

    let rellenar = localStorage.getItem('datos');

    document.getElementById('name').value = JSON.parse(rellenar).nombre;
    document.getElementById('segundonomb').value = JSON.parse(rellenar).segundonombre;
    document.getElementById('ape').value = JSON.parse(rellenar).apellido;
    document.getElementById('segundoape').value = JSON.parse(rellenar).segundoapellido;
    document.getElementById('telefono').value = JSON.parse(rellenar).telefono;
    document.getElementById('mail').value = JSON.parse(rellenar).mail;

    }

  }

   
      
   document.addEventListener('DOMContentLoaded', function(){
    
      mail();
      traer();
      
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
                   datosGuardados()
                 }
                 form.classList.add("was-validated");
               },false)
           })
          
       })()
      
     document.getElementById('guardar').addEventListener('click', function(e){   
      
              campos();  
                 
          })
        });
  
  