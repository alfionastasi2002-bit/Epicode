/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.

String:
Rappresenta dati testuali. Si scrive racchiudendo il testo tra apici singoli (' '), doppi (" ") o backtick (` `).
Esempio: let nome = "Alfio";

Number:
Rappresenta i numeri, sia quelli interi che quelli decimali (che si scrivono con il punto). Viene usato per tutte le operazioni matematiche.
Esempio: let prezzo = 19.99;

Boolean
È un tipo di dato logico che può ammettere solo due valori: true (vero) o false (falso). È fondamentale per i processi decisionali del codice.
Esempio: let isOnline = true;

Undefined
Indica che una variabile è stata creata (dichiarata) ma non le è ancora stato assegnato un valore. La scatola esiste, ma è ancora senza contenuto.
Esempio: let x;

Null
Rappresenta l'assenza intenzionale di un valore. Si usa per indicare esplicitamente che una variabile deve essere "vuota".
Esempio: let datoMancante = null;
*/



/* ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.

- Se una variabile è una singola scatola che contiene un solo giocattolo, un Oggetto 
è come un baule dei tesori o un armadietto.

- È un contenitore speciale che ti permette di tenere insieme tante informazioni diverse che però riguardano
tutte la stessa cosa. Invece di avere tanti foglietti sparsi sulla scrivania, crei un unico raccoglitore.
*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.

let num1= 12
let num2= 20
let somma = num1 + num2

console.log(somma)
*/


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.

let x = 12
*/



/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.


let= "alfio"
*/



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).


let x = 12;
console.log(x -4)
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1= "john";
let name2= "John";
    console.log(name1 !== name2);
    console.log(name1 === name2.toLowerCase())