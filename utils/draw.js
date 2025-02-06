function draw(arr, place) {
    place.innerHTML = '';
    count.innerHTML = cart.length;

    for (let item of arr) {
        const includes = cart.find(elem => elem.id === item.id);

        const product = document.createElement('div')
        const image = document.createElement('img')
        const text = document.createElement('div')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const info = document.createElement('div')
        const span01 = document.createElement('span')
        const span02 = document.createElement('span')
        const span03 = document.createElement('span')
        const btn = document.createElement('button')

        product.classList.add('product')
        text.classList.add('text')
        info.classList.add('info')
        btn.classList.add('btn', includes ? 'active' : 'btn');

        image.src = item.img
        h3.textContent = item.title
        p.textContent = item.desc
        span01.innerHTML = item.span01
        span02.innerHTML = item.span02
        span03.innerHTML = item.span03
        btn.textContent = includes ? 'Добавлено' : item.btn

        info.append(span01, span02, span03)
        text.append(h3, p, info, btn)
        product.append(image, text)
        place.append(product)

        btn.addEventListener('click', () => {
            if (!includes) {
                cart.push(item);
            } else {
                cart = cart.filter(elem => elem.id !== item.id);
            }
            draw(posts, container);
            draw(cart, cartContainer);
        });
    }
}