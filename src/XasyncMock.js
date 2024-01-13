const products = [
    {
        id: '1',
        name: 'Surfskate',
        price: 114999,
        category: 'Longboards',
        img:'https://www.cristobalcolon.com/fullaccess/item30453foto125607th.jpg',
        stock: 25,
        description: 'Woodoo Dawn Patrol'
    },
    {
        id: '2',
        name: 'SantaCruz',
        price: 299999,
        category: 'Longboards',
        img:'https://www.cristobalcolon.com/fullaccess/item24464foto110912th.jpg',
        stock: 10,
        description: 'Santa Cruz Glow Dot Shark'
    },
    {
        id: '3',
        name: 'SantaCruz',
        price: 129999,
        category: 'MediumBoard',
        img:'https://www.cristobalcolon.com/fullaccess/item24455foto104862th.jpg',
        stock: 3,
        description: 'Santa Cruz Crane Dot Shark'
    },
    {
        id: '4',
        name: 'SantaCruz',
        price: 149999,
        category: 'MediumBoard',
        img:'https://www.cristobalcolon.com/fullaccess/item23361foto100465th.jpg',
        stock: 1,
        description: 'Santa Cruz Roskopp Five Drop'
    },
    {
        id: '5',
        name: 'M16',
        price: 54999,
        category: 'Skate',
        img:'https://www.cristobalcolon.com/fullaccess/item31021foto127157th.jpg',
        stock: 10,
        description: 'M16 People Suck'
    },
    {
        id: '6',
        name: 'Kalima',
        price: 49999,
        category: 'Skate',
        img:'https://www.cristobalcolon.com/fullaccess/item17031foto78647th.jpg',
        stock: 10,
        description: 'Kalima Basic'
    }

]
export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
    
        resolve(products);
    },500);
})
}

export const getProductById = (productId)=> {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    });
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500);
    });
};
