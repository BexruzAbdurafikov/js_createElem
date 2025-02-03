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
    }
]