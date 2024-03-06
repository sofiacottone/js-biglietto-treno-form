// Scrivere un programma che chieda all’utente:
//      - Il numero di chilometri da percorrere
//      - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//      - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//      - va applicato uno sconto del 20% per i minorenni
//      - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
//  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
//  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// ottenere attraverso il campo input i km da percorrere e l'età dell'utente al click del bottone
const calcButton = document.querySelector('#calc-btn');
calcButton.addEventListener('click', function () {
    const userKm = parseInt(document.querySelector('#user-km').value);
    console.log('km', userKm);

    const userAge = parseInt(document.querySelector('#user-age').value);
    console.log('age', userAge);


    // prezzo totale senza sconto(regularPrice) = km * prezzo al km
    // prezzo totale con sconto(discountedTotPrice) = regularPrice*(1-0,20) o regularPrice*(1-0,40)
    // prezzo al km con sconto(discountedPriceKm) = prezzo al km*(1-sconto)
    const pricePerKm = 0.21;
    console.log('price/km', pricePerKm);

    const regularPrice = userKm * pricePerKm;
    console.log('regular price', regularPrice);

    let discountedTotPrice;
    if (userAge < 18) {
        discountedTotPrice = regularPrice * (1 - 0.20);
        console.log('tot discounted 18', discountedTotPrice)

    } else if (userAge > 65) {
        discountedTotPrice = regularPrice * (1 - 0.40);
        console.log('tot discounted 65', discountedTotPrice)
    } else {
        document.querySelector('#calc-result').innerHTML = `Il costo del tuo biglietto è: ${regularPrice.toFixed(2)}`
        console.log('regular price 2', regularPrice);

    }

    // output
    document.querySelector('#calc-result').innerHTML = `Il costo del tuo biglietto è: ${discountedTotPrice.toFixed(2)}`


});



// calcolo prezzo del biglietto in base all'età

//