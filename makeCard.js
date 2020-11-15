const makeCard = (data) =>{
    const card = document.createElement('div')
    let image = document.createElement('img')
    card.className = 'new-div'
    let heading = document.createElement('h3')
    let a = document.createElement("a")
    let p = document.createElement('p')
    let closeButton = document.createElement('button')
    image.className = 'image'
    closeButton.innerText = 'CLOSE'
    closeButton.className = 'close-button'
    heading.innerText = data.title
    heading.className = 'new-header'
    p.innerText = data.ingredients
    p.className = 'new-p'
    a.innerText = data.href
    a.setAttribute('href', data.href)
    a.className = 'new-a'
    image.src = data.thumbnail
    card.append(heading,thumbnail,p,a,closeButton)

}