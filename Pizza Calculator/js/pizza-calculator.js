// Diony Busker
// LPIAO19A2

// Opdracht: Pizza Calculator

// de linebreak zorgt voor een nieuwe regel
var linebreak = "<br>"

// diverse pizza formaten waar uit gekozen kan worden
var pizzaSmall = prompt("Hoeveel Small pizza's wenst u?");
var pizzaMedium = prompt("Hoeveel Medium pizza's wenst u?");
var pizzaLarge = prompt("Hoeveel Large pizza's wenst u?");

// standaard prijzen voor de diverse formaten pizza's
const PRICE_SMALL = 7.95;
const PRICE_MEDIUM = 9.95;
const PRICE_LARGE = 11.95;


// na de prompts komt er op het scherm de volgende bestelling te staan (met de eigen ingevulde gegevens)
document.write("Uw bestelling is als volgt: " + linebreak);
var priceSmall = parseFloat(pizzaSmall * PRICE_SMALL).toFixed(2);
// priceSmall.toFixed(2);
document.write("<strong>" + pizzaSmall + "× </strong>" + " " + "Small pizza" + " " + "(€ " + PRICE_SMALL + " p/s, totaal € " + priceSmall + ")" + linebreak);
var priceMedium = parseFloat(pizzaMedium * PRICE_MEDIUM).toFixed(2);
// priceMedium.toFixed(2);
document.write("<strong>" + pizzaMedium + "× </strong>" + " " + "Medium pizza" + " " + "(€ " + PRICE_MEDIUM + " p/s, totaal € " + priceMedium + ")" + linebreak);
var priceLarge = parseFloat(pizzaLarge * PRICE_LARGE).toFixed(2);
// priceLarge.toFixed(2);
document.write("<strong>" + pizzaLarge + "× </strong>" + " " + "Large pizza" + " " + "(€ " + PRICE_LARGE + " p/s, totaal € " + priceLarge + ")" + linebreak);

// hier wordt de uiteindelijke totaalprijs van alle pizza's verrekend
var totalPriceSmall = pizzaSmall * PRICE_SMALL;
var totalPriceMedium = pizzaMedium * PRICE_MEDIUM;
var totalPriceLarge = pizzaLarge * PRICE_LARGE;
var totalPrice = parseFloat(totalPriceSmall + totalPriceMedium + totalPriceLarge).toFixed(2);;

// de totaalprijs wordt hiermee op het scherm getoond
document.write("Dat maakt dan totaal: <strong> € " + totalPrice + "</strong>");
