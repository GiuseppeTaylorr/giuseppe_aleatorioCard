/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

let numberSup = document.getElementById("numero-superior");
let numberInf = document.getElementById("numero-inferior");
let simbolo = document.getElementById("simbolo");
function generateNumber(numberDom) {
  let randomNumber = Math.floor(Math.random() * 12) + 1;
  let isEven = (Math.floor(Math.random() * 1000) + 100) % 2 == 0;
  let cardSymbol = generateCardSymbol();
  numberDom.forEach(element => {
    //Establecer el texto interno
    if (element == simbolo) {
      element.innerHTML = ` ${cardSymbol}`;
    } else {
      element.innerHTML = `${randomNumber} ${cardSymbol}`;
    }

    //Agregar una clase de estilo
    element.classList.add(isEven ? "rojo" : "negro");
    console.log({ isEven });
  });
}
function generateCardSymbol() {
  const colores = ["♣", "♥", "♦", "♠"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  return `${colorAleatorio}`;
}
function changeColor(numberDom) {
  numberDom.forEach(element => {
    if (element.classList.contains("negro")) {
      element.classList.remove("negro");
      element.classList.add("rojo");
    } else {
      element.classList.remove("rojo");
      element.classList.add("negro");
    }
  });
}
window.onload = function() {
  //write your code here
  generateNumber([numberSup, numberInf, simbolo]);
  document
    .getElementsByClassName("card")
    .item(0)
    .addEventListener("click", generateNumber([numberSup, numberInf, simbolo]));
  let button = document.createElement("button");
  //button.innerText = cambiar de color
  (button.innerHTML = "<i>Cambia color</i>"),
    (button.addEventListener =
      ("click", changeColor([numberSup, numberInf, simbolo])));
  document.querySelector(".container");
  //.insertAdjacentElement("afterBegin", button);
};
