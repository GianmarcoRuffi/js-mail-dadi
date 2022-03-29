// 1) Chiedi all'utente la mail
// 2) Controlla che l'utente sia nella lista di chi può accedere
// 3) Genera un messaggio a seconda che sia vero o falso

const user = prompt(
  "Benvenuto utente, inserisci la lettera corrispondente alla tua Email. Email autorizzate finora: da A a F. (case sensitive)"
);

const authorizedMails = ["A", "B", "C", "D", "E", "F"];

let output = document.getElementById("output");

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
  output.innerHTML = "<h1>Benvenuto nel sistema!</h1>";
} else {
  output.innerHTML = "<h1>Accesso negato!</h1>";
}
