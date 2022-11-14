let cat = localStorage.getItem("catID"); 

const dir = `https://japceibal.github.io/emercado-api/cats_products/${cat}.json`;  

let catArray = [];


function mostrarLista(productos){ 

    
    let listaDeProductos = "";

    for(let prod of productos) {  
            
        listaDeProductos+= `<div onclick="setProdID(` + prod.id + `)" class="list-group-item list-group-item-action">          
            <div class="row"> 
                <div class="col-3"> 
                    <img src="` + prod.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col"> 
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ prod.name + " - " + prod.currency + " " + prod.cost + `</h4> 
                        <p> `+ prod.description +`</p> 
                        </div>
                        <small class="text-muted">` + prod.soldCount + ` artículos</small> 
                        </div>

                        </div>
                    </div>
                </div>

                `
    

         

        document.getElementById("misProductos").innerHTML = listaDeProductos; 
         
        
       
    }
}

    function filtrar(){  
        
        let minimo = parseInt(document.getElementById('min').value); 
        let maximo = parseInt(document.getElementById('max').value);
        let listaFiltrada = catArray.filter(producto => producto.cost >= minimo && producto.cost <= maximo ); 
        mostrarLista(listaFiltrada); 

    } 

    function limpiar(){

        mostrarLista(catArray); 

    }

        function ascendente(){  

            let result = [];

            result = catArray.sort(function(a, b) {
             if ( a.cost < b.cost ){ return -1; }
             if ( a.cost > b.cost ){ return 1; }
             return 0;
        });

        mostrarLista(result);

    }

        function descendente(){

            let result = [];

        result = catArray.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });

        mostrarLista(result);

    }

         function relevancia(){

             let result = [];
        
            result = catArray.sort(function(a, b) {
             let aVendidos= parseInt(a.soldCount);
             let bVendidos = parseInt(b.soldCount);

             if ( aVendidos > bVendidos ){ return -1; }
             if ( aVendidos < bVendidos ){ return 1; }
             return 0;
        });

         mostrarLista(result);

    }

function setProdID(id){  

        localStorage.setItem('pID', id);
        window.location = "product-info.html";
}


document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(dir).then(function(resultObj){

        if (resultObj.status === "ok")
        {
            catArray = resultObj.data.products; 
            mostrarLista(catArray); 
            document.getElementById("name").innerHTML = resultObj.data.catName; 
        }

    });

    document.getElementById('filtrar').addEventListener('click', function(){

        filtrar(); 

    });


    document.getElementById('limpiar').addEventListener('click', function(){

        limpiar();

    });

    document.getElementById("sortAsc").addEventListener("click", function(){

        ascendente();

    });
    

    document.getElementById("sortDesc").addEventListener("click", function(){

       descendente();

    });

    document.getElementById("sortBySoldCount").addEventListener("click", function(){ 
         
        relevancia();

    });
    
});




