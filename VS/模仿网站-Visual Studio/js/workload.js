function workload(num) {
    if (document.getElementById("w" + num).style.display == "block") {
        document.getElementById("w" + num).style.display = "none";
        //���Ѿ��򿪵Ĺر�
    }
    else {
        for (var i = 1; i <= 17; i++)
        {
            document.getElementById("w" + i).style.display = "none";//����forѭ�������е�һ���رգ�
        }
        document.getElementById("w" + num).style.display = "block";//��forѭ��ȫ�ر�֮���ٴ�ָ����
    }
}