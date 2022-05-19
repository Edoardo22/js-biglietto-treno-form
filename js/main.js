let inputNameElement = document.querySelector("[name='userName']");
let kmDaPercorrereElement = document.querySelector("[name='userKm']");
const etaUtenteElement = document.querySelector("[name='userAge']");
const submitButton = document.getElementById("submitButton");
const clearAll = document.getElementById("clearAll");
const prezzoKm = 0.21;
const nomeUtente = document.getElementById("nomeUtente");
const carrozzaNumero = document.getElementById("carrozzaNumero");
const codiceCp = document.getElementById("codiceCp");
let divPrezzoFinale = document.getElementById("prezzoFinale");
let prezzoFinale = 0;
let inputName = document.getElementById("nomeUtente")


submitButton.addEventListener("click", function () {


    console.log(inputNameElement, inputName)
    inputName.innerHTML = inputNameElement.value
    const etaUtente = parseInt(etaUtenteElement.value)
    let kmDaPercorrere = parseFloat(kmDaPercorrereElement.value)
    prezzoViaggio = parseInt(kmDaPercorrere) * prezzoKm

    if (etaUtente < 18) {

        scontoMinori = (prezzoViaggio * (20 / 100))
        prezzoFinale = (Math.round((prezzoViaggio - scontoMinori) * 100) / 100).toFixed(2);
    } else if (etaUtente > 65) {

        scontoAnziani = (prezzoViaggio * (40 / 100))
        prezzoFinale = (Math.round((prezzoViaggio - scontoAnziani) * 100) / 100).toFixed(2);
    }

    else {
        prezzoFinale = (Math.round(prezzoViaggio * 100) / 100).toFixed(2);
    }



    divPrezzoFinale.innerHTML = parseFloat(prezzoFinale);
    carrozzaNumero.innerHTML = Math.random().toFixed(1) * 10;
    codiceCp.innerHTML = Math.random().toFixed(5) * 100000;
    document.getElementById("biglietto").classList.remove('d-none');
})
clearAll.addEventListener("click", function () {
    inputNameElement.value = "";
    kmDaPercorrereElement.value = "";
    etaUtenteElement.value = "";
    document.getElementById("biglietto").classList.add('d-none');

})

