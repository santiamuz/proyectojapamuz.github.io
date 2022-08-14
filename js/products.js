const autos_url = "http://japceibal.github.io/emercado-api/cats_products/101.json"

//array donde se cargarán los datos recibidos

let arrayAutos = [];


//Función que recibe el array del JSON y los muestra en pantalla usando DOM

function mostrarAutos(array){
    let htmlContentToAppend = "";

    console.log("antes del bucle");
    
    for (let i = 0; i < array.products.length; i++){      
        let cats_products = array.products[i];

        console.log("si llega acá es pq entró al for");
    

        htmlContentToAppend += ` 
            <div class= "list-group-item list-group-item-action" >
            <div class="row">
                <div class="col-3">
                    <img src= " `+ cats_products.image +` " alt= "product image" class= "img-thumbnail" ></img>
                </div> 
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4> `+ cats_products.name + " - "+ cats_products.currency + ` ` + cats_products.cost + ` ` + ` </h4> 
                        <p> `+ cats_products.description +`</p> 
                        </div>
                        <small class="text-muted">` + cats_products.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
      
        `
       document.getElementById("autos").innerHTML = htmlContentToAppend;

        

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