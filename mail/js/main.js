'use strict';
//TRAMITE PROMPT CHIEDIAMO L EMAIL ALL UTENTE
const userMail = prompt('inserisci la tua mail');
const validMail = ['ciccio@gmail.com', 'bambi@gmail.com', 'topogigio@gmail.com', 'sbrodolino@gmail.com', 'cortana@gmail.com'];
console.log(validMail);

if (userMail === validMail) {
    console.log('hai l accesso');
} else if (userMail !== validMail) {
    console.log('accesso negato')

}