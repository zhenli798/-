var c1 = document.getElementById("c1");
c1.style.display = "block";
var c2 = document.getElementById("c2");
c2.style.display = "none";
var c3 = document.getElementById("c3");
c3.style.display = "none";
var prev = document.getElementById("prev2");
var next = document.getElementById("next2");
prev.onclick = function () {
    if (c1.style.display == "block") {
        c3.style.display = "block";
        c1.style.display = "none";
    }
    else {
        if (c2.style.display == "block") {
            c1.style.display = "block";
            c2.style.display = "none";
        }
        else {
            c2.style.display = "block";
            c3.style.display = "none";
        }
    }
}
next.onclick = function () {
    if (c1.style.display == "block") {
        c2.style.display = "block";
        c1.style.display = "none";
    }
    else {
        if (c2.style.display == "block") {
            c3.style.display = "block";
            c2.style.display = "none";
        }
        else {
            c1.style.display = "block";
            c3.style.display = "none";

        }
    }
}
