// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedere all'utente un numero da 1 a 5 e se sceglie pari o dispari
const numberUser = 8;
const evenoroddchoice = 'pari';

// generare un numero random per il Pc da 1 a 5
const numberPc = Math.floor(Math.random() * 5) + 1;
console.log(numberPc)

// sommare il numero utente e il numero Pc
const sumNumUserPc = sumNumbers(numberUser, numberPc);
console.log(sumNumUserPc)

// se la somma dei numeri è pari e l'utente ha scelto pari 


    // stampiamo il vincitore utente
    // altrimenti scriviamo viceversa


// FUNCTIONS
function sumNumbers(num1, num2){
    const sum = num1 + num2;
    return sum;
}

let message;
function evenorodd(num1, num2){
    if(num1 % 2 === 0){
        message = 'pari';
    }else {
        message = 'dispari';
    }
}