
function salidaCiclos() {
    
    
    let salidaResultado="";
    for (let i = 0; i < 11; i++) {
        let formula = ((i *( i+1))/2)+1;
        salidaResultado += formula +", ";
    }
    salidaResultado = salidaResultado.substring(0,salidaResultado.length-2)
    
    document.getElementById("idResultado").innerHTML += salidaResultado;
}
