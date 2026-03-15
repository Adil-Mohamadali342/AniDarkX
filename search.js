import { animes } from './source.js'

const search = document.querySelector('.search')
const input = document.querySelector('.input')

const defaultContent = search.innerHTML;

input.addEventListener('input', () => {
    const title = input.value.trim().toLowerCase()
    search.innerHTML = ""
    if (title !== "") {
        const anime = animes.filter(a => a.name.toLowerCase().includes(title))
        if (anime.length !== 0) {
            anime.forEach((i) => {
                const image = document.createElement('img')
                const anchor = document.createElement('a')
                anchor.href = `./display.html?id=${i.id}`
                image.style.width = "200px"
                image.style.height = "270px"
                image.style.margin = "40px 20px"
                image.src = i.img
                anchor.appendChild(image)
                search.appendChild(anchor)
            }
            )
        } else {
            const h1 = document.createElement('h1')
            h1.style.color = "red"
            h1.style.textAlign = "center"
            h1.style.marginTop = "320px"
            h1.innerText = "Nothing matched your search. Try something else"
            search.appendChild(h1)
        }

    }
    else {
        search.innerHTML = defaultContent
    }
})
