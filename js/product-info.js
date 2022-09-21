let identif = localStorage.getItem('pID');  // Geteo el item y lo almaceno en una variable para incluirla en el json
 
const descripcion = `https://japceibal.github.io/emercado-api/products/${identif}.json`;

const comentarios = `https://japceibal.github.io/emercado-api/products_comments/${identif}.json`;


let showDesc = [];

function mostrar(detalles){            // Creo los titulos, div y otras etiquetas que quiera usar para darle formato al espacio donde ira la data (con id 'desc').
                                        // Aca no hay que hacer un for
    let informacion = "";       

        informacion+= `
        
        <div><h2>`+ detalles.name + `</h2></div>   

        <hr>

         <h5><b>Precio</b></h5> 
         <div>` + detalles.currency + detalles.cost + `</div>

         <br>

         <h5><b>Descripción</b></h5>
         <div>` + detalles.description + `</div>

         <br>
        
         <h5><b>Categoría</b></h5>
         <div>` + detalles.category + `</div>

         <br>
    
         <h5><b>Cantidad de vendidos</b></h5>
         <div>` + detalles.soldCount + `</div>

         <br>
        
         <h5><b>Imágenes ilustrativas</b></h5>

         <br>


            `

            document.getElementById('desc').innerHTML = informacion;     
            

     let imagenes ="";

        for( let img of detalles.images){ 
            
        imagenes+=`

        <div class="card" style="width: 25%;">

            <img src="` + img + `" class="card-img-top" alt="...">   
            
        </div>
        
        `

        }


        document.getElementById('imagenes').innerHTML = imagenes; 

        let relacionados ="";

        for( let rel of detalles.relatedProducts){ 
            
        relacionados+=`
    
        <div  onclick="remProdID(` + rel.id + `)" class="card" style="width: 18%;">
    
            <img  src="` + rel.image + `" class="card-img-top" alt="...">

            <div>` + rel.name + `</div>
            
            
        </div>
        
        `
    
        }
    
    
        document.getElementById('relacionados').innerHTML = relacionados; 
              

    }
 

let opinion = [];


function opinar(valoracion){


    let filas ="";

    for(let val of valoracion)

     filas += `

     <li class="list-group-item">

     <p><b> `+ val.user  + `</b> `+ ` -  `+ val.dateTime +`  -  ` + puntaje(val.score) + `</p>
     <p> `+ val.description + `</p>

     </li>

     `


    document.getElementById('calif').innerHTML = filas;

  };

  function puntaje(numero){

    let estrellitas = "";

    for(let i = 1; i<=5; i ++){
        if (i<=numero){
            estrellitas += '<span class="fa fa-star checked"></span>';
        }else{estrellitas += '<span class="fa fa-star"></span>';

        }
    }
    
    return estrellitas;

  };

  function remProdID(id){
    localStorage.removeItem('pID')
    window.location = "product-info.html"
    localStorage.setItem('nID', id)
    window.location = "product-info.html"
    localStorage.getItem('nID') 
  }

document.addEventListener("DOMContentLoaded", function(e){
   
    getJSONData(descripcion).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            showDesc = resultObj.data; 
            mostrar(showDesc); 
        }
    });

    getJSONData(comentarios).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            opinion = resultObj.data; 
            opinar(opinion); 
        }
    });
});