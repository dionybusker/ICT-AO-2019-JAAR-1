// Diony Busker
// LPIAO19A2

// Opdracht: Pizza Calculator


var linebreak = "<br>" // de linebreak zorgt voor een nieuwe regel

var pizzaSmall = prompt("Hoeveel Small pizza's wenst u?"); // hier wordt een getal ingevuld worden, wordt er 2 ingevuld dan worden er op het eind 2 pizza's verrekend

var pizzaMedium = prompt("Hoeveel Medium pizza's wenst u?"); // hier wordt een getal ingevuld worden, wordt er 2 ingevuld dan worden er op het eind 2 pizza's verrekend

var pizzaLarge = prompt("Hoeveel Large pizza's wenst u?"); // hier wordt een getal ingevuld worden, wordt er 2 ingevuld dan worden er op het eind 2 pizza's verrekend

const priceSmall = 8; // dit is de prijs voor een Small pizza
const priceMedium = 10; // dit is de prijs voor een Medium pizza
const priceLarge = 12; // dit is de prijs voor een Large pizza

// na de prompts komt er op het scherm de volgende bestelling te staan (met de eigen ingevulde gegevens)
document.write("Uw bestelling is als volgt: " + linebreak);
document.write(pizzaSmall + "×" + " " + "Small pizza" + " " + "(€ " + priceSmall + " p/s)" + linebreak); // hier wordt de hoeveelheid aan Small pizza's weergegeven, de prijs voor een enkele pizza staat er achter
document.write(pizzaMedium + "×" + " " + "Medium pizza" + " " + "(€ " + priceMedium + " p/s)" + linebreak); // hier wordt de hoeveelheid aan Medium pizza's weergegeven, de prijs voor een enkele pizza staat er achter
document.write(pizzaLarge + "×" + " " + "Large pizza" + " " + "(€ " + priceLarge + " p/s)" + linebreak); // hier wordt de hoeveelheid aan Large pizza's weergegeven, de prijs voor een enkele pizza staat er achter

var totalPrice = (pizzaSmall*priceSmall) + (pizzaMedium*priceMedium) + (pizzaLarge*priceLarge); // hier wordt de uiteindelijke totaalprijs van alle pizza's verrekend

document.write("Dat maakt dan totaal: € " + totalPrice); // de totaalprijs wordt hiermee op het scherm getoond