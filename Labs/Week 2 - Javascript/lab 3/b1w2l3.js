// begin hier je JavaScript commandos

// Diony Busker
// LPIAO19A2

// // OPDRACHT 1: Maak een Javascript applicatie die de tafel van 6 uitrekent
// alert("Tafel van 6");

// var tafel = 6;

// var antwoord = prompt("Vul hier een getal 1 t/m 10 in.");

// document.write("6 * " + antwoord + " = ")

// document.write(tafel * antwoord);


/* *************************************************************** */


// // OPDRACHT 2: Maak een Javascript applicatie die de tafel van 3 uitrekent
// alert("Tafel van 3");

// var tafel = 3;
// // alert(tafel);

// var antwoord = prompt("Vul hier een getal 1 t/m 10 in.");

// document.write("3 * " + antwoord + " = ")

// document.write(tafel * antwoord);


/* *************************************************************** */


// // OPDRACHT 3: Berekeningen uitvoeren
// // stap 1: + 6
// // stap 2: * 10
// // stap 3: / 5
// // stap 4: - 12

// var begingetal = 12;

// document.write("Begin getal: " + begingetal + linebreak);

// var plus = begingetal + 6;
// document.write(begingetal + " + " + 6 + " = " +  plus + linebreak);

// var meervoud = plus * 10;
// document.write(plus + " * " + 10 + " = " + meervoud + linebreak);

// var delen = meervoud / 5;
// document.write(meervoud + " / " + 5 + " = " + delen + linebreak);

// var min = delen - 12;
// document.write(delen + " - " + 12 + " = " + min + linebreak);

// document.write("Eind getal: " + min + linebreak);


/* *************************************************************** */


// OPDRACHT 4: Berekeningen uitvoeren met invoer van getal
// stap 1: + 6
// stap 2: * 10
// stap 3: / 5
// stap 4: - 12


var begin = prompt("Voer een getal in: ");
var begingetal = parseInt(begin);
var linebreak = "<br>"

document.write("Begin getal: " + begingetal + linebreak);

var result1 = begingetal + 6;
document.write(begingetal + " + " + 6 + " = " + result1 + linebreak);

var result2 = result1 * 10;
document.write(result1 + " * " + 10 + " = " + result2 + linebreak);

var result3 = result2 / 5;
document.write(result2 + " / " + 5 + " = " + result3 + linebreak);

var result4 = result3 - 12;
document.write(result3 + " - " + 12 + " = " + result4 + linebreak);

document.write("Eind getal: " + result4);


/* *************************************************************** */


// // FOR LOOP UITPROBEERSEL
// var i = 1;
// var tafel = prompt("Welke tafel wilt u berekenen");
// for (i == 1; i < 11; i++) {
//     document.write(i + " * " + tafel + " = " + (i * tafel) + "<br>"); 
// }
