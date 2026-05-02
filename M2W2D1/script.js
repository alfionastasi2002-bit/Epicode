/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.


const numero1= 12;
const numero2= 22;

if (numero1 > numero2) {
    console.log("il numero più grande è " + numero1)
}
    
else{
    console.log("il numero più grande è " + numero2)
    }
*/


/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"


const num = 6;
if (num < 4 ) {
    console.log("Tiny")
} else if (num < 10){
        console.log("Small")
    }else if (num < 15){
        console.log("Medium")
    }else if (num < 20){
        console.log("Large")
    }else {
        console.log("Huge")
    }
*/


    /* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").


for (let i =0; i<=10; i++){
    if (i === 3 || i === 8){
        continue;
    }
    console.log(i);
}
*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.


for (let i =0; i <=15; i++)
    if (i % 2 === 0)
        console.log(i + " il numero è pari ")
    else 
        console.log(i + " il numero è dispari ")
*/

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

const a= 10;
const b = 2;

if (a === 8 || b === 8 || a + b === 8 || a-b === 8 || b - a === 8){
    console.log("verificato!");
    }else {
        console.log("non verificato...")
    }
*/


/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.


let totalShoppingCart = 30;
const shippingCost = 10;
let total; 

if ( totalShoppingCart > 50 ){
    total = totalShoppingCart;
} else {
    total = totalShoppingCart + shippingCost;
}

console.log("il totale è: " + total)
*/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.


let totalShoppingCart = 80;
const shippingCost = 10;
let total; 

totalShoppingCart = totalShoppingCart * 0.8

if (totalShoppingCart > 50) {
    total = totalShoppingCart;
} else {
    total = totalShoppingCart + shippingCost;
}

console.log(" il totale è " + total)
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"


let isMale = true;
let gender

gender = isMale ? "male" : "female" ;

console.log(gender);
*/