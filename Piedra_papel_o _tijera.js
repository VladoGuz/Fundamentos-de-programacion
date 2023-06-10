
let player1 = prompt("Jugador 1 -> Ingresa R: roca , P: papel o T: tijeras");
let player2 = prompt("Jugador 2 -> Ingresa R: roca , P: papel o T: tijeras");


if (player1 === player2) {
    alert("Empataron");
}
else {
    let textGanador = "";
    let ganoPlayer1 = false;
    switch (player1) {
        case "R":
            if (player2 === "T") {
                ganoPlayer1 = true;
                textGanador = " ROCA rompe TIJERA ";
            } else textGanador = " PAPEL atrapa ROCA ";
            break;
        case "P":
            if (player2 === "R") {
                ganoPlayer1 = true;
                textGanador = " PAPEL atrapa ROCA ";
            } else textGanador = " TIJERA corta PAPEL ";
            break;
        case "T":
            if (player2 === "P") {
                ganoPlayer1 = true;
                textGanador = " TIJERA corta PAPEL ";
            } else textGanador = "ROCA rompe TIJERA ";
            break;
        default:
            break;
    }
    if (ganoPlayer1) alert(player1 + "-" + player2 + textGanador + "gana el jugador 1");
    else alert(player2 + "-" + player1 + textGanador + "gana el jugador 2")


}