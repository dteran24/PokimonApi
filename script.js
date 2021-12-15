const randInt = Math.floor(Math.random() * 898 ) + 1;

const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: randInt,
}
console.log(apiData);
const apiURL = `${apiData.url}${apiData.type}/${apiData.id}`

fetch(apiURL)
    .then((data)=> data.json())
    .then((pokemon)=>generateHTML(pokemon))

const generateHTML = (data) =>{
    var elementTypes = [];
    const name = data.name;
    var image = data.sprites.front_default;
    var type_1 = data.types[0].type.name;
    var type_2 = data.types[1].type.name;
    var hp = data.stats[0].base_stat;
    var attack = data.stats[1].base_stat;
    var defense = data.stats[2].base_stat;
    for (var i = 0; i < data.types.length; i++) {
        var type = data.types[i].type.name;
        elementTypes.push(type);
      }
      if(elementTypes.length > 1){
        const html = `
        <div class = "name"> ${name}</div>
        <img src = ${image}>
        <div class = "details">
            <span> Type: ${type_1}-${type_2} </span>
            <span> HP: ${hp}</span>
            <span> Attack: ${attack}</span>
            <span> Defense: ${defense}</span>
            
        </div>
        `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
      } else {
        const html = `
        <div class = "name"> ${name}</div>
        <img src = ${image}>
        <div class = "details">
            <span> Type: ${type_1}-${type_2} </span>
            <span> HP: ${hp}</span>
            <span> Attack: ${attack}</span>
            <span> Defense: ${defense}</span>
            
        </div>
        `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
      }
    
}




//---------------------------------------------------- Button----------------------------------------//
const randomBttn = document.querySelector('.randomize');

randomBttn.addEventListener('click', randomID);
function randomID(){
    const randInt2 = Math.floor(Math.random() * 898 ) + 1;
    apiData.id = randInt2;
    const apiURL = `${apiData.url}${apiData.type}/${apiData.id}`
fetch(apiURL)
    .then((data)=> data.json())
    .then((pokemon)=>generateHTML(pokemon))

const generateHTML = (data) =>{
    var elementTypes = [];
    for (var i = 0; i < data.types.length; i++) {
        var type = data.types[i].type.name;
        elementTypes.push(type);
      }
      if(elementTypes.length > 1){
        const html = `
        <div class = "name"> ${data.name}</div>
        <img src = ${data.sprites.front_default}>
        <div class = "details">
            <span> Type: ${data.types[0].type.name}-${data.types[1].type.name} </span>
            <span> HP: ${data.stats[0].base_stat}</span>
            <span> Attack: ${data.stats[1].base_stat}</span>
            <span> Defense: ${data.stats[2].base_stat}</span>
            
        </div>
        `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
      } else {
        const html = `
        <div class = "name"> ${data.name}</div>
        <img src = ${data.sprites.front_default}>
        <div class = "details">
            <span> Type: ${data.types[0].type.name}</span>
            <span> HP: ${data.stats[0].base_stat}</span>
            <span> Attack: ${data.stats[1].base_stat}</span>
            <span> Defense: ${data.stats[2].base_stat}</span>
            
        </div>
        `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
      }


}



    console.log(apiData);
    
}