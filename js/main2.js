
var user, result, less, high;
function calc(){
    user  = document.getElementById('inp').value;
    result = user * 0.9 * 24;
    document.getElementById("show1").style.display = "block";
    document.getElementById("show1").innerHTML = "<div class='alert alert-primary'>معدل الأيض الأساسي الخاص بك هو : " + result +"</div>";
    return result;
}

function myFunction(){
    var x = document.getElementById("mySelect").value;
    switch(x) {
        case "1":
            less = result * 0.25;
            high = result * 0.35;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "2":
            less = result * 0.40;
            high = result * 0.60;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "3":
            less = result * 0.50;
            high = result * 0.70;
            document.getElementById("show2").style.display = "block";
            document.getElementById("show2").innerHTML = "<div class='alert alert-secondary col-md'>حد النشاط اليومي الادني هو :" + less +
            "</div><div class='alert alert-secondary col-md'>حد النشاط اليومي الاقصي هو :" + high +"</div>";
            document.getElementById("tx1").innerHTML = result + less;
            document.getElementById("tx2").innerHTML = result + high;
            break;
        case "4":
            less = result * 0.80;
            high = result * 0.100;
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


