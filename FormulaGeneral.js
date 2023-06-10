
function discriminante(a, b, c) {
    return (b * b) - 4 * a * c;
}

function calcularEcuacionCuadratica() {
    let a = document.getElementById("idA").value;
    let b = document.getElementById("idB").value;
    let c = document.getElementById("idC").value;
    let textResult = document.getElementById("idTextResult")

    let disc = discriminante(a, b, c);
    if (disc < 0) alert("Sin solucion real")
    else {
        let x1 = (-b + Math.sqrt(disc)) / (2 * a);
        let x2 = (-b - Math.sqrt(disc)) / (2 * a);
        textResult.innerHTML = ` x1= ${x1} |  x2= ${x2}`;
    }

}