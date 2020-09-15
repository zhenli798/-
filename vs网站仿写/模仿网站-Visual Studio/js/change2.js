var b1 = document.getElementById("b1");
b1.style.display = "block";
var b2 = document.getElementById("b2");
b2.style.display = "none";
var b3 = document.getElementById("b3");
b3.style.display = "none";
var b4 = document.getElementById("b4")
b4.style.display = "none"
var prev = document.getElementById("prev3");
var next = document.getElementById("next3");
prev.onclick = function () {
    if (b1.style.display == "block") {
        b3.style.display = "block";
        b1.style.display = "none";
    }
    else {
        if (b2.style.display == "block") {
            b1.style.display = "block";
            b2.style.display = "none";
        }
        else {
            if (b3.style.display == "block") {
                b2.style.display = "block";
                b3.style.display = "none";
            }
            else {
                b4.style.display = "none";
                b3.style.display = "block";
            }
        }
    }
}
next.onclick = function () {
    if (b1.style.display == "block") {
        b2.style.display = "block";
        b1.style.display = "none";
    }
    else {
        if (b2.style.display == "block") {
            b3.style.display = "block";
            b2.style.display = "none";
        }
        else {
            if (b3.style.display == "block") {
                b3.style.display = "none";
                b4.style.display = "block";
            }
            else {
                b1.style.display = "block";
                b4.style.display = "none";
            }

        }
    }
}
