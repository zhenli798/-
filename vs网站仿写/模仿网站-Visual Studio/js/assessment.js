// JavaScript source code
var assessment = document.getElementById("asm");
var button = document.getElementById("usabilla");
var close = document.getElementById("close");
button.onclick = function () {
    assessment.style.display = "block";
}
close.onclick = function () {
    assessment.style.display = "none";
}
var staropen = '<i class="fa fa-star"style="font-size:50px;color:RGB(242,209,94);"></i>';
var starclose = '<i class="fa fa-star-o" style="font-size:50px;color:RGB(242,209,94);"></i>';
function starchange(num){
    for (var t = 1; t <= 5; t++) {
        if (t <= num) {
            document.getElementById("star" + t).innerHTML = staropen;
        }
        else {
            document.getElementById("star" + t).innerHTML = starclose;
        }
    }
}
function starvary(num) {
    document.getElementById("assessmenthide").style.display = "block";
}