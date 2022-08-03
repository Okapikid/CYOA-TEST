const engineeringLone = document.getElementById("engineeringLone");
const beginEl = document.querySelector(".begin");
const atrium1El = document.querySelector(".atrium1");
const engineering1El = document.querySelector(".engineering1");
const kitchen1El = document.querySelector(".kitchen1");
const command1El = document.querySelector(".command1");
const commandShownEl = document.querySelector(".commandShown");
const commandHiddenOneEl = document.querySelector(".commandHiddenOne");
const commandHiddenTwoEl = document.querySelector(".commandHiddenTwo");
const acknowledgmentEl = document.querySelector(".acknowledgment");
const botany2El = document.querySelector(".botany2");

beginLone.addEventListener("click", beginGame);
beginRone.addEventListener("click", beginGame);
atriumLone.addEventListener("click", engineering1);
atriumRone.addEventListener("click", kitchen1);
engineeringLone.addEventListener("click", atrium1);
kitchenLone.addEventListener("click", atrium1);
kitchenRone.addEventListener("click", command1);
acknowledgeLone.addEventListener("click", acknowledge);
commandLone.addEventListener("click", botany2);
commandRone.addEventListener("click", kitchen1);
botanyLone.addEventListener("click", command2);

function beginGame() {
  beginEl.classList.add("hide");
  atrium1El.classList.remove("hide");
  // trigger timer here
}

function engineering1() {
  atrium1El.classList.add("hide");
  engineering1El.classList.remove("hide");
}

function atrium1() {
  engineering1El.classList.add("hide");
  kitchen1El.classList.add("hide");
  atrium1El.classList.remove("hide");
}
function kitchen1() {
  atrium1El.classList.add("hide");
  kitchen1El.classList.remove("hide");
}

function acknowledge() {
  commandShownEl.classList.add("hide");
  commandHiddenOneEl.classList.remove("hide");
  commandHiddenTwoEl.classList.remove("hide");
  document.getElementById("acknowledgementEl").innerText =
    "Thank you for acknowledging the contamination alert. Don't forget to like and subscribe for more contamination alert content.";
}

function command1() {
  kitchen1El.classList.add("hide");
  command1El.classList.remove("hide");
}

function botany2() {
  command1El.classList.add("hide");
  botany2El.classList.remove("hide");
}

function command2() {
  botany2El.classList.add("hide");
  command2El.classlist.remove("hide");
}
