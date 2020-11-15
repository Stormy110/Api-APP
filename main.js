console.log('hello')


const makeEl = (tag, options={})=>{

    let el = document.createElement(tag)
    
    for(let [key,value] of Object.entries(options)){
        el[key] = value;
    }

    return el;
}

// this function will query select any DOM element
const getEl = (query) => {
    let el = document.querySelectorAll(query)
    if(el.length == 0) return null;
    if(el.length == 1) return el[0];
    return el;
}


const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        //callback doesnt return anything
        callback("")
    })
    request.open(method,url)
    request.setRequestHeader("X-Requested-With","XMLHttpRequest");
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    
    request.setRequestHeader("Content-Type","application/json");
    request.setRequestHeader("Accept","application/json");
    request.send()
}

ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/", (results)=>{
    let data = JSON.parse(results)
    console.log(data)
    
})


let button = getEl("#input-button")
button.addEventListener("click", ()=>{
    ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/", (results)=>{
    let data = JSON.parse(results)
    console.log(data)
    data.results.forEach(recipe=>{
    let d = makeEl('div')
    d.className = 'new-div'
    let heading = makeEl('h3')
    let a = makeEl("a")
    let p = makeEl('p')
    let closeButton = makeEl('button')
    let img = makeEl('img')
    img.className = 'image'
    img.src = recipe.thumbnail
    closeButton.innerText = 'CLOSE'
    closeButton.className = 'close-button'
    heading.innerText = recipe.title
    heading.className = 'new-header'
    p.innerText = recipe.ingredients
    p.className = 'new-p'
    a.innerText = recipe.href
    a.setAttribute('href', recipe.href)
    a.className = 'new-a'
    let body = document.querySelector('body')
    closeButton.addEventListener('click', (evt)=>{
        let parent = evt.target.parentNode
        parent.remove()
    })
    d.append(heading,img,p,a,closeButton)
    appendDiv(d)
    })
    })
})

const appendDiv = (d)=>{
    let body = getEl('body')
    body.append(d)
}

