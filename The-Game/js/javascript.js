var welkom = "Welkom in het Laboratorium in Area 51 ½.\nLukt het jou te ontsnappen?";
var error = "Dat is geen geldig antwoord. Om de optie die je wilt doen te kiezen, dan graag een '1' of een '2' invullen.";
var errorWait = "Dat is geen geldig antwoord. Vul een getal in.";
var lose = "Jammer! Je bent game over!"; // 9 keer lose
var win = "Gefeliciteerd! Je hebt de game gewonnen!"; // 1 keer win

alert(welkom);


event1valid = false;

console.log("Level 1"); // in de console.log wordt het level weergegeven
alert(event1);

while (!event1valid) {
    var event1response = prompt(event1option1 + "\n" + event1option2); // "\n" zorgt voor een nieuwe regel
        if (event1response == '1') { // keuze van speler is optie 1
            console.log("Level 2"); // in de console.log wordt het level weergegeven
            event1valid = true;
            alert(event2);
            console.log("Jammer, verloren!") // in de console.log wordt het eind weergegeven
            alert(lose); // je gaat hier game over
        } else if (event1response == '2') { // keuze van de speler is optie 2
            console.log("Level 2"); // in de console.log wordt het level weergegeven
            event1valid = true;
            alert(event3);
            event3valid = false;
            while (!event3valid) {
                var event3response = prompt(event3option1 + "\n" + event3option2); // "\n" zorgt voor een nieuwe regel
                if (event3response == '1') { // keuze van speler is optie 1
                    console.log("Level 3");
                    event3valid = true;
                    alert(event4);
                    event4valid = false;
                    while (!event4valid) {
                        var event4response = prompt(event4option1 + "\n" + event4option2); // "\n" zorgt voor een nieuwe regel
                        if (event4response == '1') { // keuze van speler is optie 1
                            console.log("Level 4"); // in de console.log wordt het level weergegeven
                            event4valid = true;
                            alert(event5);
                            console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                            alert(lose); // je gaat hier game over
                        } else if (event4response == '2') { // keuze van de speler is optie 2
                            console.log("Level 4"); // in de console.log wordt het level weergegeven
                            event4valid = true;
                            alert(event7);
                            console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                            alert(lose); // je gaat hier game over                
                        } else { // event 4
                            event4valid = false;
                            alert(error); // er is een ongeldig antwoord gegeven, of er is op enter gedrukt
                        }
                    }
                } else if (event3response == '2') { // keuze van speler is optie 2
                    console.log("Level 3"); // in de console.log wordt het level weergegeven
                    event3valid = true;
                    alert(event6);
                    event6valid = false;
                    while (!event6valid) {
                        var event6response = prompt(event6option1 + "\n" + event6option2); // "\n" zorgt voor een nieuwe regel
                        if (event6response == '1') { // keuze van speler is optie 1
                            console.log("Level 4"); // in de console.log wordt het level weergegeven
                            event6valid = true;
                            alert(event9);
                            event9valid = false;
                            while (!event9valid) {
                                var event9response = prompt(event9option1 + "\n" + event9option2); // "\n" zorgt voor een nieuwe regel
                                if (event9response == '1') { // keuze van speler is optie 1
                                    console.log("Level 5"); // in de console.log wordt het level weergegeven
                                    event9valid = true;
                                    alert(event10);
                                    console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                    alert(lose); // je gaat hier game over
                            } else if (event9response == '2') {
                                console.log("Level 5"); // in de console.log wordt het level weergegeven
                                event9valid = true;
                                alert(event8);
                                console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                alert(lose); // je gaat hier game over                
                            } else { // event 9
                                event9valid = false;
                                alert(error);
                            }
                        }
                    } else if (event6response == '2') { // event 6
                        console.log("Level 4"); // in de console.log wordt het level weergegeven
                        event6valid = true;
                        alert(event11);
                        event11valid = false;
                        while (!event11valid) {
                            var event11response = prompt(event11wait);
                            if (event11response > 10) {
                                console.log("Level 5"); // in de console.log wordt het level weergegeven
                                event11valid = true;
                                alert(event12);
                                console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                alert(lose); // je gaat hier game over                
                            } else if (event11response <= 10) {
                                console.log("Level 5"); // in de console.log wordt het level weergegeven
                                event11valid = true;
                                alert(event13);
                                event13valid = false;
                                while (!event13valid) {
                                    var event13response = prompt(event13option1 + "\n" + event13option2); // "\n" zorgt voor een nieuwe regel
                                    if (event13response == '1') {
                                        console.log("Level 6"); // in de console.log wordt het level weergegeven
                                        event13valid = true;
                                        alert(event14);
                                        event14valid = false;
                                        while (!event14valid) {
                                            var event14response = prompt(event14option1 + "\n" + event14option2); // "\n" zorgt voor een nieuwe regel
                                            if (event14response == '1') {
                                                console.log("Level 7"); // in de console.log wordt het level weergegeven
                                                event14valid = true;
                                                alert(event15);
                                                console.log("Gefeliciteerd, gewonnen!"); // in de console.log wordt het eind weergegeven
                                                alert(win); // hier win je
                                            } else if (event14response == '2') {
                                                console.log("Level 7"); // in de console.log wordt het level weergegeven
                                                event14valid = true;
                                                alert(event16);
                                                event16valid = false;
                                                while (!event16valid) {
                                                    var event16response = prompt(event16option1 + "\n" + event16option2); // "\n" zorgt voor een nieuwe regel
                                                    if (event16response == '1') {
                                                        console.log("Level 8"); // in de console.log wordt het level weergegeven
                                                        event16valid = true;
                                                        alert(event17);
                                                        console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                                        alert(lose); // je gaat hier game over                            
                                                    } else if (event16response == '2') {
                                                        console.log("Level 8"); // in de console.log wordt het level weergegeven
                                                        event16valid = true;
                                                        alert(event18);
                                                        console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                                        alert(lose); // je gaat hier game over                            
                                                    } else { // event 16
                                                        alert(error);
                                                        event16valid = false;
                                                    }
                                                }
                                            } else { // event 14
                                                alert(error);
                                                event14valid = false;
                                            }
                                        }
                                    } else if (event13response == '2') {
                                        console.log("Level 6");
                                        event13valid = true;
                                        alert(event19);
                                        console.log("Jammer, verloren!"); // in de console.log wordt het eind weergegeven
                                        alert(lose); // je gaat hier game over
                                    } else { // event 13
                                        alert(error);
                                        event13valid = false;
                                    }
                                }
                            } else { // event 11
                                alert(errorWait);
                                event11valid = false;
                            }
                        }
                    } else { // event 6
                        alert(error);
                        event6valid = false;
                    }
                }
            } else {
                alert(error);
                event3valid = false;
            }
        }
    } else { // event 1
        alert(error);
        event1valid = false;
    }
}
