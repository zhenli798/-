function workload(num) {
    if (document.getElementById("w" + num).style.display == "block") {
        document.getElementById("w" + num).style.display = "none";

    }
    else {
        for (var i = 1; i <= 17; i++)
        {
            document.getElementById("w" + i).style.display = "none";
        }
        document.getElementById("w" + num).style.display = "block";
    }
}