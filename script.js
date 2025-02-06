const container = document.querySelector('.container')
const count = document.querySelector('#count');
const show5 = document.querySelector('#show5');
const showAll = document.querySelector('#showAll');
const showCart = document.querySelector(`#showCart`)
const container_cart = document.querySelector(`.container-cart`)
const x = document.querySelector(`.x`)


let cart = [];

function draw(arr) {
    container.innerHTML = '';
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
        container.append(product)

        btn.addEventListener('click', () => {
            if (!includes) {
                cart.push(item);
            } else {
                cart = cart.filter(elem => elem.id !== item.id);
            }
            draw(posts);
        });

    }
}

draw(posts);

show5.onclick = () => {
    draw(posts.slice(0, 5));
}

showAll.onclick = () => {
    draw(posts);
}

function drawCart(arr) {
    container_cart.innerHTML = '';
    const x = document.createElement('span');
    x.classList.add('x');
    x.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 2L2 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2 2L24 24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`;
    container_cart.append(x);
    x.onclick = () => {
        container_cart.classList.remove('show');
        container_cart.classList.add('hide');
    };

    for (let item of arr) {
        const product = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const info = document.createElement('div');
        const span01 = document.createElement('span');
        const span02 = document.createElement('span');
        const span03 = document.createElement('span');
        const btn = document.createElement('button');

        product.classList.add('product');
        text.classList.add('text');
        info.classList.add('info');
        btn.classList.add('btn', 'active');

        image.src = item.img;
        h3.textContent = item.title;
        p.textContent = item.desc;
        span01.innerHTML = item.span01;
        span02.innerHTML = item.span02;
        span03.innerHTML = item.span03;
        btn.textContent = 'Удалить';

        info.append(span01, span02, span03);
        text.append(h3, p, info, btn);
        product.append(image, text);
        container_cart.append(x)
        container_cart.append(product);

        btn.addEventListener('click', () => {
            cart = cart.filter(elem => elem.id !== item.id);
            drawCart(cart);
            draw(posts);

        });
    }
}

showCart.onclick = () => {
    container_cart.classList.remove('hide');
    container_cart.classList.add('show');
    drawCart(cart);
}

draw(posts); 