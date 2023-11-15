/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

function generateNumber() {
  let randomNumber = Math.floor(Math.random() * 12) + 1;
  let isEven = (Math.floor(Math.random() * 1000) + 100) % 2 == 0;
  let numberDom = document.getElementById("numero");
  let topSpan = numberDom.querySelector(".top");
  let bottomSpan = numberDom.querySelector(".bottom");
  let cardSymbol = generateCardSymbol();
  //Establecer el texto interno
  numberDom.innerHTML = `${randomNumber} ${cardSymbol}`;
  //Agregar una clase de estilo
  numberDom.classList.add(isEven ? "rojo" : "negro");
  console.log({ isEven });
}
function generateCardSymbol() {
  const colores = ["♣", "♥", "♦", "♠"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  return `${colorAleatorio}`;
}
function changeColor(e) {
  let numberDom = document.querySelector("#numero");
  if (numberDom.classList.contains("negro")) {
    numberDom.classList.remove("negro");
    numberDom.classList.add("rojo");
  } else {
    numberDom.classList.remove("rojo");
    numberDom.classList.add("negro");
  }
}
window.onload = function() {
  //write your code here
  generateNumber();
  document
    .getElementsByClassName("card")
    .item(0)
    .addEventListener("click", generateNumber);
  let button = document.createElement("button");
  //button.innerText = cambiar de color
  (button.innerHTML = "<i>Cambia color</i>"),
    (button.addEventListener = ("click", changeColor));
  document.querySelector(".container");
  //.insertAdjacentElement("afterBegin", button);
};
