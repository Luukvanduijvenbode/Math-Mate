var random1 = 720 + Math.floor(Math.random(360));
var random2 = 720 + Math.floor(Math.random(360));
function draaiRad(){
    var deg = 3600;
    var random = Math.floor(Math.random() * 361);
    deg = deg + random;
    var uitkomst = 0;
    document.getElementById('dRad1').style.transform = "rotate("+deg+"deg)";
    document.getElementById('dRad1').style.transition = "4s";
    document.getElementById('dRad2').style.transform = "rotate("+deg+"deg)";
    document.getElementById('dRad2').style.transition = "7s";
    if(random1 <= 45)
        uitkomst = 8; {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 8";
    }
    if(random1 <= 90)
        uitkomst = 7; {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 7";
    }
    if(random1 <=135)
        uitkomst = 6;{
        document.getElementById("antwoord1").innerHTML = "Rad 1: 6";
    }
    if(random1 <=180){
        uitkomst = 5;
        document.getElementById("antwoord1").innerHTML = "Rad 1: 5";
    }
    if(random1 <=225){
        uitkomst = 4;
        document.getElementById("antwoord1").innerHTML = "Rad 1: 4";
    }
    if(random1 <=270)
        uitkomst = 3; {
        document.getElementById("antwoord1").innerHTML = "Rad 1: 3";
    }
    if(random1<=315){
    uitkomst = 2;
        document.getElementById("antwoord1").innerHTML = "Rad 1: 2";
        }
    if(random1 <=360)
        uitkomst = 1; {
    document.getElementById("antwoord1").innerHTML = "Rad 1: 1";
    }

    if(random2 <= 45)
        uitkomst = 8; {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 8";
    }
    if(random2 <= 90)
        uitkomst = 7;{
        document.getElementById("antwoord2").innerHTML = "Rad 2: 7";
    }
    if(random2 <=135)
        uitkomst = 6;{
        document.getElementById("antwoord2").innerHTML = "Rad 2: 6";
    }
    if(random2 <=180){
        uitkomst = 5;
        document.getElementById("antwoord2").innerHTML = "Rad 2: 5";
    }
    if(random2 <=225){
        uitkomst = 4;
        document.getElementById("antwoord2").innerHTML = "Rad 2: 4";
    }
    if(random2 <=270)
        uitkomst = 3; {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 3";
    }
    if(random2 <=315){
        uitkomst = 2;
        document.getElementById("antwoord2").innerHTML = "Rad 2: 2";
        }
        if(random2 <=360)
        uitkomst = 1; {
        document.getElementById("antwoord2").innerHTML = "Rad 2: 1";
    }
    document.getElementById("volantwoord").innerHTML = antwoord3;

}
