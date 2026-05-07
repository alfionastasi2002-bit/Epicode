// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function switchText() {

    document.querySelector("h1").textContent = "Zona Cellulari"

}
switchText()


// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function switchColor() {
    document.body.style.backgroundColor = "Ivory"
}
switchColor()


// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function switchAddress() {
    document.querySelector("footer p").textContent = "Via Vai N° 118"
}
switchAddress()


// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClass() {
    document.querySelectorAll("a").forEach(link => {
        link.classList.add("link-amazon")
    })
}
addClass()


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della
//  tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function addRemove() {
    document.querySelectorAll("img").forEach(Image => {
        Image.classList.toggle("add-class-img")

    })
}
addRemove()


// ESERCIZIO 12: Scrivi una funzione per cambiare il colore
// del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


function changeColor() {
    let a = Math.floor(Math.random() * 255)
    let l = Math.floor(Math.random() * 255)
    let f = Math.floor(Math.random() * 255)
    document.querySelectorAll(".prezzo").forEach (prezzo => {
        prezzo.style.color = `rgb(${a}, ${l}, ${f})`
    })
}
changeColor()
