/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: 
con difficoltà 1 => tra 1 e 100 
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

const askDifficulty = parseInt(prompt('Benvenuto nel gioco Campo Minato. Ora dovrei scegliere la difficoltà del gioco che va da 1 a 3'));

console.log(askDifficulty);

const containerEle = document.querySelector('.container')


for (let i = 1; i <= 64; i++) {
    console.log(i);
    const number =  `${i}`;
    
    const elemento = document.createElement('div');
    elemento.className = 'grid_cell'
    containerEle.append(elemento);
    
    
    containerEle.innerHTML += number
    /*number.className = 'numeriApp'*/
    
    
    
    
    elemento.addEventListener('click', function() {
        this.style.background = 'blue'
    })
}



