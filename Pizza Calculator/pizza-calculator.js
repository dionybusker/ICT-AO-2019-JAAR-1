// begin hier je JavaScript commandos

// Diony Busker
// LPIAO19A2


var linebreak = "<br>"

var pizzaSmall = prompt("Hoeveel Small pizza's wenst u?");

var pizzaMedium = prompt("Hoeveel Medium pizza's wenst u?");

var pizzaLarge = prompt("Hoeveel Large pizza's wenst u?");

const priceSmall = 8;
const priceMedium = 10;
const priceLarge = 12;

document.write("Uw bestelling is als volgt: " + linebreak);
document.write(pizzaSmall + "×" + " " + "Small pizza" + " " + "(€ " + priceSmall + ")" + linebreak);
document.write(pizzaMedium + "×" + " " + "Medium pizza" + " " + "(€ " + priceMedium + ")" + linebreak);
document.write(pizzaLarge + "×" + " " + "Large pizza" + " " + "(€ " + priceLarge + ")" + linebreak);

var totalPrice = (pizzaSmall*priceSmall) + (pizzaMedium*priceMedium) + (pizzaLarge*priceLarge)

document.write("Dat maakt dan totaal: € " + totalPrice);