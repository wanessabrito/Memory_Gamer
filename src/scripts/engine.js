const emojis = ["🦉", "🦉", "🦄", "🦄", "🐇", "🐇", "🐱", "🐱", "🐉", "🐉", "🐨", "🐨", "🐳", "🐳", "🦆", "🦆"];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

shuffleEmojis.forEach((emoji) => {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = emoji;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
});

function handleClick() {
  if (openCards.length < 2 && !openCards.includes(this)) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length == 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  let [card1, card2] = openCards;

  if (card1.innerHTML === card2.innerHTML) {
    card1.classList.add("boxMatch");
    card2.classList.add("boxMatch");
  } else {
    card1.classList.remove("boxOpen");
    card2.classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}