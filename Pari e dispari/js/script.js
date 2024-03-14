// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiedere all'utente un numero da 1 a 5 e se sceglie pari o dispari
const numberUser = parseInt(prompt('scrivi un numero da 1 a 5'));
console.log(numberUser)
const evenoroddchoice = prompt('scegli tra pari o dispari');
console.log(evenoroddchoice)

// generare un numero random per il Pc da 1 a 5
const numberPc = Math.floor(Math.random() * 5) + 1;
console.log(numberPc)

// sommare il numero utente e il numero Pc
const sumNumUserPc = sumNumbers(numberUser, numberPc);
console.log('somma numeri', sumNumUserPc)

// se la somma dei numeri è pari e l'utente ha scelto pari 
// stampiamo il vincitore utente
// altrimenti scriviamo viceversa
const OutMessageUser = evenOrOdd(sumNumUserPc);
console.log('messaggio utente', OutMessageUser)

if(OutMessageUser === evenoroddchoice){
    alert(`Hai scelto ${numberUser} e ${evenoroddchoice}, il Pc ha scelto ${numberPc}, la somma dei due numeri è ${sumNumUserPc}, quindi il risultato è ${OutMessageUser}, hai vinto`);
}else{
    alert(`Hai scelto ${numberUser} e ${evenoroddchoice}, il Pc ha scelto ${numberPc}, la somma dei due numeri è ${sumNumUserPc}, quindi il risultato è ${OutMessageUser}, hai perso`);
}




// FUNCTIONS
function sumNumbers(num1, num2){
    const sum = num1 + num2;
    return sum;
}


// funzione che permette il calcolo di pari e dispari
// prende un numero (number), viene eseguito un controllo
// se il numero è divisibile per 2 senza lasciare resto
// allora il numero è pari 
// e la variabile message viene impostata su "pari"
// se è dispari la variabile message viene impostata su "dispari".
function evenOrOdd(number){
    let message = '';
    if(number % 2 === 0){
        message = 'pari';
    }else {
        message = 'dispari';
    }
    return message;
}