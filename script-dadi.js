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
  document.writeln(
    "<br>Hai vinto con: " + scoreUser + " ! Il pc ha totalizzato: " + scoreCPU
  );
} else {
  document.writeln(
    "<br>Ha vinto il pc con: " +
      scoreCPU +
      " ! Tu hai totalizzato: " +
      scoreUser
  );
}
