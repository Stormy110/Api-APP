import makeCard from '/makeCard.js'

export const makeAllCards = (res)=>{
    let data = JSON.parse(res)
    console.log(data)
    data.results.forEach(makeCard)
    makeCard(data.results[0])
}