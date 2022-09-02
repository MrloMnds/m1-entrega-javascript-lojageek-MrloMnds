//listas
let listaProdutos = [
    {
        image: '/assets/img/painting/personagem.jpg',
        name: 'Star Wars',
        price: 100.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/gamepad.jpg',
        name: 'Controle PS4',
        price: 90.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/clock.jpg',
        name: 'Relógio',
        price: 75.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/personagem.jpg',
        name: 'Star Wars',
        price: 100.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/gamepad.jpg',
        name: 'Controle PS4',
        price: 90.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/clock.jpg',
        name: 'Relógio',
        price: 75.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/personagem.jpg',
        name: 'Star Wars',
        price: 100.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/gamepad.jpg',
        name: 'Controle PS4',
        price: 90.00,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/clock.jpg',
        name: 'Relógio',
        price: 75.00,
        type: 'painting'
    },
    {
        image: '/assets/img/actions/animewoman.jpg',
        name: 'Garota de Anime',
        price: 125.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku',
        price: 200.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/starwarspersonagem.jpg',
        name: 'Baby Yoda',
        price: 180.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/animewoman.jpg',
        name: 'Garota de Anime',
        price: 125.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku',
        price: 200.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/starwarspersonagem.jpg',
        name: 'Baby Yoda',
        price: 180.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/animewoman.jpg',
        name: 'Garota de Anime',
        price: 125.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku',
        price: 200.00,
        type: 'figure'
    },
    {
        image: '/assets/img/actions/starwarspersonagem.jpg',
        name: 'Baby Yoda',
        price: 180.00,
        type: 'figure'
    },
    {
        image: '/assets/img/painting/Wallpaper.jpg',
        name: 'Kenzie',
        price: 100,
        type: 'painting'
    },
    {
        image: '/assets/img/painting/tobiyoda.jpeg',
        name: 'Tobias Yoda',
        price: 999.99,
        type: 'painting'
    },
]
let listFrames = []
let listFigures = []



let paintings = document.getElementsByClassName('list-frames')
let figures = document.getElementsByClassName('list-figures')



//funcoes
function criarTemplate(produto){
    let tagLi = document.createElement('li')
    let tagA = document.createElement('a')
    let tagImg = document.createElement('img')
    let tagSection = document.createElement('section')
    tagSection.classList.add('abaixo-da-foto')
    let tagH3 = document.createElement('h3')
    let tagP = document.createElement('p')
    
    tagImg.src = `${produto.image}`
    tagImg.alt = produto.name
    tagH3.innerText = produto.name
    tagP.innerText = `R$${produto.price}`

    tagLi.append(tagA, tagSection)
    tagA.append(tagImg, tagSection)
    tagSection.append(tagH3, tagP)

    return tagLi
}

function separaItens(array){
    let paintings = document.getElementsByClassName('list-frames')[0]
    let figures = document.getElementsByClassName('list-figures')[0]
    for (let item of array){
        if (item.type === 'painting'){
            listFrames.push(item)
        }
        else if (item.type === 'figure'){
            listFigures.push(item)
        }
    }
    for (let x of listFrames){
        let li = criarTemplate(x)
        paintings.append(li)
    }
    for (let y of listFigures){
        let li = criarTemplate(y)
        figures.append(li)
    }
}

separaItens(listaProdutos)