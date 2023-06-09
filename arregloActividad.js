
let arregloElementos =[];
let arregloFinal = document.getElementById("arregloResultado");
let arregloIngresado = document.getElementById("idTextArregloIngresado");
function generarArreglo(){
    let elementosIngresado = document.getElementById("idElementosArreglo").value;
    arregloIngresado.innerHTML="";
    arregloFinal.innerHTML ="";
    arregloElementos = elementosIngresado.split(",");
    arregloIngresado.innerHTML = arregloElementos;
}

function insertarElemento() {
    let elementoTextField = document.getElementById("idElementoNuevo").value;
    let posicionInsertada = document.getElementById("idPosicion").value;
    arregloFinal.innerHTML="";
    let arreglo = arregloElementos;
    arreglo.splice(posicionInsertada-1,0,elementoTextField);
    arregloFinal.innerHTML = arreglo;
}