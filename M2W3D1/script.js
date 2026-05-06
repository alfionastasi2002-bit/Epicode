/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora 
 deve ritornare la loro somma moltiplicata per 3.
*/


function crazySum(a, b) {

    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

console.log(crazySum(4, 4))
console.log(crazySum(2, 3))
console.log(crazySum(3, 3, 3))




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e 
 ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(a) {

    if ((a >= 20 && a <= 100) || a === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(50))
console.log(boundary(3))
console.log(boundary(430))
console.log(boundary(400))




/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita
 (es.: EPICODE => EDOCIPE).
*/




function reverseString(ape) {
    return ape.split("").reverse().join("");

}
console.log(reverseString("AUSTRALOPITECO"))
console.log(reverseString("CaTania"))
console.log(reverseString("AlFiO-NaStASi"))
console.log(reverseString("alfio-ciao"))




/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro
 e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
 */


function upperFirst(alf) {
    return alf.split(" ").map(alf => alf[0].toUpperCase() + alf.slice(1)).join(" ")

}

console.log(upperFirst("ciao alfio come stai"))
console.log(upperFirst("java script è insane"))





/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero
 chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    let numeroRandom = [];
    for (let i = 0; i < n; i++) {
        numeroRandom.push(Math.floor(Math.random() * 10))
    }
    return numeroRandom
}

console.log(giveMeRandom(2))
console.log(giveMeRandom(4))
console.log(giveMeRandom(6))