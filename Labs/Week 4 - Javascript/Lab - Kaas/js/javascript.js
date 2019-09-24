// var start = document.write("<but ton>Start!</button>");

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

var error = "Dat is geen geldig antwoord. Probeer het opnieuw.";
var opzoek = "De kaas waar u naar op zoek bent, is "

var valid = false;


valid = false;
while (!valid) {
    var response1 = prompt(question1); // response1 = "Is de kaas geel?"
    if (response1 == "ja" || response1 == "Ja" || response1 == "jA" || response1 == "JA") {
        alert("Ja, de kaas is geel.");
        valid = true;
    } else if(response1 == "nee" || response1 == "Nee" || response1 == "nEe" || response1 == "neE" || response1 == "NEe" || response1 == "NeE" || response1 == "NEE") {
        alert("Nee, de kaas is niet geel.");
        valid = true;
    } else {
        alert(error);
    }
}
if (response1 == "ja" || response1 == "Ja" || response1 == "jA" || response1 == "JA") { // "Is de kaas geel?"
    valid = false
    while (!valid) {
        var response2 = prompt(question2); // response2 = "Zitten er gaten in?"
        if (response2 == "ja" || response2 == "Ja" || response2 == "jA" || response2 == "JA") {
            alert("Ja, de kaas heeft gaten.");
            valid = true;
        } else if (response2 == "nee" || response2 == "Nee" || response2 == "nEe" || response2 == "neE" || response2 == "NEe" || response2 == "NeE" || response2 == "NEE") {
            alert("Nee, de kaas heeft geen gaten.");
            valid = true;
        } else {
            alert(error);
        }
    }
}
if (response1 == "nee" || response1 == "Nee" || response1 == "nEe" || response1 == "neE" || response1 == "NEe" || response1 == "NeE" || response1 == "NEE") { // "Is de kaas geel?"
    valid = false;
    while (!valid) {
        var response3 = prompt(question3); // response3 = "Heeft de kaas blauwe schimmels?"
        if (response3 == "ja" || response3 == "Ja" || response3 == "jA" || response3 == "JA") {
            alert("Ja, de kaas heeft blauwe schimmels.");
            valid = true;
        } else if (response3 == "nee" || response3 == "Nee" || response3 == "nEe" || response3 == "neE" || response3 == "NEe" || response3 == "NeE" || response3 == "NEE") {
            alert("Nee, de kaas heeft geen blauwe schimmels.");
            valid = true;
        } else {
            alert(error);
        }
    }
}
if (response2 == "ja" || response2 == "Ja" || response2 == "jA" || response2 == "JA") { // "Zitten er gaten in?"
    valid = false;
    while (!valid) {
        var response4 = prompt(question5); // response4 = "Is de kaas belachelijk duur"
        if (response4 == "ja" || response4 == "Ja" || response4 == "jA" || response4 == "JA") {
            alert("Ja, de kaas is belachelijk duur.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer3 + "</strong>";
        } else if (response4 == "nee" || response4 == "Nee" || response4 == "nEe" || response4 == "neE" || response4 == "NEe" || response4 == "NeE" || response4 == "NEE") {
            alert("Nee, de kaas is niet belachelijk duur.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer4 + "</strong>";
        } else {
            alert(error);
        }
    }
}
if (response2 == "nee" || response2 == "Nee" || response2 == "nEe" || response2 == "neE" || response2 == "NEe" || response2 == "NeE" || response2 == "NEE") { // "Zitten er gaten in?"
    valid = false;
    while (!valid) {
        var response5 = prompt(question6); // response5 = "Is de kaas hard als steen?"
        if (response5 == "ja" || response5 == "Ja" || response5 == "jA" || response5 == "JA") {
            alert("Ja, de kaas is hard als steen.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer5 + "</strong>";
        } else if (response5 == "nee" || response5 == "Nee" || response5 == "nEe" || response5 == "neE" || response5 == "NEe" || response5 == "NeE" || response5 == "NEE") {
            alert("Nee, de kaas is niet hard als steen.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer6 + "</strong>";
        } else {
            alert(error);
        }
    }
}
if (response3 == "ja" || response3 == "Ja" || response3 == "jA" || response3 == "JA") { // "Heeft de kaas blauwe schimmels?"
    valid = false;
    while (!valid) {
        var response6 = prompt(question4); // response6 = "Heeft de kaas een korst?"
        if (response6 == "ja" || response6 == "Ja" || response6 == "jA" || response6 == "JA") {
            alert("Ja, de kaas heeft een korst.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer7 + "</strong>";
        } else if (response6 == "nee" || response6 == "Nee" || response6 == "nEe" || response6 == "neE" || response6 == "NEe" || response6 == "NeE" || response6 == "NEE") {
            alert("Nee, de kaas heeft geen korst.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer8 + "</strong>";
        } else {
            alert(error);
        }
    }
}
if (response3 == "nee" || response3 == "Nee" || response3 == "nEe" || response3 == "neE" || response3 == "NEe" || response3 == "NeE" || response3 == "NEE") { // "Heeft de kaas blauwe schimmels?"
    valid = false;
    while (!valid) {
        var response7 = prompt(question7); // response7 = "Heeft de kaas een korst?"
        if (response7 == "ja" || response7 == "Ja" || response7 == "jA" || response7 == "JA") {
            alert("Ja, de kaas heeft een korst.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer1 + "</strong>";
        } else if (response7 == "nee" || response7 == "Nee" || response7 == "nEe" || response7 == "neE" || response7 == "NEe" || response7 == "NeE" || response7 == "NEE") {
            alert("Nee, de kaas heeft geen korst.");
            valid = true;
            document.getElementById("kaassoort").innerHTML = opzoek + "<strong>" + answer2 + "</strong>";
        } else {
            alert(error);
        }
    }
}









// als question1 ja (true) is
//   dan volgt question2
// anders
//   dan volgt question3

//var answer = "";

// var question = prompt(question1); // Is de kaas geel?
// if (question == "ja") {
//     alert("Ja, de kaas is geel.");
//     prompt(question2); // Zitten er gaten in? PROMPT EINDIGT HIER
//     if (question == "ja") {
//         alert("Ja, de kaas heeft gaten.");
//         prompt(question5); // Is de kaas belachelijk duur?
//     } else if (question == "ja") {
//         alert("De kaassoort is " + answer3); // Emmenthaler
//     } else if (question == "nee") {
//         alert("De kaassoort is " + answer4); // Leerdammer 
//     } else if (question == "nee") {
//         alert("Nee, de kaas heeft geen gaten.")
//         prompt(question6); // Is de kaas hard als steen?
//     } else if (question == "ja") {
//         alert("De kaassoort is " + answer5); // Parmigiano Reggiano
//     } else if (question == "nee") {
//         alert("De kaassoort is " + answer6); // Goudse kaas
//     }
// } else if (question == "nee") {
//     alert("Nee, de kaas is niet geel.");
//     prompt(question3); // Heeft de kaas blauwe schimmels?
//     if (question == "ja") {
//         alert("Ja, de kaas heeft blauwe schimmels.");
//         prompt(question7 + "vraag7"); // Heeft de kaas een korst?
//     } else if (question == "ja") {
//         alert("De kaassoort is " + answer7); // Bleu de Rochbaron
//     } else if (question == "nee") {
//         alert("De kaassoort is " + answer8); // Fourme d'Ambert
//     } else if (question == "nee") {
//         alert("Nee, de kaas heeft geen korst.");
//         prompt(question4 + "vraag4"); // Heeft de kaas een korst?
//     } else if (question == "ja") {
//         alert("De kaassoort is " + answer1); // Camembert
//     } else if (question == "nee") {
//         alert("De kaassoort is " + answer2); // Mozzarella
//     }
// }

