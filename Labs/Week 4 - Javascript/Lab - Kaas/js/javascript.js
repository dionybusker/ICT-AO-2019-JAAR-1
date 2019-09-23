// var start = document.write("<button onclick='myFunction()'>Start!</button>");

var question1 = "Is de kaas geel?";
var question2 = "Zitten er gaten in?";
var question3 = "Heeft de kaas blauwe schimmels?";
var question4 = "Heeft de kaas een korst?";
var question5 = "Is de kaas belachelijk duur?";
var question6 = "Is de kaas hard als steen?";
var question7 = "Heeft de kaas een korst?"; // zelfde als question4

var answer1 = "Camembert"; // als uitkomst true
var answer2 = "Mozzarella"; // als uitkomst false
var answer3 = "Emmenthaler"; // als uitkomst true
var answer4 = "Leerdammer"; // als uitkomst false
var answer5 = "Parmigiano Reggiano"; // als uitkomst true
var answer6 = "Goudse kaas"; // als uitkomst false
var answer7 = "Bleu de Rochbaron"; // als uitkomst true
var answer8 = "Fourme d'Ambert"; // als uitkomst false

var ja = true;
var nee = false;

alert("Test");
prompt(question1);

if (prompt(question1) == ja) {
    prompt(question2);
} else {
    prompt(question3);
}