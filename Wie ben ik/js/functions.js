// hier komen functions

// als de gebruiker 20px omlaag scrollt vanaf de top van de pagina, komt de button tevoorschijn
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myButton").style.display = "block";
    } else {
        document.getElementById("myButton").style.display = "none";
    }
}

// wanneer de gebruiker op de button klikt, wordt er automatisch omhoog gescrollt
function topFuntion() {
    document.documentElement.scrollTop = 0;
}