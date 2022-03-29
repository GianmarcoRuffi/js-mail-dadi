// 1) Chiedi all'utente la mail
// 2) Controlla che l'utente sia nella lista di chi può accedere
// 3) Genera un messaggio a seconda che sia vero o falso

const user = prompt(
  "Benvenuto utente, inserisci la lettera corrispondente alla tua Email. Email autorizzate finora: da A a F."
);

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
  document.writeln("Benvenuto nel sistema!");
} else {
  document.writeln("Accesso negato!");
}
