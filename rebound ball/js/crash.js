//碰撞检测
function rush(obj) {
    crash = false;
    var oDiv = document.getElementById("div1");
    var oDiv2 = document.getElementById("div2");
    var oX = oDiv.offsetLeft + iSpeedX;
    var oY = oDiv.offsetTop + iSpeedY;

    var closePointX = 0;
    var closePointY = 0;

    //找物块与挡板碰撞时，挡板上与物块中心最近的点
    //找该点的横坐标值
    if (oX + oDiv.offsetWidth > obj.offsetLeft && oX + oDiv.offsetWidth <= obj.offsetLeft + obj.offsetWidth) {
        if (oX + (oDiv.offsetWidth / 2) > obj.offsetLeft) {
            closePointX = oX + (oDiv.offsetWidth) / 2;
        } else {
            closePointX = obj.offsetLeft;
        }
    }
    if (oX + oDiv.offsetWidth > obj.offsetLeft + obj.offsetWidth) {
        if (oX + (oDiv.offsetWidth / 2) < obj.offsetLeft + obj.offsetWidth) {
            closePointX = oX + (oDiv.offsetWidth) / 2;
        } else {
            closePointX = obj.offsetLeft + obj.offsetWidth;
        }
    }
    if (oX + oDiv.offsetWidth <= obj.offsetLeft) {
        closePointX = obj.offsetLeft;
    } else if (oX >= obj.offsetLeft + obj.offsetWidth) {
        closePointX = obj.offsetLeft + obj.offsetWidth;
    }
    //找该点的纵坐标值
    if (oY + oDiv.offsetHeight > obj.offsetTop && oY + oDiv.offsetHeight <= obj.offsetTop + obj.offsetHeight) {
        if (oY + (oDiv.offsetHeight / 2) > obj.offsetTop) {
            closePointY = oY + (oDiv.offsetHeight / 2);
        } else {
            closePointY = obj.offsetTop;
        }
    }
    if (oY + oDiv.offsetHeight > obj.offsetTop + obj.offsetHeight) {
        if (oY + (oDiv.offsetHeight / 2) > obj.offsetTop + obj.offsetHeight) {
            closePointY = obj.offsetTop + obj.offsetHeight;
        } else {
            closePointY = oY + (oDiv.offsetHeight / 2);
        }
    }
    if (oY + oDiv.offsetHeight <= obj.offsetTop) {
        closePointY = obj.offsetTop;
    } else if (oY >= obj.offsetTop + obj.offsetHeight) {
        closePointY = obj.offsetTop + obj.offsetHeight;
    }

    //判断圆的中心与矩形上最近的点的距离是否小于圆的半径
    var circleX = oX + (oDiv.offsetWidth / 2);
    var circleY = oY + (oDiv.offsetHeight / 2);
    var distance = Math.sqrt(Math.pow(closePointX - circleX, 2) + Math.pow(closePointY - circleY, 2));

    if (distance < (oDiv.offsetHeight / 2)) {
        iSpeedY *= -1;
        //确保挡板的左右端可以改变小球的方向
        if (closePointX == obj.offsetLeft || closePointX == obj.offsetLeft + obj.offsetWidth) {
            iSpeedX *= -1;
            iSpeedY *= -1;
        }
        crash = true;
    }
}