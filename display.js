import { animes } from './source.js'

const params = new URLSearchParams(window.location.search)
const id = Number(params.get("id"))
const anime = animes.find(i => i.id === id)

if (anime) {

    document.querySelector("iframe").src = anime.url
    document.querySelector("img").src = anime.img

    document.querySelector(".title").innerText = anime.name
    document.querySelector(".status").innerText = anime.status
    document.querySelector(".genre").innerText = anime.genre
    document.querySelector(".released").innerText = anime.released
    document.querySelector(".ep").innerText = anime.ep
    document.querySelector(".studio").innerText = anime.studio
    document.querySelector(".duration").innerText = anime.duration
    document.querySelector(".rating").innerText = anime.rating
    document.querySelector("i").innerText = anime.review

}

const related = document.querySelector('.related')

const choosen = []

for (let a = 0; a < 4; a++) {

    const random = Math.floor(Math.random() * animes.length)

    if (!choosen.includes(random) && animes[random].id !== id) {

        const image = document.createElement('img')
        const anchor = document.createElement('a')

        image.src = animes[random].img
        image.style.width = "200px"
        image.style.height = "260px"
        image.style.margin = "10px 30px"

        anchor.href = `./display.html?id=${animes[random].id}`

        anchor.appendChild(image)
        related.appendChild(anchor)

        choosen.push(random)

    } else {
        a--   // retry this slot
    }

}