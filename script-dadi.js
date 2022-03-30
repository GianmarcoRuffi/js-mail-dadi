// 1) Definizione utenti
// 2) Assegnazione dei dadi
// 3) Generazione numero dei dadi
// 4) Confronto tra i due risultati e assegnazione vincitore

const max = 6;

let output = document.getElementById("output");

//

document.getElementById("dice").addEventListener("click", clickDice);

//

function clickDice() {
  let scoreUser = Math.floor(Math.random() * max) + 1;
  console.log(scoreUser);

  let scoreCPU = Math.floor(Math.random() * max) + 1;
  console.log(scoreCPU);

  if (scoreUser > scoreCPU) {
    output.innerHTML =
      "<p>Hai vinto con: " +
      scoreUser +
      " ! Il pc ha totalizzato: " +
      scoreCPU +
      "</p>";
  } else if (scoreUser === scoreCPU) {
    output.innerHTML =
      "<p>Pareggio! PC: " + scoreCPU + " Tu: " + scoreUser + "</p>";
  } else {
    output.innerHTML =
      "<p>Ha vinto il pc con: " +
      scoreCPU +
      " ! Tu hai totalizzato: " +
      scoreUser +
      "</p>";
  }
}
