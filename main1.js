import {makeEl, getEl, card} from "/modules.js"


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
    let heading = makeEl('h3')
    let a = makeEl("a")
    let p = makeEl('p')
    let closeButton = makeEl('span')
    closeButton.innerText = 'X'
    closeButton.className = 'close-button'
    heading.innerText = recipe.title
    p.innerText = recipe.ingredients
    a.innerText = recipe.href
    heading.style.background = 'red'
    let body = document.querySelector('body')
    closeButton.addEventListener('click', (evt)=>{
        let parent = evt.target.parentNode
        parent.remove()
    })
    body.append(d)
    d.append(heading,closeButton,p,a)
    })
    })
})

console.log('test')