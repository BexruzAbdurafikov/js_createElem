const container = document.querySelector(`.container`)
function draw(arr) {
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
        h3.innerHTML = item.title
        p.innerHTML = item.desc
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