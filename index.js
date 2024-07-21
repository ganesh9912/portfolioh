window.addEventListener("DOMContentLoaded", () => {
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;
    var counter5 = 0;
    var counter6 = 0;
    var counter7 = 0;

    if (counter1 == 0) {
        counter1 = 1; // Update counter to ensure it doesn't run again
        var elem1 = document.querySelector(".progressbardone");
        var width1 = 50;
        var main1 = setInterval(frame1,30);
        
        function frame1() {
            if (width1 >= 90) {
                clearInterval(main1);
            } else {
                width1++;
                elem1.style.width = width1 + "%";
                elem1.innerHTML = width1 + "%";
            }
        }
    }

    if (counter2 == 0) {
        counter2 = 1; // Update counter to ensure it doesn't run again
        var elem2 = document.querySelector(".progressbardon");
        var width2 = 60;
        var main2 = setInterval(frame2, 80);
        
        function frame2() {
            if (width2 >= 80) {
                clearInterval(main2);
            } else {
                width2++;
                elem2.style.width = width2 + "%";
                elem2.innerHTML = width2 + "%";
            }
        }
    }
    
    if(counter3==0){
        counter3=1;
        var elem3=document.querySelector(".progressbardone3");
        var width3=50;
        var main3=setInterval(frame3, 80);
        
        function frame3() {
            if(width3>=90){
                clearInterval(main3);
            }
             else {
                width3++;
                elem3.style.width = width3 + "%";
                elem3.innerHTML= width3 + "%";
            }
        }
    }
    
    if(counter4 == 0){
        counter4 = 1;
        var elem4=document.querySelector(".progressbardone4");
        var width4 = 50;
        var main4 = setInterval(frame4,80); 

        function frame4(){
        if(width4>=90) {
            clearInterval(main4);
        }
        else {
            width4++;
            elem4.style.width = width4 + "%";
            elem4.innerHTML = width4 + "%";
        }
    }
    
   }
   if(counter5 == 0){
    counter5 = 1;
    var elem5=document.querySelector(".progressbardone5");
    var width5 = 50;
    var main5 = setInterval(frame5,80); 

    function frame5(){
    if(width5>=90) {
        clearInterval(main5);
    }
    else {
        width5++;
        elem5.style.width = width5 + "%";
        elem5.innerHTML = width5 + "%";
    }
}

}
if(counter6 == 0){
    counter6 = 1;
    var elem6=document.querySelector(".progressbardone6");
    var width6 = 50;
    var main6 = setInterval(frame6,80); 

    function frame6(){
    if(width6>=90) {
        clearInterval(main6);
    }
    else {
        width6++;
        elem6.style.width = width6 + "%";
        elem6.innerHTML = width6 + "%";
    }
}

}

if(counter7 == 0){
    counter7 = 1;
    var elem7=document.querySelector(".progressbardone7");
    var width7 = 50;
    var main7 = setInterval(frame7,80); 

    function frame7(){
    if(width7>=90) {
        clearInterval(main7);
    }
    else {
        width7++;
        elem7.style.width = width7 + "%";
        elem7.innerHTML = width7 + "%";
    }
}

}
});
    