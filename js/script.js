const sectionCards = document.querySelector("div.cards");
const card = document.querySelector("div.card");

const images = [
  {img: "assets/jordan/jordan1.svg"},
  {img: "assets/jordan/jordan2.svg"},
  {img: "assets/jordan/jordan3.svg"},
  {img: "assets/jordan/jordan4.svg"}, 
  {img: "assets/jordan/jordan5.svg"},
  {img: "assets/jordan/jordan6.svg"},
  {img: "assets/jordan/jordan7.svg"},
  {img: "assets/jordan/jordan8.svg"},
]

images.map(image => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = image.img;
  sectionCards.appendChild(cardClone);
} );

card.remove();
