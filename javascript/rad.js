function draaiRad(){
<<<<<<< HEAD
    var deg = 3600;
    var random = Math.floor(Math.random() * 361);
    deg = deg + random;
    var uitkomst = 0;
    if(random <= 45){
        uitkomst = 8;
    }else if(random <= 90){
        uitkomst = 7;
    }else if(random <=135){
        uitkomst = 6;
    }else if(random <=180){
        uitkomst = 5;
    }else if(random <=225){
        uitkomst = 4;
    }else if(random <=270){
        uitkomst = 3;
    }else if(random <=315){
        uitkomst = 2;
    }else if(random <=360){
        uitkomst = 1;
    }


    document.getElementById('dRad1').style.transform = "rotate("+deg+"deg)";
=======
    document.getElementById('dRad1').style.transform = "rotate(2390deg)";
>>>>>>> 90bd928382537ad232b14b5c87866c28e7b55dc7
    document.getElementById('dRad1').style.transition = "5s";
}