const dir = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let catArray = [];

function mostrarLista(cars){ 
    
    let listaDeAutos = "";

    for(let car of cars.products) { 
            
        listaDeAutos+= `<div class="list-group-item list-group-item-action">     
            <div class="row">
                <div class="col-3"> 
                    <img src="` + car.image + `" alt="product image" class="img-thumbnail"> 
                </div>
                <div class="col"> 
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ car.name + " - " + car.currency + " " + car.cost + `</h4> 
                        <p> `+ car.description +`</p> 
                        </div>
                        <small class="text-muted">` + car.soldCount + ` artículos</small> 
                        </div>

                        </div>
                    </div>
                </div>

                `
    
        document.getElementById("misAutos").innerHTML = listaDeAutos; 
    }
    
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(dir).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            listaDeAutos = resultObj.data;
            mostrarLista(listaDeAutos);
        }
    });
});