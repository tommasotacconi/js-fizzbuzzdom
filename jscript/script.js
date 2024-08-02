console.log('JS OK')

/* 
Passaggi del codice
1. uso due variabili di appoggio, una per fare il conteggio ad ogni passaggio
e l'altra per memorizzare i risultati ottenuti ad ogni passaggio 
2. con un ciclo for stampo i numeri da 1 a 100 usando una variabile
usando le due variabili del primo punto
3. aggiungo una condizione al ciclo per sostituire a FizzBuzzCounter
la stringa fizz ogni volta che il numero del passaggio da resto uguale
a 0 se diviso per 3
4. faccio la stessa operazione del punto precedente ma con una divisione
per 5
5. applico i punti 3 e 4 contemporaneamente
6. aggiungo alla variabile che annota tutti i passaggi un tag html che
contenga il singolo conteggio in modo che poi possa manipolare quest'ultimo
con il suo tag genitore (tag contenitore è li e nell'html si preinserisce un ul)
7. aggiunta variabile FizzBuzzCounterColor per cambiare sfondo ai multipli
fizz, buzz e fizzbuzz
*/

// Fase preparatoria
// 1.
let FizzBuzzCounter = ''
let FizzBuzzCounterNotepad = '';
const list = document.querySelector('ul');
let FizzBuzzCounterColor = ''

// Fase di recupero dati

// Fase di elaborazione dati
for (let i = 1; i <= 100; i++) {

  FizzBuzzCounter = i

  // 3.
  if (i % 3 === 0) {
    FizzBuzzCounter = 'fizz';
    FizzBuzzCounterColor = 'lightseagreen-bg';
  } 
  // 4.
  if (i % 5 === 0) {
    FizzBuzzCounter = 'buzz';
    FizzBuzzCounterColor = 'cadetblue-bg';
  } 
  
  // 5.
  if (i % 3 === 0 && i % 5 === 0) {
    FizzBuzzCounter = 'fizzbuzz';
    FizzBuzzCounterColor = 'darkcyan-bg';
  }
  
  FizzBuzzCounterNotepad += `<li class=${FizzBuzzCounterColor}>` + FizzBuzzCounter + '</li>'
  FizzBuzzCounterColor = 'skyblue'
}

console.log(FizzBuzzCounterNotepad)
list.innerHTML = FizzBuzzCounterNotepad

// Fase di restituzione dati
  


