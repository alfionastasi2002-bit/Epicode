// 5t6QWqrmYZTEbVIsgiuN2wRTkIzfol3wqCYIsg2TwOPnUH0UeHWTRuBE

// https://api.pexels.com/v1/search?query=INSERISCIQUERY


const row = document.getElementById('imageBox')
async function getImages() {
    try {
        const result = await fetch('https://api.pexels.com/v1/search?query=motocrosss', {
            headers: {
                Authorization: '5t6QWqrmYZTEbVIsgiuN2wRTkIzfol3wqCYIsg2TwOPnUH0UeHWTRuBE'
            }
        })
        const data = await result.json()
        displayImages(data.photos)
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
getImages()


function displayImages(images) {
    const imagesCard = images.map(image => createImageCard(image))
    imagesCard.forEach(imageCard => row.appendChild(imageCard)) 
        
    }


const createImageCard = (image) => {
    const col = document.createElement('div')
    col.classList.add('col-3')

    const card = document.createElement('div')
    card.classList.add('card')
    col.appendChild(card)

    const img = document.createElement('img')
    img.classList.add('card-img-top')
    img.src = image.src.small
    img.alt = image.alt
    card.appendChild(img)
    
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    card.appendChild(cardBody)
    
    const p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = image.photographer
    cardBody.appendChild(p)

    return col
}