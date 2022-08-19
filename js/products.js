const dir = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let lista = [];

function mostrarLista(autos){ 
    
    let listaAutos = "";

    for(let auto of autos) { 
        
        listaAutos+= `<div class="list-group-item list-group-item-action">     
            <div class="row">
                <div class="col-3"> 
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col"> 
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name + " - " + auto.currency + " " + auto.cost + `</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` artículos</small> 
                        </div>

                        </div>
                    </div>
                </div>

                `
    
        document.getElementById("misAutos").innerHTML = listaAutos; 
    }
    
}

document.addEventListener("DOMContentLoaded", function(f){
    fetch (dir)
    .then (response => response.json())
    .then (data =>{
    lista = data.products;
    mostrarLista(lista)
    });
});