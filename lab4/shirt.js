const renderTextInfo = ()=>{
    const textInfo=document.createElement("div")
    textInfo.id="textInfo"

    const title = document.createElement("h1")
    title.textContent=info.shirt.name
    title.id = 'shirtName'

    const price= document.createElement("p")
    price.textContent=info.shirt.price
    price.id="price"

    const description= document.createElement("p")
    description.textContent=info.shirt.description
    description.id="description"

    textInfo.appendChild(title)
    textInfo.appendChild(price)
    textInfo.appendChild(description)
    return textInfo
}

const renderSideSelection =()=>{
    const sideSelection = document.createElement('div')
    sideSelection.className = 'selectionMenu'

    const sideText= document.createElement("h2")
    sideText.textContent="Side:"

    const frontSideButton=document.createElement("button")
    frontSideButton.textContent="Front"
    frontSideButton.className="button"
    frontSideButton.id = 'frontSideButton'

    const backSideButton=document.createElement("button")
    backSideButton.textContent="Back"
    backSideButton.className="button"
    backSideButton.id = "backSideButton"

    frontSideButton.addEventListener("click", () => {
        info.side = 'front'
        changeImage()
    });

    backSideButton.addEventListener("click", () => {
        info.side = 'back'
        changeImage()
    });

    sideSelection.appendChild(sideText)
    sideSelection.appendChild(frontSideButton)
    sideSelection.appendChild(backSideButton)

    return sideSelection
}

const changeImage = ()=>{

    const img = document.getElementById('img')
    img.src =info.shirt.colors[info.color][info.side]
}
const renderColorSelection =()=>{
    const colorSelection = document.createElement('div')
    colorSelection.className = 'selectionMenu'

    const colorText= document.createElement("h2")
    colorText.textContent="Color:"

    const buttonContainer = document.createElement('div')
    for (const color in info.shirt.colors) {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.className = "button"
        button.onclick = () => {
            info.color = color
            changeImage()
        };
        buttonContainer.appendChild(button);
    }

    colorSelection.appendChild(colorText)
    colorSelection.appendChild(buttonContainer)
    return colorSelection
}

let info = {
    side:null,
    color:null,
    shirt:null
}

const createEl = ()=>{
    const mainContainer= document.getElementById('mainContainer')

    const shirt = JSON.parse(localStorage.getItem('index'))

    info.shirt = shirt
    info.side = 'front'
    info.color = Object.entries(info.shirt.colors)[0][0]

    const img = document.createElement("img");
    img.id="img"
    img.src = info.shirt.colors[info.color][info.side]

    const shirtInfo=document.createElement("div")
    shirtInfo.id="shirtInfo"

    
    shirtInfo.appendChild(renderTextInfo())
    shirtInfo.appendChild(renderSideSelection())
    shirtInfo.appendChild(renderColorSelection())

    mainContainer.appendChild(img)
    mainContainer.appendChild(shirtInfo)

    document.body.appendChild(mainContainer)
 
}

createEl()

