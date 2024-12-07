import shirts from "./shirts.js"

const renderShirt = (element,index)=>{
    const card = document.createElement('div')
    card.className='card'
    const  tshirt =document.createElement("div")
    tshirt.className="tshirt"
    const  info =document.createElement("div")
    info.className="info"
    const  title =document.createElement("div")
    title.className="title"
    const  buttons =document.createElement("div")
    buttons.className="buttons"
    
    
    const img = document.createElement("img")
    img.className="img"
    img.src = element.colors.white.front ? element.colors.white.front : element.default.front
    

    const title1= document.createElement("label")
    title1.className="name"
    title1.textContent = element.name
    
    const subtitle= document.createElement("label")
    subtitle.className="subtitle"
    const colors=element.colors
    subtitle.textContent = "Avaible in "+Object.keys(colors).length +" colors"
    
    const viewButton=document.createElement("button")
    viewButton.className="button"
    viewButton.textContent="Quick View"
    viewButton.id=index
    viewButton.addEventListener("click", () => openQuickView(index))

    const seeButton=document.createElement("button")
    seeButton.className="button"
    seeButton.textContent="See page"
    seeButton.addEventListener('click',()=>{
        localStorage.setItem('index', JSON.stringify(shirts[index]));
        window.location.href = 'shirt.html';
    })

    tshirt.appendChild(img)

    title.appendChild(title1)
    title.appendChild(subtitle)
    info.appendChild(title)

    buttons.appendChild(viewButton)
    buttons.appendChild(seeButton)
    info.appendChild(buttons)

    card.appendChild(tshirt)
    card.appendChild(info)
    
    return card
    // cardContainer.appendChild(card)
}
const openQuickView = (num)=>{
    const id=Number(num)
    const modal = document.getElementById("quickViewModal")
    const title = document.getElementById("quickViewTitle")
    const description = document.getElementById("quickViewDescription")
    const imageFront = document.getElementById("quickViewImageFront")
    const imageBack = document.getElementById("quickViewImageBack")

    title.textContent = shirts[id].name
    description.textContent = shirts[id].price
    
    imageFront.src = shirts[id].colors[Object.keys(shirts[id].colors)[0]].front
    imageBack.src = shirts[id].colors[Object.keys(shirts[id].colors)[0]].back
    modal.style.display = "block" 
}

const cardContainer = document.getElementById('cardContainer')

const closeModalButton = document.getElementById('close')
closeModalButton.addEventListener('click', ()=>{
    const modal = document.getElementById("quickViewModal")
    modal.style.display = "none"
})

shirts.forEach((element ,index) => {
    cardContainer.appendChild(renderShirt(element,index))
})

document.body.appendChild(cardContainer)




