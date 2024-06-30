document.addEventListener("DOMContentLoaded", () => {
  const div1 = document.querySelector(".simbol2");
  const div2 = document.querySelectorAll(".simbol1");

  let numAleatorio = function () {
    let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
    let valor1 = Math.floor(Math.random() * 12);
    return num[valor1];
  };

  function aleatorio2() {
    let simbo = ["♦", "♥", "♠", "♣"];
    let valor2 = Math.floor(Math.random() * 4);
    return simbo[valor2];
  }

  let randonColor = function () {
    let color = Math.floor(Math.random() * 2);
    for (let i = 0; i < div2.length; i++) {
      if (color == 1) {
        div2[i].style.color = "red";
      } else {
        div2[i].style.color = "black";
      }
    }
    return color;
  };
  
  randonColor();

  let simboloAleatorio = aleatorio2();

  for (let i = 0; i < div2.length; i++) {
    div2[i].innerHTML = simboloAleatorio;
  }

  div1.innerHTML += numAleatorio();
});
