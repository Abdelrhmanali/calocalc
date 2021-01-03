// kotla page 
function kotla() {

    var wight,height,mass;

    wight  = document.getElementById('wzn').value;
    height = document.getElementById('twl').value;
    mass   = wight / (height * height);

    document.getElementById('sp1').innerHTML = "كتلة جسمك هي  " + mass;
    
    if (mass < 15){
        document.getElementById('rule').innerHTML = "نقص حاد جدا بالوزن";
    }else if (mass >= 15 && mass < 16){
        document.getElementById('rule').innerHTML = "نقص حاد بالوزن";
    }else if (mass >= 16 && mass < 18.5) {
        document.getElementById('rule').innerHTML = "نقص  بالوزن";
    }else if (mass >= 18.5 && mass < 25) {
        document.getElementById('rule').innerHTML = "الوزن طبيعي";
    }else if (mass >= 25 && mass < 30) {
        document.getElementById('rule').innerHTML = "زياده  بالوزن";
    }else if (mass >= 30 && mass < 35) {
        document.getElementById('rule').innerHTML = "سمنة درجة أولي";
    }else if (mass >= 35 && mass < 40) {
        document.getElementById('rule').innerHTML = "سمنة درجة تانية";
    }else {
        document.getElementById('rule').innerHTML = "سمنة مفرطة جدا";
    };
};

// calo page 
var user, result, less, high;
function calc(){
    user  = document.getElementById('inp').value;
    result = user * 1 * 24;
    document.getElementById("show1").style.display = "block";
    document.getElementById("show1").innerHTML = "<div class='alert alert-primary'>معدل الأيض الأساسي الخاص بك هو : " + result +"</div>";
    return result;
}

function myFunction(){
    var x = document.getElementById("mySelect").value;
    switch(x) {
        case "1":
            less = result * 0.25;
            high = result * 0.40;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "2":
            less = result * 0.50;
            high = result * 0.70;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "3":
            less = result * 0.65;
            high = result * 0.80;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "4":
            less = result * 0.90;
            high = result * 0.120;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        }
};

$(document).ready(function(){
    $(".nx1").click(function(){
        $(".stp1").css("display","none");
        $(".stp2").slideDown(500).css("display","block");
    });
    $(".nx2").click(function(){
        $(".stp2").css("display" , "none");
        $(".stp3").slideDown(500).css("display","block");
    });
});


