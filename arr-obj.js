const posts = [
    {
        img: `./bag.png`,
        title: `MEN’S CLOTHING (120)`,
        desc: `Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday`,
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    109`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    3.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    120`,
        btn: `В избранное`
    },
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    109`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    3.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    120`,
        btn: `В избранное`
    }, {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        desc: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        category: "men's clothing",
        img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    22.3`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    4.1`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    259`,
        btn: `В избранное`


    }, {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        desc: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    55.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    4.7`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    500`,
        btn: `В избранное`


    }, {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        desc: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path
            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    15.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    3.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path
            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    120`,
        btn: `В избранное`
    }, {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        desc: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    695`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    4.6`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    400`,
        btn: `В избранное`
    }, {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        desc: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        img: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    168`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    3.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    70`,
        btn: `В избранное`
    }, {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        desc: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    9.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    3`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    400`,
        btn: `В избранное`
    }, {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        desc: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        img: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    10.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    1.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    100`,
        btn: `В избранное`
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        desc: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        img: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    64`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    3.3`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z"
                            stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    203`,
        btn: `В избранное`
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        desc: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        img: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              109`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              2.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              470`,
        btn: `В избранное`
    },
    {
        id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        desc: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        img: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              109`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              4.8`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              319`,
        btn: `В избранное`
    },
    {
        id: 12,
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        desc: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  114`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  4.8`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  400`,
        btn: `В избранное`
    },
    {
        id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        desc: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        img: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  599`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  2.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  250`,
        btn: `В избранное`
    },
    {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
        price: 999.99,
        desc: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  999.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  2.2`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  240`,
        btn: `В избранное`
    },
    {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99, "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        desc: "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  56.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  2.6`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  235`,
        btn: `В избранное`
    },
    {
        id: 16,
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        desc: "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  29.95`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  2.9`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  340`,
        btn: `В избранное`
    },
    {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        desc: "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  39.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  3.8`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  679`,
        btn: `В избранное`
    },
    {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 9.85,
        desc: "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  9.85`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  4.7`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  130`,
        btn: `В избранное`
    },
    {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        desc: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  7.95`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  4.5`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  146`,
        btn: `В избранное`
    },
    {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        desc: "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        img: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        span01: `<svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1V15.6667" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.33333 3.66797H3.33333C2.71449 3.66797 2.121 3.9138 1.68342 4.35139C1.24583 4.78897 1 5.38246 1 6.0013C1 6.62014 1.24583 7.21363 1.68342 7.65122C2.121 8.0888 2.71449 8.33464 3.33333 8.33464H6.66667C7.28551 8.33464 7.879 8.58047 8.31658 9.01805C8.75417 9.45564 9 10.0491 9 10.668C9 11.2868 8.75417 11.8803 8.31658 12.3179C7.879 12.7555 7.28551 13.0013 6.66667 13.0013H1" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  12.99`,
        span02: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.10542 1L8.99199 4.82199L13.2108 5.43864L10.1581 8.41197L10.8786 12.6125L7.10542 10.6282L3.33227 12.6125L4.05271 8.41197L1 5.43864L5.21884 4.82199L7.10542 1Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  3.6`,
        span03: `<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5.93266L4 2.47266" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 10.332V4.99863C12.9998 4.76482 12.938 4.53517 12.821 4.33274C12.704 4.13031 12.5358 3.96221 12.3333 3.8453L7.66667 1.17863C7.46397 1.06161 7.23405 1 7 1C6.76595 1 6.53603 1.06161 6.33333 1.17863L1.66667 3.8453C1.46418 3.96221 1.29599 4.13031 1.17897 4.33274C1.06196 4.53517 1.00024 4.76482 1 4.99863V10.332C1.00024 10.5658 1.06196 10.7954 1.17897 10.9979C1.29599 11.2003 1.46418 11.3684 1.66667 11.4853L6.33333 14.152C6.53603 14.269 6.76595 14.3306 7 14.3306C7.23405 14.3306 7.46397 14.269 7.66667 14.152L12.3333 11.4853C12.5358 11.3684 12.704 11.2003 12.821 10.9979C12.938 10.7954 12.9998 10.5658 13 10.332Z" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.17999 4.30469L6.99999 7.67135L12.82 4.30469" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7 14.3841V7.66406" stroke="#1F86FF" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  145`,
        btn: `В избранное`
    }
]