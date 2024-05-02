'use strict';
//GENEREZIONE RANDOMICA NUMERO PER UTENTE E PC METODO CLASSICO//
// const pcNumber = Math.floor(Math.random() * 6 + 1);
// console.log(pcNumber, 'scelta del pc');
// const userNumber = Math.floor(Math.random() * 6 + 1);
// console.log(userNumber, 'scelta utente');


//GENERAZIONE RANDOMICA TRAMITE ARRAY//
const pcNumber = [1, 2, 3, 4, 5, 6];
const varPcNumber = pcNumber[Math.floor(pcNumber.length * Math.random())];
console.log(varPcNumber, 'numero del pc');
const userNumber = [1, 2, 3, 4, 5, 6];
const varUserNumber = userNumber[Math.floor(userNumber.length * Math.random())];
console.log(varUserNumber, 'numero del giocatore');


// VINCITORE//
if (varPcNumber > varUserNumber) {
    console.log('il pc vince');
} else if (varPcNumber < varUserNumber) {
    console.log('il giocatore vince');
} else {
    console.log('pareggio');
}