const container = document.querySelector('.container')
const count = document.querySelector('#count');
const show5 = document.querySelector('#show5');
const showAll = document.querySelector('#showAll');
const showCart = document.querySelector('#showCart');
const closeCart = document.querySelector('#close');

let cart = [];

draw(posts, container);
draw(cart, cartContainer);

closeCart.onclick = () => {
    close();
}

showCart.onclick = () => {
    open();
}

show5.onclick = () => {
    draw(posts.slice(0, 5));
}

showAll.onclick = () => {
    draw(posts);
}