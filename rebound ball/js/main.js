window.onload = function() {
    var oDiv2 = document.getElementById('div2');
    var obtn = document.getElementById("btn1");

    var oBarrier = document.getElementById("barrier");

    //将设置传输到游戏中
    document.getElementById("enter").onclick = function() {
            iSpeedX = document.getElementById("speedX").value;
            iSpeedY = document.getElementById("speedY").value;
            sum = document.getElementById("sum").value;
            board_length = document.getElementById("board_length").value;
            barrier_length = document.getElementById("barrier_length").value;
            document.getElementById("div1").style.height = document.getElementById("scale").value + 'px';
            document.getElementById("div1").style.width = document.getElementById("scale").value + 'px';
        }
        //给body设置宽高
    document.getElementsByTagName("body")[0].style.height = document.documentElement.clientHeight + 'px';
    document.getElementsByTagName("body")[0].style.width = document.documentElement.clientWidth + 'px';

    //开始游戏按键的作用
    obtn.onclick = function() {
        startMove();
        document.getElementById("setting").style.display = "none"; //将设置选项隐藏起来
        document.getElementById("score").style.display = "block"; //将得分板显示出来
    }

    //利用鼠标监听事件控制挡板的移动
    oDiv2.onmousedown = function(ev) {
        var oEvent = ev || event;

        var disX = oEvent.clientX - oDiv2.offsetLeft;
        var disY = oEvent.clientY - oDiv2.offsetTop;

        document.onmousemove = function(ev) {
            var oEvent = ev || event;

            var l = oEvent.clientX - disX;
            var t = oEvent.clientY - disY;

            if (l > document.documentElement.clientWidth - oDiv2.offsetWidth) {
                l = document.documentElement.clientWidth - oDiv2.offsetWidth;
            } else if (l < 0) {
                l = 0;
            };

            if (t > document.documentElement.clientHeight - oDiv2.offsetHeight) {
                t = document.documentElement.clientHeight - oDiv2.offsetHeight;
            } else if (t < 0) {
                t = 0;
            };
            oDiv2.style.left = l + 'px';
            oDiv2.style.top = t + 'px';
        };
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    //键盘监听事件
    document.onkeydown = function(ev) {

        var e = event || ev || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 39) { //按right

            oDiv2.style.left = Math.min(document.documentElement.clientWidth - oDiv2.offsetWidth, oDiv2.offsetLeft + 100) + 'px';
        }
        if (e && e.keyCode == 40) { // 按down

            oDiv2.style.top = Math.min(document.documentElement.clientHeight - oDiv2.offsetHeight, oDiv2.offsetTop + 100) + 'px';
        }

        if (e && e.keyCode == 37) { // 按 left 
            oDiv2.style.left = Math.max(0, oDiv2.offsetLeft - 100) + 'px';
        }

        if (e && e.keyCode == 38) { // 按 up 
            oDiv2.style.top = Math.max(0, oDiv2.offsetTop - 100) + 'px';
        }
    };
};


var iSpeedX = 0; //小球的水平速度
var iSpeedY = 0; //小球的垂直速度
var crash = false; //判断小球和障碍物碰撞
var timer = null; //定时器
var barrier_length = 0; //每个障碍物长度
var board_length = 0; //挡板长度
var sum = 0; //障碍物个数

function startMove() {
    var oDiv = document.getElementById("div1"); //小球
    var oDiv2 = document.getElementById("div2"); //挡板
    var scoreBoard = document.getElementsByTagName("span");
    var oBarrier = document.getElementById("barrier"); //障碍物的容器

    var score = 0; //得分
    var i = 0; //循环变量
    var offLimit = 0; //小球出界次数



    for (i = 0; i < sum; i++) {
        oBarrier.innerHTML += "<div></div>"; //写入变量
    }

    var aBarrier = oBarrier.getElementsByTagName("div");

    for (i = 0; i < aBarrier.length; i++) {
        aBarrier[i].style.width = barrier_length + 'px';
        aBarrier[i].style.height = "20px";
    } //砖块大小
    oDiv2.style.width = board_length + 'px';

    timer = setInterval(function() {
        var oX = oDiv.offsetLeft + iSpeedX;
        var oY = oDiv.offsetTop + iSpeedY;

        var oBarrier = document.getElementById("barrier");
        var aBarrier = oBarrier.getElementsByTagName("div");
        var i = 0;

        //小球与障碍物碰撞
        for (i = 0; i < aBarrier.length; i++) {
            rush(aBarrier[i]);
            if (crash) {
                oBarrier.removeChild(aBarrier[i]);
                scoreBoard[1].innerHTML = ++score;
            }
        };
        if (aBarrier.length == 0) {
            alert("你赢了，嘻嘻！您的最终得分为：" + score);
            alert("给自己加大点难度把！");
            document.getElementById("setting").style.display = "block"; //将设置显示出来
            document.getElementById("score").style.display = "none"; //将得分板隐藏起来
            score = 0;
            scoreBoard[1].innerHTML = score;
            clearInterval(timer);
        }
        //小球与弹板碰撞
        rush(oDiv2);

        if (oX >= (document.documentElement.clientWidth - oDiv.offsetWidth)) {
            iSpeedX *= -1;
            oX = document.documentElement.clientWidth - oDiv.offsetWidth;
        } else if (oX <= 0) {
            iSpeedX *= -1;
            oX = 0;
        }
        if (oY >= document.documentElement.clientHeight - oDiv.offsetHeight) {

            if (offLimit) {
                oBarrier.innerHTML = " ";
                alert("很可惜，继你输了！您的最终得分为：" + score);
                alert("请再接再励噢！");
                document.getElementById("setting").style.display = "block"; //将设置显示出来
                document.getElementById("score").style.display = "none"; //将得分板隐藏起来
                score = 0;
                scoreBoard[1].innerHTML = score;
                clearInterval(timer);
            } else {
                iSpeedY *= -1;
            }
            offLimit++;
            oY = document.documentElement.clientHeight - oDiv.offsetHeight;
        } else if (oY <= 0) {
            iSpeedY *= -1;
            oY = 0;
        }
        oDiv.style.left = oX + 'px';
        oDiv.style.top = oY + 'px';
    }, 10);
}