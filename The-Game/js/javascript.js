var error = "Dat is geen geldig antwoord. Om de optie die je wilt doen te kiezen, dan graag een '1' of een '2' invullen.";
var lose = "Jammer! Je bent game over!"; // 9 keer lose
var win = "Gefeliciteerd! Je hebt de game gewonnen!" // 1 keer win

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
    var event3response = prompt(event3option1 + "\n" + event3option2); // "\n" zorgt voor een nieuwe regel
    if (event3response == '1') { // keuze van speler is optie 1
        alert(event4);
        var event4response = prompt(event4option1 + "\n" + event4option2); // "\n" zorgt voor een nieuwe regel
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
            alert(event9);
            var event9response = prompt(event9option1 + "\n" + event9option2); // "\n" zorgt voor een nieuwe regel
            if (event9response == '1') { // keuze van speler is optie 1
                alert(event10);
                alert(lose); // je gaat hier game over
            } else if (event9response == "2") { // keuze van speler is optie 1
                alert(event8);
                alert(lose); // je gaat hier game over
            } else {
                alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
            }
        } else if (event6response == '2') { // keuze van speler is optie 2
            alert(event11);
            var event11response = prompt(event11option1 + "\n" + event11option2); // "\n" zorgt voor een nieuwe regel
            if (event11response == '1') { // keuze van speler is optie 1
                alert(event12);
                alert(lose); // je gaat hier game over
            } else if (event11response == '2') { // keuze van speler is optie 2
                alert(event13);
                var event13response = prompt(event13option1 + "\n" + event13option2); // "\n" zorgt voor een nieuwe regel
                if (event13response == '1') { // keuze van speler is optie 1
                    alert(event14);
                    var event14response = prompt(event14option1 + "\n" + event14option2); // "\n" zorgt voor een nieuwe regel
                    if (event14response == '1') { // keuze van speler is optie 1
                        alert(event15);
                        alert(win); // hier win je
                    } else if (event14response == '2') { // keuze van speler is optie 2
                        alert(event16);
                        var event16response = prompt(event16option1 + "\n" + event16option2); // "\n" zorgt voor een nieuwe regel
                        if (event16response == '1') { // keuze van speler is optie 1
                            alert(event17);
                            alert(lose); // je gaat hier game over
                        } else if (event16response == '2') { // keuze van speler is optie 2
                            alert(event18);
                            alert(lose); // je gaat hier game over
                        } else {
                            alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                        }
                    } else {
                        alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                    }
                } else if (event13response == '2') { // keuze van speler is optie 2
                    alert(event19);
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
