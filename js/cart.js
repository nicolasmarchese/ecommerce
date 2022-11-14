const dir = `https://japceibal.github.io/emercado-api/user_cart/25801.json`;  

let array = [];


function info(carrito){ 

    
    let infoCart = "";

    for(let carro of carrito) {  
            
        infoCart+=

        `<tr>
        <th scope="col"><img src="` + carro.image + `"alt="product image" style="width: 5rem;"></th>
        <td>` + carro.name +` </td>
        <td>` + carro.currency +  `<span id="numerito"> ` + carro.unitCost + `</span></td>
        <td><input onchange="multiplicacion()" style="width : 60px;" id="numerito2" type="number" min=1 value="` + carro.count + `"></td>
        <td style="width: 7rem;"><span><b>`+ carro.currency + " " + `<span/><span id="resultado">` + carro.unitCost +`</span></b></td>
      </tr>`
        
        document.getElementById("infoCarrito").innerHTML = infoCart; 
          
    }
}


function multiplicacion(){

    let pre = document.getElementById('numerito').innerHTML;          
    let cant = document.getElementById('numerito2').value;
    let parsePre = parseInt(pre);
    let parseCant = parseInt(cant);
    let res = parsePre*parseCant;
    document.getElementById('resultado').innerHTML = res;   
    
    costos();
}

function costos(){  

  let premium = document.getElementById('premium').checked;
  let express = document.getElementById('express').checked;
  let standard = document.getElementById('standard').checked;


  let pre = document.getElementById('numerito').innerHTML;          
  let cant = document.getElementById('numerito2').value;
  let parsePre = parseInt(pre);
  let parseCant = parseInt(cant);
  let res = parsePre*parseCant;

  let total = 0;
  let envio = 0;

  if(premium){
    envio = res * 0.15; 
  }else if(express){
    envio = res * 0.07;
  }else if(standard){
    envio = res * 0.05;
  }

  total = envio + res;

  document.getElementById('comissionText').innerHTML = "USD " + envio.toFixed(0);
  document.getElementById('totalCostText').innerHTML = "USD " + total;
  document.getElementById('productCostText').innerHTML = "USD " + res;

}

function deshabilitar(){  

  let tarjeta = document.getElementById('tarjeta').checked;
  let numeroTarjeta = document.getElementById('numeroTarj');
  let codigo = document.getElementById('codigo');
  let vencimiento = document.getElementById('venc');
  let transferencia = document.getElementById('transf').checked;
  let numeroCuenta = document.getElementById('cuenta');

  if(tarjeta){
    numeroCuenta.disabled = true;
    numeroTarjeta.disabled = false;
    codigo.disabled = false;
    vencimiento.disabled = false;

    document.getElementById('seleccion').innerHTML = `Tarjeta de crédito`;

  }else if(transferencia){
    numeroCuenta.disabled = false;
    numeroTarjeta.disabled = true;
    codigo.disabled = true;
    vencimiento.disabled = true;

    document.getElementById('seleccion').innerHTML = `Transferencia bancaria`;
  }
  
}

 function alertaModal() {  

   let tarj = document.getElementById('tarjeta').checked;
   let trans = document.getElementById('transf').checked;
   let alerta = document.getElementById('alerta');

   if (!tarj && !trans) {
     alerta.classList.add("is-invalid");
   } else {
     alerta.classList.remove("is-invalid");
   }
 }



function compraFinalizada() {  

  let compraExitosa = document.getElementById('exito');

  compraExitosa.innerHTML = `
     
      <div class="alert alert-success alert-dismissible" role="alert">
       <div class="text-center">¡Has comprado con éxito!</div>
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      
      `
}


document.addEventListener("DOMContentLoaded", function(e){

  (function () {   

    var forms = document.querySelectorAll(".needs-validation")
   
    Array.prototype.slice.call(forms)
   
    .forEach(function (form) {
   
         form.addEventListener("submit",function (e) {
             alertaModal();
   
             if (!form.checkValidity()) {
               e.preventDefault()
               e.stopPropagation()
             } else {
               e.preventDefault()
               compraFinalizada()
             }
             form.classList.add("was-validated");
           },false)
       })
   })()
    
    getJSONData(dir).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            array = resultObj.data.articles; 
            info(array); 
            costos();
        }
    });

});



