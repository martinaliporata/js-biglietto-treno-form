// calcola il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// va applicato uno sconto del 24.552% per gli under 21
// va applicato uno sconto del 37.893% per gli over 63.

// Chiedi all'utente il numero di chilometri da percorrere
const km = document.querySelector(".km").value;

// Chiedi l'età del passeggero
const eta = document.getElementById(".age").value;

// Calcola il prezzo totale del biglietto
let prezzoBase = km * 0.267113; // prezzo base in base ai chilometri
let sconto = 0; // inizializza lo sconto a 0

// Applica lo sconto in base all'età del passeggero
if (eta < 21) {
    // sconto del 24.552% per gli under 21
    sconto = prezzoBase * 0.24552;
} else if (eta > 63) {
    // sconto del 37.893% per gli over 63
    sconto = prezzoBase * 0.37893;
}

// Calcola il prezzo totale del biglietto dopo lo sconto
let prezzoTotale = prezzoBase - sconto;

// Mostra il prezzo totale del biglietto
document.getElementById("prezzoOutput").innerHTML = "Il prezzo totale del biglietto è: " + prezzoTotale.toFixed(2) + " €";

console.log("Il prezzo totale del biglietto è: " + prezzoTotale.toFixed(2) + " €");
