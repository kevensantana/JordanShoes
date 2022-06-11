const sectionCards = document.querySelector("section.cards");
const card = document.querySelector("div.card");

const image = [
  {img: ""}
]

image.map(image => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector(".img").src = image.img;
  sectionCards.appendChild(cardClone);
} );

card.remove();
