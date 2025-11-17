

let computador =0;
function contarclick(){
    computador= computador +1;
    const contador=document.getElementById("contador");
    contador.textContent= "parabens voce clicou "+ computador+" vezes";
    if (computador > 50){
   contador.textContent= "vc passou de 50";
}
else if (computador >30){
   contador.textContent= "vc passou de 30";
}
    else if (computador > 15) {
        contador.textContent= "vc passou de 15";
    }
}



