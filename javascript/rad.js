var num1 = 720 + Math.floor(Math.random(360));
var num2 = 720 + Math.floor(Math.random(360));
var antwoord3 = num1 + num2;
function draaiRad(){
    document.getElementById('dRad1').style.transform = "rotate(" + num1 + "deg)";
    document.getElementById('dRad1').style.transition = "5s";
    document.getElementById('dRad2').style.transform = "rotate(" + num2 + "deg)";
    document.getElementById('dRad2').style.transition = "5s";
    if (num1 > 780) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 1";
    }
    if (num1 > 840) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 2";
    }
    if (num1 > 900) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 3";
    }
    if (num1 > 960) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 4";
    }
    if (num1 > 1020) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 5";
    }
    if (num1 > 1080) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 6";
    }
    if (num1 > 1140) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 7";
}
    if (num1 > 1200) {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 8";
}

    if (num2 > 780) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 1";
    }
    if (num2 > 840) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 2";
    }
    if (num2 > 900) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 3";
    }
    if (num2 > 960) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 4";
    }
    if (num2 > 1020) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 5";
    }
    if (num2 > 1080) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 6";
    }
    if (num2 > 1140) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 5";
    }
    if (num2 > 1200) {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 6";
    }
    document.getElementById("volantwoord").innerHTML = antwoord3;

}