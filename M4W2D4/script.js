const booksRow = document.getElementById('booksRow')

const getBooks = async () => {
    try {
        const result = await fetch('https://striveschool-api.herokuapp.com/books')
        const data = await result.json()
        displayBooks(data)

    }

    catch (errore) {
        console.log(errore)
    }
}

getBooks()


/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/

const createBookCard = ({ title, img, price, category }) => {
    const col = document.createElement('div')
    col.classList.add('col-3')

    const card = document.createElement('div')
    col.classList.add('card')
    col.appendChild(card)

    const bookCover = document.createElement('img')
    bookCover.classList.add('card-img-top')
    bookCover.src = img
    bookCover.alt = title
    card.appendChild(bookCover)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.appendChild(cardBody)

    const bookTitle = document.createElement('h5')
    bookTitle.classList.add('card-title')
    bookTitle.innerText = title
    cardBody.appendChild(bookTitle)

    const bookCategory = document.createElement('p')
    bookCategory.classList.add('card-text')
    bookCategory.innerText = category
    cardBody.appendChild(bookCategory)

    const bookPrice = document.createElement('p')
    bookPrice.classList.add('card-text')
    bookPrice.innerText = price
    cardBody.appendChild(bookPrice)

    const addToCart = document.createElement('a')
    addToCart.classList.add('card-link')
    addToCart.innerText = "Aggiungi al carello"
    cardBody.appendChild(addToCart)

    const jumpButton = document.createElement('a')
    jumpButton.classList.add('card-link')
    jumpButton.innerText = "Salta"
    cardBody.appendChild(jumpButton)

    return col

}



const displayBooks = (books) => {
    for (const book of books){
        const cardBook = createBookCard(book)

        booksRow.appendChild(cardBook)

    }


}