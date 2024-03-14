// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// chiedere all'utente una parola
const askUser = prompt('Inserisci una parola:');

// verificare la parola
const parolaInvertita = wordcontrary(askUser);

// controntare le lettere se la parola letta al contrario è uguale a quella scritta






// FUNSTIONS
function wordcontrary(word) {
    const listWord = [];

    // scorrere le lettere da aggiungere
    for (let i = 0; i < word.length; i++) {
        listWord.push(word[i]);
    }

    // creare una stringa contenente la parola invertita
    let reversedWord = '';
    for (let i = listWord.length - 1; i >= 0; i--) {
        reversedWord += listWord[i];
    }

    return reversedWord;
}




