// calcola il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.267113 € al km)
// va applicato uno sconto del 24.552% per gli under 21
// va applicato uno sconto del 37.893% per gli over 63.

// Chiedi all'utente il numero di chilometri da percorrere
    const distanceElement = document.querySelector('input#user-distance');
    const ageElement = document.querySelector('input#user-age');

    const discountPercentageEl = document.querySelector('span#discount-percentage');
    const priceDiscountEl = document.querySelector('span#price-discount');
    const totalPriceEl = document.querySelector('span#total-price')

    document.querySelector('#ticket-generator').addEventListener('click', function(){
        const distance = Number.parseFloat(distanceElement.value, 10);
        const age = Number.parseInt(ageElement.value, 10);
    
    if ( isNaN(distance) || isNaN(age)){
        console.error('Given inputs are not numbers');
    } else {

        const pricePerUnit = 0.267113;
        let discount = 0;

        if (age>=63) {
            discount = 37.893
        } else if (age < 21) {
            discount = 24.552;
        }

        let totalDiscount = (pricePerUnit * distance) / 100 * discount;
        let total = (pricePerUnit * distance) - totalDiscount;

        discountPercentageEl.innerHTML = discount + '%';
        priceDiscountEl.innerHTML = totalDiscount.toFixed(2) + '$';
        totalPriceEl.innerHTML = total.toFixed(2) + '$';

        console.log(total, totalDiscount);
    }
});