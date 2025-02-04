const container = document.querySelector(`.container`)

function draw(arr) {
    container.innerHTML = '';
    for (let item of arr) {
        const product = document.createElement(`div`)
        const image = document.createElement(`img`)
        const text = document.createElement(`div`)
        const h3 = document.createElement(`h3`)
        const p = document.createElement(`p`)
        const info = document.createElement(`div`)
        const span01 = document.createElement(`span`)
        const span02 = document.createElement(`span`)
        const span03 = document.createElement(`span`)
        const btn = document.createElement(`button`)

        product.classList.add(`product`)
        text.classList.add(`text`)
        info.classList.add(`info`)
        btn.classList.add(`btn`)

        image.src = item.img
        h3.textContent = item.title
        p.textContent = item.desc
        span01.innerHTML = item.span01
        span02.innerHTML = item.span02
        span03.innerHTML = item.span03
        btn.textContent = item.btn

        info.append(span01, span02, span03)
        text.append(h3, p, info, btn)
        product.append(image, text)
        container.append(product)

        btn.addEventListener(`click`, () => {
            btn.textContent = `Добавлено`
            btn.style.color = `white`
            btn.style.backgroundColor = `#1F86FF`
        })
    }
}

draw(posts)

const btnShow5 = document.querySelector(`#show5`)
const btnShowAll = document.querySelector(`#showAll`)

btnShow5.addEventListener(`click`, () => {
    const product5 = posts.slice(0, 5)
    draw(product5)
});

btnShowAll.addEventListener(`click`, () => {
    draw(posts)
});