const autos_url = "http://japceibal.github.io/emercado-api/cats_products/101.json"

//array donde se cargarán los datos recibidos

let arrayAutos = [];


//Función que recibe el array del JSON y los muestra en pantalla usando DOM

function mostrarAutos(autos){
    let htmlContentToAppend = "";

    for (i=0; i<autos.length; i++){
        let auto = autos[i];
        htmlContentToAppend += ` 
        <div onclick="setCatID(${auto.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${auto.imgSrc}" alt="${auto.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${auto.name}</h4>
                            <small class="text-muted">${auto.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${auto.description}</p>
                    </div>
                </div>
            </div>
        
        `

        document.getElementById("autos").innerHTML = htmlContentToAppend;
    }

}

//función que ejecuta lo anterior junto con el fetch ya  definido en init.js

document.addEventListener("DOMContentLoaded"), function(e){
    getJSONData(autos_url).then(function(resultObj){
        if (resultObj.status === "ok"){
            arrayAutos = resultObj.data;
            mostrarAutos(arrayAutos);
        }
    }
    
    
    )
}