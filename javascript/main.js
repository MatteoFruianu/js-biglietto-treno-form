
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");


// calcola e genera biglietto

btnGenera.addEventListener("click", function() {

    var nome = document.getElementById("nome").value;
    // console.log(nome)

    var distanza = document.getElementById("km").value;
    // console.log(distanza)

    var fasciaEta = document.getElementById("eta").value;
    // console.log(fasciaEta)

    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * distanza;
    var offerta = "Prezzo Standard";

    if (fasciaEta == "minorenne") {
        costoBiglietto * 0.8;
        offerta = "Sconto minorenni"

    } 
    else if (fasciaEta == "over65") {
        costoBiglietto * 0.6;
        offerta = "Sconto over 65"

    }

    costoBiglietto = costoBiglietto.toFixed(2) + "€";

    var numCarrozza = Math.floor( Math.random() * 10 ) + 1;
    var codiceCP = Math.floor( Math.random() * (10000 - 9000 ) + 9000);



    document.getElementById("nome-passeggero").innerHTML = nome;
    document.getElementById("offerta-tipo").innerHTML = offerta;
    document.getElementById("numero-carrozza").innerHTML = numCarrozza;
    document.getElementById("codice-cp").innerHTML = codiceCP;
    document.getElementById("costo-biglietto").innerHTML = costoBiglietto;

    

})

btnAnnulla.addEventListener("click", function() {

    document.getElementById("nome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "";
 

    document.getElementById("nome-passeggero").innerHTML = "";
    document.getElementById("offerta-tipo").innerHTML = "";
    document.getElementById("numero-carrozza").innerHTML = "";
    document.getElementById("codice-cp").innerHTML = "";
    document.getElementById("costo-biglietto").innerHTML = "";

}

)










