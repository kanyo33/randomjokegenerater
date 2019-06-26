const btn = document.querySelector('.randomJoke').addEventListener('click', randomJokes);
const display = document.querySelector('.joke');
const topicSelect = document.querySelector('.topicSelect');


let chuckNorris = 'https://api.chucknorris.io/jokes/random';
let setupJoke = 'https://official-joke-api.appspot.com/random_joke';
let dadJoke = 'https://icanhazdadjoke.com/';

let names = ['Chuck Norris', 'Setup Joke', 'Dad Joke'];

function randomJokes(){
    var n = Math.floor(Math.random()*3);
    switch(n){
        case 0:
        return chuckNorrisJoke();
        case 1:
        return setupJokes();
        case 2:
        return dadJokes();
    }
}

let btnSelect = '';
let btnIndex = [];

names.forEach((name, index) => {
    let btn = `<button class='selectBtn'>${name}</button>\n`;
    btnSelect += btn;
    btnIndex.push(index);
    topicSelect.innerHTML = btnSelect;
    return btnSelect;
});

const selectBtn1 = document.querySelector('.selectBtn:nth-child(1)').addEventListener('click', chuckNorrisJoke);
const selectBtn2 = document.querySelector('.selectBtn:nth-child(2)').addEventListener('click', setupJokes);
const selectBtn3 = document.querySelector('.selectBtn:nth-child(3)').addEventListener('click', dadJokes);

async function chuckNorrisJoke(){
    try{
        let response = await fetch(chuckNorris);
        let data = await response.json();
        return display.innerHTML = data.value;
    }
    catch(e){
        console.error(e);
    }
};

async function setupJokes(){
    try{
        let response = await fetch(setupJoke);
        let data = await response.json();
        return display.innerHTML = `${data.setup}<br /><br />${data.punchline}`;
    }
    catch(e){
        console.error(e);
    }
};

async function dadJokes(){
    try{
        let response = await fetch(dadJoke, 
            {headers: {
                'Accept': 'application/json'
              }});
        let data = await response.json();
        return display.innerHTML = data.joke;
    }
    catch(e){
        console.error(e);
    }
};


