window.onload = function () {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    function animate(offset) {
        //��ȡ����style.left���������߻�ȡ���룬���Ե�һ��ͼ��style.left��Ϊ��ֵ��
        //��style.left��ȡ�����ַ�������Ҫ��parseInt()ȡ��ת��Ϊ���֡�
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        if (newLeft < -1650) {
            list.style.left = 15 + 'px';
        }
        if (newLeft > 15) {
            list.style.left = -1620 + 'px';
        }
    }

    prev.onclick = function () {
        animate(190);
    }
    next.onclick = function () {
        animate(-190);
    }
}
