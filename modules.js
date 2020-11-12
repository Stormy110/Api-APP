// this function will make any DOM element adding attributes using ,{key:value}
// example: let d = makeEl('div',{id:'main'})
// this makes a new div named d in the DOM
export const makeEl = (tag, options={})=>{

    let el = document.createElement(tag)
    
    for(let [key,value] of Object.entries(options)){
        el[key] = value;
    }

    return el;
}

// this function will query select any DOM element
export const getEl = (query) => {
    let el = document.querySelectorAll(query)
    if(el.length == 0) return null;
    if(el.length == 1) return el[0];
    return el;
}
// example: let d = getEl('div')
// this grabs the first div

export const card = (data)=>{
    let card = makeEl("div", {class:"card"})

    card.append(
        makeEl("h3", {innerText:data.results.find(recipe=>recipe).value}),
        makeEl("p", {innerText:data.results.recipe.ingredients.value}),
        //innerText:data.find(d=>d.name == "todo").value
        makeEl("a", {innerText:data.results.recipe.href.value})
    )
    return card;
}