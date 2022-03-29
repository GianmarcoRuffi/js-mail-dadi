// 1) Chiedi all'utente la mail
// 2) Controlla che l'utente sia nella lista di chi può accedere
// 3) Genera un messaggio a seconda che sia vero o falso

let user = prompt("Inserisci la tua email");

const authorizedMails = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < authorizedMails.length; i++) {
  console.log(authorizedMails[i]);

  if (user === authorizedMails[i]) {
    console.log("Benvenuto " + user + " !");
  } else user != authorizedMails[i];
  console.log("Accesso Negato!");
}
