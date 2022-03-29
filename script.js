// 1) Chiedi all'utente la mail
// 2) Controlla che l'utente sia nella lista di chi può accedere
// 3) Genera un messaggio a seconda che sia vero o falso

const user = prompt("Inserisci la tua email");

const authorizedMails = ["A", "B", "C", "D", "E", "F"];

let isInvited = false;
let i = 0;

while (!isInvited && i != authorizedMails.length) {
  console.log(i);

  if (user === authorizedMails[i]) {
    isInvited = true;
  }

  i++;
}

if (isInvited) {
  document.writeln("Benvenuto!");
} else {
  document.writeln("Accesso negato!");
}

// 1) Definizione utenti
// 2) Assegnazione dei dadi
// 3) Generazione numero dei dadi
// 4) Confronto tra i due risultati e assegnazione vincitore

const max = 6;

let scoreUser = Math.floor(Math.random() * max) + 1;
console.log(scoreUser);

let scoreCPU = Math.floor(Math.random() * max) + 1;
console.log(scoreCPU);

if (scoreUser > scoreCPU) {
  document.writeln("<br>Hai vinto con " + scoreUser);
} else {
  document.writeln("<br>Ha vinto il pc con " + scoreCPU);
}
