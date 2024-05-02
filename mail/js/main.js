'use strict';
//TRAMITE PROMPT CHIEDIAMO L EMAIL ALL UTENTE
const userMail = prompt('inserisci la tua mail');
console.log();
const validMail = ['ciccio@gmail.com', 'bambi@gmail.com', 'topogigio@gmail.com', 'sbrodolino@gmail.com', 'cortana@gmail.com'];
// console.log(validMail);
//DICHIARIAMO UN VARIABILE PER VALIDARE LA MAIL E STAMPARLA UNA SINGOLA VOLTA//
let acessDenied = true;
// ESECUZIONE DEL LOOP//
for (let i = 0; i < validMail.length; i++) {
    console.log(validMail[i]);
    if (userMail === validMail[i]) {
        acessDenied = false
    }
}
console.log(acessDenied);
//VALIDAZIONE EMAIL
if (acessDenied !== true) {
    console.log('hai l accesso');
} else {
    console.log('accesso negato');
}