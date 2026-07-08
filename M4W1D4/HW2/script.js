
const searchBox = document.getElementById('searchResults')

function getSongs() {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem')
        .then(result => result.json())
        .then(songs => listSongs(songs.data))
        .catch(error => console.log(error))
}
getSongs()

function listSongs(songs) {
    for (const song of songs) {
        const card = cardSongs(song)
        console.log(card)
        searchBox.appendChild(card)
    }
}

function cardSongs(song) {

    const col = document.createElement('div')
    col.classList.add('col-3')
    const card = document.createElement('div')
    card.classList.add('card')
    col.appendChild(card)
    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.src = song.album.cover_small
    card.appendChild(img)
    const cardbody = document.createElement('div')
    cardbody.classList.add('card-body')
    card.appendChild(cardbody)
    const h5 = document.createElement('h5')
    h5.classList.add('card-title','text-dark')
    h5.innerText = song.title
    cardbody.appendChild(h5)
    const p = document.createElement('p')
    p.classList.add('card-text', 'text-dark')
    p.innerText = song.artist.name
    cardbody.appendChild(p)
    const a = document.createElement('a')
    a.classList.add('btn', 'btn-primary')
    a.innerText = "Link"
    a.href = song.link
    cardbody.appendChild(a)
    return col
}

