// begin hier je JavaScript commandos

// Diony Busker
// LPIAO19A2

// // OPDRACHT 1: Maak een Javascript applicatie die de tafel van 6 uitrekent
// alert("Tafel van 6");

// var tafel = 6;
// // alert(tafel);

// var antwoord = prompt("Vul hier een getal 1 t/m 10 in.");

// document.write("6 * " + antwoord + " = ")

// document.write(tafel * antwoord);


// // OPDRACHT 2: Maak een Javascript applicatie die de tafel van 3 uitrekent
// alert("Tafel van 3");

// var tafel = 3;
// // alert(tafel);

// var antwoord = prompt("Vul hier een getal 1 t/m 10 in.");

// document.write("3 * " + antwoord + " = ")

// document.write(tafel * antwoord);


// // OPDRACHT 3: Berekeningen uitvoeren
// // stap 1: + 6
// // stap 2: * 10
// // stap 3: / 5
// // stap 4: - 12

// var begingetal = 12;
// alert("Begin getal: " + begingetal);

// var plus = begingetal + 6;
// alert(begingetal + " + " + 6 + " = " +  plus);

// var meervoud = plus * 10;
// alert(plus + " * " + 10 + " = " + meervoud);

// var delen = meervoud / 5;
// alert(meervoud + " / " + 5 + " = " + delen);

// var min = delen - 12;
// alert(delen + " - " + 12 + " = " + min);

// alert("Eind getal: " + min);


/* *************************************************************** */


// // OPDRACHT 4: Berekeningen uitvoeren met invoer van getal
// // stap 1: + 6
// // stap 2: * 10
// // stap 3: / 5
// // stap 4: - 12


// var begin = prompt("Voer een getal in: ");
// var begingetal = parseInt(begin);

// alert("Begin getal: " + begingetal);

// var result1 = begingetal + 6;
// alert(begingetal + " + " + 6 + " = " + result1);

// var result2 = result1 * 10;
// alert(result1 + " * " + 10 + " = " + result2);

// var result3 = result2 / 5;
// alert(result2 + " / " + 5 + " = " + result3);

// var result4 = result3 - 12;
// alert(result3 + " - " + 12 + " = " + result4);

// alert("Eind getal: " + result4);


// FOR LOOP UITPROBEERSEL
var i = 1;
var tafel = prompt("Welke tafel wilt u berekenen");
for (i == 1; i < 11; i++) {
    document.write(tafel+"*"+i+"="+(tafel*i)+"<br>"); 
}

