var error = "Dat is geen geldig antwoord. Om de optie die je wilt doen te kiezen, dan graag een '1' of een '2' invullen.";
var lose = "Jammer! Je bent game over!";
var win = "Gefeliciteerd! Je hebt de game gewonnen!"

alert("dit is een game");

alert(event1)
var event1response = prompt(event1option1 + "\n" + event1option2); // "\n" zorgt voor een nieuwe regel
if (event1response == '1') { // keuze van speler is optie 1
    console.log("Level 1");
    alert(event2);
    alert(lose); // je gaat hier game over
} else if (event1response == '2') { // keuze van speler is optie 2
    console.log("Level 2");
    alert(event3);
    var event3response = prompt(event3option1 + "\n" + event3option2);
    if (event3response == '1') { // keuze van speler is optie 1
        alert(event4);
        var event4response = prompt(event4option1 + "\n" + event4option2);
        if (event4response == '1') { // keuze van speler is optie 1
            alert(event5);
            alert(lose); // je gaat hier game over
        } else if (event4response == '2') { // keuze van speler is optie 2
            alert(event7);
            alert(lose); // je gaat hier game over
        } else {
            alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
        }
    } else if (event3response == '2') { // keuze van speler is optie 2
    alert(event6);
        var event6response = prompt(event6option1 + "\n" + event6option2); // "\n" zorgt voor een nieuwe regel
        if (event6response == '1') { // keuze van speler is optie 1
            alert(event10);
            var event10response = prompt(event10option1 + "\n" + event10option2); // "\n" zorgt voor een nieuwe regel
            if (event10response == '1') { // keuze van speler is optie 1
                alert(event11);
                alert(lose); // je gaat hier game over
            } else if (event10response == "2") { // keuze van speler is optie 1
                alert(event8);
                alert(lose); // je gaat hier game over
            } else {
                alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
            }
        } else if (event6response == '2') { // keuze van speler is optie 2
            alert(event12);
            var event12response = prompt(event12option1 + "\n" + event12option2);
            if (event12response == '1') { // keuze van speler is optie 1
                alert(event13);
                alert(lose); // je gaat hier game over
            } else if (event12response == '2') { // keuze van speler is optie 2
                alert(event14);
                var event14response = prompt(event14option1 + "\n" + event14option2);
                if (event14response == '1') { // keuze van speler is optie 1
                    alert(event15);
                    var event15response = prompt(event15option1 + "\n" + event15option2);
                    if (event15response == '1') { // keuze van speler is optie 1
                        alert(event16);
                        alert(win); // hier win je
                    } else if (event15response == '2') { // keuze van speler is optie 2
                        alert(event17);
                        var event17response = prompt(event17option1 + "\n" + event17option2);
                        if (event17response == '1') { // keuze van speler is optie 1
                            alert(event18);
                            alert(lose); // je gaat hier game over
                        } else if (event17response == '2') { // keuze van speler is optie 2
                            alert(event19);
                            alert(lose); // je gaat hier game over
                        } else {
                            alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                        }
                    } else {
                        alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                    }
                } else if (event14response == '2') { // keuze van speler is optie 2
                    alert(event17);
                    alert(lose); // je gaat hier game over
                } else {
                    alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                }
            } else {
                alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
            }
        } else {
            alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
        }
    } else {
        alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
    }
} else {
    alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
}
