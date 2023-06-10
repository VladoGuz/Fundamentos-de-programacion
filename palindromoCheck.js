function palindromeChecker() {
    
    let oracion = document.getElementById("idOracion").value;
    oracion = oracion.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    const palabraLimpiada = oracion.toLowerCase().match(/[a-z]/g);
    
    let j= palabraLimpiada.length-1;
    
    for (let i = 0; i < palabraLimpiada.length; i++) {
        
        if(i == parseInt(palabraLimpiada.length/2)){
            
            alert ("Es una oracion palindromo!!")
            break;
        }
        if(palabraLimpiada[i] !== palabraLimpiada[j]){
            alert("No es una oracion palindromo!")
            break;
        }
        j--;
    }
    
    document.getElementById("idFisrtLetter").innerHTML = palabraLimpiada[0];
    document.getElementById("idMidLetter").innerHTML = palabraLimpiada[Math.floor((palabraLimpiada.length)/2)];
    
    
    
}