import {makeAllCards} from '/makeAllCards.js'
import {makeCard} from '/makeCard.js'
import {cards} from '/cards.js'


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
    request.setRequestHeader("Set-Cookie", "Same-Site=None")
    request.setRequestHeader("Content-Type","application/json");
    request.setRequestHeader("Accept","application/json");
    request.send()
}

ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/", (results)=>{
    let data = JSON.parse(results)
    console.log(data)
    
})

console.log(cards)
ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/?p=2", makeAllCards)
ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/?p=3", makeAllCards)
ajax("http://localhost:8080/"+"http://www.recipepuppy.com/api/?p=4", makeAllCards)
console.log(cards)

let button = document.querySelector('#input-button')
button.addEventListener('click', ()=>{
    document.body.append(cards[cards.length-1])
    cards.pop()
    console.log(cards)
})

