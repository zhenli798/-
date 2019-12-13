function workload(num) {
    if (document.getElementById("w" + num).style.display == "block") {
        document.getElementById("w" + num).style.display = "none";
        //将已经打开的关闭
    }
    else {
        for (var i = 1; i <= 17; i++)
        {
            document.getElementById("w" + i).style.display = "none";//利用for循环将所有的一键关闭；
        }
        document.getElementById("w" + num).style.display = "block";//在for循环全关闭之后，再打开指定的
    }
}