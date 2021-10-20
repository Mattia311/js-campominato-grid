/*L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range: 
con difficoltà 1 => tra 1 e 100 
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/

const askDifficulty = parseInt(prompt('Benvenuto nel gioco Campo Minato. Ora dovrei scegliere la difficoltà del gioco che va da 1 a 3'));

console.log(askDifficulty);

const containerEle = document.querySelector('.container')


if(askDifficulty == 1) {

    for (let i = 1; i <= 100; i++) {
        console.log(i);


        const elemento = `<div class= "grid_cell"> ${i} </div>`;
        containerEle.innerHTML += elemento;
        
         /*elemento.addEventListener('click', function() {
            this.style.background = 'blue'
        })*/
    }
} else if(askDifficulty == 2) {

    for (let i = 1; i <= 81; i++) {
        console.log(i);
        

        const elemento = `<div class= "grid_cell"> ${i} </div>`;
        containerEle.innerHTML += elemento;
    }
}else if (askDifficulty == 3) {

    for (let i = 1; i <= 49; i++) {
        console.log(i);
        
        const elemento = `<div class= "grid_cell"> ${i} </div>`;
        containerEle.innerHTML += elemento;
    }
}

const premere = document.querySelectorAll('.grid_cell');
console.log(premere);


 const elemento = `<div class= "grid_cell">  </div>`;
 
 elemento.addEventListener('click', function() {
    this.style.background = 'blue'
 })


for (let i = 1; i < 100; i++) {

        
    
}







