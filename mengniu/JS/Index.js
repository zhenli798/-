var navi_fir = document.getElementById("navigation_fir");
var num_nav_over;
var num_nav_click;
var num_nav_out;
var width = window.innerWidth; //��ȡ��ҳ��������Ŀ�
var height = window.innerHeight; //��ȡ��ҳ��������ĸ�
var navigation = document.getElementById("navigation");
var newwidth = parseInt(width); //parseInt���ַ���ת��Ϊ����
var newheight = parseInt(height);
var y = 1;
var fir_button = document.getElementById("fir_content_button");
navigation.style.height = newheight + 'px';
navigation.style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation_fir").style.height = 0.07 * newheight + 'px';
document.getElementById("navigation_content-fir_img").style.height = 0.5 * (0.07 * newheight) + 'px';
document.getElementById("navigation_content-fir_img").style.width = 0.7 * (0.07 * newwidth) + 'px';
document.getElementById("navigation1").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation1").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation2").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation2").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation3").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation3").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation4").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation4").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation5").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation5").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation6").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation6").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation1_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation1_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation2_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation2_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation3_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation3_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation4_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation4_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation5_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation5_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("navigation6_img").style.height = 0.13 * newheight + 'px';
document.getElementById("navigation6_img").style.width = 0.07 * newwidth + 'px';
document.getElementById("fir_content-fir_img").style.width = newwidth + 'px';
document.getElementById("fir_content-fir_img").style.height = newheight + 'px';
document.getElementById("fir_content-second_img").style.width = newwidth + 'px';
document.getElementById("fir_content-second_img").style.height = newheight + 'px';
document.getElementById("fir_content-third_img").style.width = newwidth + 'px';
document.getElementById("fir_content-third_img").style.height = newheight + 'px';
document.getElementById("fir_content-forth_img").style.width = newwidth + 'px';
document.getElementById("fir_content-forth_img").style.height = newheight + 'px';
document.getElementById("fir_content-fifth_img").style.width = newwidth + 'px';
document.getElementById("fir_content-fifth_img").style.height = newheight + 'px';
document.getElementById("fir_content-sixth_img").style.width = newwidth + 'px';
document.getElementById("fir_content-sixth_img").style.height = newheight + 'px';
document.getElementById("fir_content_button").style.width = 0.3 * newwidth + 'px';
document.getElementById("fir_content_button").style.height = 0.04 * newheight + 'px';
document.getElementById("navigation_hidden").style.height = newheight + 'px';
document.getElementById("navigation_hidden2").style.marginTop = 0.15 * newheight + 'px'; //调整导航栏隐藏内容中链接的位置，让它缩放时不受影响
document.getElementById("navigation_hidden3").style.marginTop = 0.32 * newheight + 'px';
document.getElementById("navigation_hidden4").style.marginTop = 0.32 * newheight + 'px';
document.getElementById("navigation_hidden5").style.marginTop = 0.56 * newheight + 'px';
document.getElementById("navhiddenlink1").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink2").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink3").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink4").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink5").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink6").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink7").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink8").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink9").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink10").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink11").style.height = 0.06 * newheight + 'px';
document.getElementById("navhiddenlink12").style.height = 0.06 * newheight + 'px';
document.getElementById("wechatpicture1").style.width = 0.05 * newwidth + 'px';
document.getElementById("wechatpicture1").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture1").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture1").style.height = 0.08 * newheight + 'px';
document.getElementById("contain_in-fir_content6_bottom").style.width = newwidth + 'px';
document.getElementById("contain_in-fir_content6_bottom").style.height = 0.44 * newheight + 'px';
document.getElementById("blogandwechat1").style.width = 0.20 * newwidth + 'px';
document.getElementById("fircontentbutton1").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton1").style.height = 0.03 * newheight + 'px';
document.getElementById("fircontentbutton2").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton2").style.height = 0.03 * newheight + 'px';
document.getElementById("fircontentbutton3").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton3").style.height = 0.03 * newheight + 'px';
document.getElementById("fircontentbutton4").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton4").style.height = 0.03 * newheight + 'px';
document.getElementById("fircontentbutton5").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton5").style.height = 0.03 * newheight + 'px';
document.getElementById("fircontentbutton6").style.width = 0.015 * newwidth + 'px';
document.getElementById("fircontentbutton6").style.height = 0.03 * newheight + 'px';
document.getElementById("introduction1").style.width = 0.45 * newwidth + 'px'; //��һ���ֲ�ͼ�ײ������ӵ�����
document.getElementById("introduction2_img").style.width = 0.015 * newwidth + 'px';
document.getElementById("introduction2_img").style.height = 0.02 * newheight + 'px';
document.getElementById("contain_in-fir_content").style.height = newheight + 'px';
document.getElementById("contain_in-fir_content").style.width = newwidth + 'px';
document.getElementById("contain_in-fir_content6_bottom").style.top = -0.45 * newheight + 'px';
document.getElementById("QRcode1").style.left = 0.62 * newwidth + 'px';
document.getElementById("QRcode1").style.height = 0.25 * newheight + 'px';
document.getElementById("QRcode_img" + 2).style.height = 0.20 * newheight + 'px';
document.getElementById("QRcode_img" + 1).style.height = 0.20 * newheight + 'px';
document.getElementById("QRcode_img" + 1).style.width = 0.10 * newwidth + 'px';
document.getElementById("QRcode_img" + 2).style.width = 0.10 * newwidth + 'px';
document.getElementById("contain_in-second_top").style.width = newwidth + 'px'; //�ڶ���ҳ�涥������
document.getElementById("contain_in-second_top").style.height = newheight + 'px'; //�ڶ���ҳ�涥���߶�
document.getElementById("secondtopvalue").style.top = 0.02 * newheight + 'px'; //�ڶ���ҳ�涥������
document.getElementById("secondtopvalue").style.left = 0.15 * newwidth + 'px';
document.getElementById("secondtopvalue").style.width = 0.5 * newwidth + 'px'; //�ڶ���ҳ�涥������
document.getElementById("secondcontentimg1").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥����һ��ͼƬ����
document.getElementById("secondcontentimg1").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥����һ��ͼƬ�߶�
document.getElementById("secondcontentimg2").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥���ڶ���ͼƬ����
document.getElementById("secondcontentimg2").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥���ڶ���ͼƬ�߶�
document.getElementById("secondcontentimg3").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥��������ͼƬ����
document.getElementById("secondcontentimg3").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥��������ͼƬ�߶�
document.getElementById("secondcontentimg4").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥��������ͼƬ����
document.getElementById("secondcontentimg4").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥��������ͼƬ�߶�
document.getElementById("secondtopmain_content").style.marginLeft = 0.08 * newwidth + 'px'; //�ڶ���ҳ�涥����Ҫ��������λ��
document.getElementById("secondtopmain_content").style.top = -0.06 * newheight + 'px';
document.getElementById("secondtopmain_content").style.width = 0.90 * newwidth + 'px'; //�ڶ���ҳ����Ҫ����������С
document.getElementById("column1").style.height = 0.70 * newheight + 'px'; //��һ�����εĸ�
document.getElementById("column1").style.width = 0.22 * newwidth + 'px'; //��һ�����εĿ�
document.getElementById("column1").style.top = -0.20 * height + 'px'; //��һ�����ε�λ��
document.getElementById("column2").style.height = 0.70 * newheight + 'px'; //�ڶ������εĸ�
document.getElementById("column2").style.width = 0.22 * newwidth + 'px'; //�ڶ������εĿ�
document.getElementById("column2").style.top = -0.20 * height + 'px'; //�ڶ������ε�λ��
document.getElementById("column3").style.height = 0.70 * newheight + 'px'; //���������εĸ�
document.getElementById("column3").style.width = 0.22 * newwidth + 'px'; //���������εĿ�
document.getElementById("column3").style.top = -0.20 * height + 'px'; //���������ε�λ��
document.getElementById("column4").style.height = 0.70 * newheight + 'px'; //���ĸ����εĸ�
document.getElementById("column4").style.width = 0.22 * newwidth + 'px'; //���ĸ����εĿ�
document.getElementById("column4").style.top = -0.20 * height + 'px'; //���ĸ����ε�λ��
document.getElementById("columnbutton1").style.width = 0.08 * newwidth + 'px'; //ÿ�������ϰ�ť�Ĵ�С
document.getElementById("columnbutton1").style.height = 0.049 * newheight + 'px';
document.getElementById("columnbutton2").style.width = 0.08 * newwidth + 'px';
document.getElementById("columnbutton2").style.height = 0.049 * newheight + 'px';
document.getElementById("columnbutton3").style.width = 0.08 * newwidth + 'px';
document.getElementById("columnbutton3").style.height = 0.049 * newheight + 'px';
document.getElementById("columnbutton4").style.width = 0.08 * newwidth + 'px';
document.getElementById("columnbutton4").style.height = 0.049 * newheight + 'px';
document.getElementById("contain_in-second_bottom").style.height = 0.4 * newheight + 'px';
document.getElementById("contain_in-second_bottom").style.width = newwidth + 'px';
document.getElementById("wechatpicture2").style.width = 0.05 * newwidth + 'px';
document.getElementById("wechatpicture2").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture2").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture2").style.height = 0.08 * newheight + 'px';
document.getElementById("QRcode2").style.left = 0.62 * newwidth + 'px';
document.getElementById("blogandwechat2").style.width = 0.20 * newwidth + 'px';
document.getElementById("introduction1_2").style.width = 0.45 * newwidth + 'px'; //��һ���ֲ�ͼ�ײ������ӵ�����
document.getElementById("introduction5_img").style.width = 0.015 * newwidth + 'px';
document.getElementById("introduction5_img").style.height = 0.02 * newheight + 'px';
document.getElementById("contain_in3topleft").style.width = 0.45 * newwidth + 'px';
document.getElementById("contain_in3topleft").style.height = newheight + 'px';
document.getElementById("contain_in3leftimg").style.height = newheight + 'px'; //第三页左边背景
document.getElementById("contain_in3middleimg").style.width = 0.49 * newwidth + 'px';
document.getElementById("contain_in3middleimg").style.height = newheight + 'px'; //第三页中间背景
document.getElementById("contain_in3leftimg").style.width = 0.49 * newwidth + 'px';
document.getElementById("contain_in3topmiddle").style.width = 0.45 * newwidth + 'px';
document.getElementById("contain_in3topmiddle").style.height = newheight + 'px';
document.getElementById("contain_in3rightimg").style.height = newheight + 'px';
document.getElementById("contain_in3rightimg").style.width = 0.1 * newwidth + 'px';
document.getElementById("contain_in3topright").style.height = newheight + 'px';
document.getElementById("contain_in3topright").style.width = 0.1 * newwidth + 'px';
document.getElementById("containin3topleft_contentimg1").style.width = 0.3 * newwidth + 'px'; //第三页左边水滴大小
document.getElementById("containin3topleft_contentimg1").style.height = 0.45 * newheight + 'px';
document.getElementById("containin3topleft_contentimg1").style.top = 0.5 * newheight + 'px';
document.getElementById("containin3topleft_contentimg1").style.left = 0.1 * newwidth + 'px';
document.getElementById("water_leftvalue").style.top = -0.32 * newheight + 'px'; //第三页左边水滴内文字
document.getElementById("water_leftvalue").style.width = 0.08 * newwidth + 'px';
document.getElementById("water_leftvalue").style.height = 0.03 * newheight + 'px';
document.getElementById("water_leftvalue").style.left = 0.21 * newwidth + 'px';
document.getElementById("water_leftcontain").style.width = 0.08 * newwidth + 'px'; //第三页左边水滴中的按键
document.getElementById("water_leftcontain").style.height = 0.04 * newheight + 'px';
document.getElementById("water_leftcontain").style.top = -0.40 * newheight + 'px';
document.getElementById("water_leftcontain").style.left = 0.21 * newwidth + 'px';
document.getElementById("containin3topmiddle_contentimg1").style.width = 0.3 * newwidth + 'px'; //第三页中间水滴
document.getElementById("containin3topmiddle_contentimg1").style.height = 0.45 * newheight + 'px';
document.getElementById("containin3topmiddle_contentimg1").style.top = 0.5 * newheight + 'px';
document.getElementById("containin3topmiddle_contentimg1").style.left = 0.5 * newwidth + 'px';
document.getElementById("water_middlevalue").style.width = 0.08 * newwidth + 'px'; //第三页中间水滴文字
document.getElementById("water_middlevalue").style.height = 0.03 * newheight + 'px';
document.getElementById("water_middlevalue").style.top = -0.33 * newheight + 'px';
document.getElementById("water_middlevalue").style.left = 0.17 * newwidth + 'px';
document.getElementById("water_middlecontain").style.width = 0.08 * newwidth + 'px'; //第三页中间水滴的按钮
document.getElementById("water_middlecontain").style.height = 0.04 * newheight + 'px';
document.getElementById("water_middlecontain").style.top = -0.40 * newheight + 'px';
document.getElementById("water_middlecontain").style.left = 0.167 * newwidth + 'px';
document.getElementById("wechatpicture3").style.width = 0.05 * newwidth + 'px';
document.getElementById("wechatpicture3").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture3").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture3").style.height = 0.08 * newheight + 'px';
document.getElementById("QRcode3").style.left = 0.62 * newwidth + 'px';
document.getElementById("blogandwechat3").style.width = 0.20 * newwidth + 'px';
document.getElementById("introduction1_3").style.width = 0.45 * newwidth + 'px';
document.getElementById("introduction7_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
document.getElementById("introduction7_img").style.height = 0.02 * newheight + 'px';
document.getElementById("contain_in4topcontent1").style.width = 0.25 * newwidth + 'px'; //第四页
document.getElementById("contain_in4topcontent1").style.height = newheight + 'px';
document.getElementById("contain_in4topcontent2").style.width = 0.25 * newwidth + 'px';
document.getElementById("contain_in4topcontent2").style.height = newheight + 'px';
document.getElementById("contain_in4topcontent3").style.width = 0.25 * newwidth + 'px';
document.getElementById("contain_in4topcontent3").style.height = newheight + 'px';
document.getElementById("contain_in4topcontent4").style.width = 0.25 * newwidth + 'px';
document.getElementById("contain_in4topcontent4").style.height = newheight + 'px';
document.getElementById("contain4topimg1").style.height = newheight + 'px';
document.getElementById("contain4topimg1").style.width = 0.4 * newwidth + 'px';
document.getElementById("contain4topimg2").style.height = newheight + 'px';
document.getElementById("contain4topimg2").style.width = 0.4 * newwidth + 'px';
document.getElementById("contain4topimg3").style.height = newheight + 'px';
document.getElementById("contain4topimg3").style.width = 0.4 * newwidth + 'px';
document.getElementById("contain4topimg4").style.height = newheight + 'px';
document.getElementById("contain4topimg4").style.width = 0.4 * newwidth + 'px';
//document.getElementById("page4_water1").style.left = 0.18 * newwidth + 'px';图片不会跟着动了
document.getElementById("wechatpicture4").style.width = 0.05 * newwidth + 'px';
document.getElementById("wechatpicture4").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture4").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture4").style.height = 0.08 * newheight + 'px';
document.getElementById("QRcode4").style.left = 0.62 * newwidth + 'px';
document.getElementById("blogandwechat4").style.width = 0.20 * newwidth + 'px';
document.getElementById("introduction1_4").style.width = 0.45 * newwidth + 'px';
document.getElementById("introduction6_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
document.getElementById("introduction6_img").style.height = 0.02 * newheight + 'px';
document.getElementById("contain_infifthtop").style.height = newheight + 'px';
//document.getElementById("contain_infifthtop").style.width = newwidth + 'px';//出错
document.getElementById("fifthpage_1").style.height = 0.5 * newheight + 'px'; //第五个页面顶部第一个容器
document.getElementById("fifthpage_1").style.width = newwidth + 'px';
document.getElementById("fifthpage_2").style.height = 0.5 * newheight + 'px'; //第五个页面顶部第二个容器
document.getElementById("fifthpage_2").style.width = newwidth + 'px';
document.getElementById("fifthpage_img1").style.width = 1.2 * newwidth + 'px'; //第五个页面顶部第一个背景图
document.getElementById("fifthpage_img1").style.height = 0.65 * newheight + 'px';
document.getElementById("fifthpage_img2").style.width = 1.2 * newwidth + 'px'; //第五个页面顶部第二个背景图
document.getElementById("fifthpage_img2").style.height = 0.65 * newheight + 'px';
document.getElementById("fifthpage_img1_1").style.width = 0.15 * newwidth + 'px'; //第五个页面最顶部右边图文
document.getElementById("fifthpage_img1_1").style.height = 0.08 * newheight + 'px';
document.getElementById("pagefive_water1").style.width = 0.6 * newwidth + 'px'; //第五个页面最顶部水滴图片
document.getElementById("pagefive_water1").style.height = 0.7 * newheight + 'px';
document.getElementById("pagefivesmallwater1").style.width = 0.01 * newwidth + 'px'; //第五个页面最顶部水滴中的小水滴
document.getElementById("pagefivesmallwater1").style.height = 0.025 * newheight + 'px';
document.getElementById("pagefivesmallwater1").style.top = -0.28 * newheight + 'px';
document.getElementById("pagefivesmallwater1").style.left = 0.295 * newwidth + 'px';
document.getElementById("pagefive_watervalue1").style.width = 0.10 * newwidth + 'px'; //第五个页面最顶部水滴中的图文
document.getElementById("pagefive_watervalue1").style.height = 0.05 * newheight + 'px';
document.getElementById("pagefive_watervalue1").style.top = -0.26 * newheight + 'px';
document.getElementById("pagefive_watervalue1").style.left = 0.25 * newwidth + 'px';
document.getElementById("pagefive_watercontain1").style.width = 0.08 * newwidth + 'px'; //第五页最顶部水滴中的按钮
document.getElementById("pagefive_watercontain1").style.height = 0.05 * newheight + 'px';
document.getElementById("pagefive_watercontain1").style.left = 0.26 * newwidth + 'px';
document.getElementById("pagefive_watercontain1").style.top = -0.34 * newheight + 'px';
document.getElementById("fifthpage_img1_2").style.width = 0.15 * newwidth + 'px'; //第五个页面顶部第二张图左边边图文
document.getElementById("fifthpage_img1_2").style.height = 0.08 * newheight + 'px';
document.getElementById("pagefive_water2").style.width = 0.6 * newwidth + 'px'; //第五个页面顶部第二个水滴图片
document.getElementById("pagefive_water2").style.height = 0.7 * newheight + 'px';
document.getElementById("pagefivesmallwater2").style.width = 0.01 * newwidth + 'px'; //第五个页面第二个水滴中的小水滴
document.getElementById("pagefivesmallwater2").style.height = 0.025 * newheight + 'px';
document.getElementById("pagefivesmallwater2").style.top = -0.28 * newheight + 'px';
document.getElementById("pagefivesmallwater2").style.left = 0.295 * newwidth + 'px';
document.getElementById("pagefive_watervalue2").style.width = 0.10 * newwidth + 'px'; //第五个页面第二个水滴中的图文
document.getElementById("pagefive_watervalue2").style.height = 0.05 * newheight + 'px';
document.getElementById("pagefive_watervalue2").style.top = -0.26 * newheight + 'px';
document.getElementById("pagefive_watervalue2").style.left = 0.25 * newwidth + 'px';
document.getElementById("pagefive_watercontain2").style.width = 0.08 * newwidth + 'px'; //第五页第二个水滴中的按钮
document.getElementById("pagefive_watercontain2").style.height = 0.05 * newheight + 'px';
document.getElementById("pagefive_watercontain2").style.left = 0.26 * newwidth + 'px';
document.getElementById("pagefive_watercontain2").style.top = -0.34 * newheight + 'px';
document.getElementById("wechatpicture5").style.width = 0.05 * newwidth + 'px'; //第五页底部
document.getElementById("wechatpicture5").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture5").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture5").style.height = 0.08 * newheight + 'px';
document.getElementById("QRcode5").style.left = 0.62 * newwidth + 'px';
document.getElementById("blogandwechat5").style.width = 0.20 * newwidth + 'px';
document.getElementById("introduction1_5").style.width = 0.45 * newwidth + 'px';
document.getElementById("introduction8_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
document.getElementById("introduction8_img").style.height = 0.02 * newheight + 'px';
document.getElementById("page6topimg").style.width = newwidth + 'px'; //第六页
document.getElementById("page6topimg").style.height = 0.7 * newheight + 'px';
document.getElementById("page6top_contain").style.height = 0.5 * newheight + 'px';
document.getElementById("page6waterouter_contain").style.width = newwidth + 'px';
document.getElementById("page6waterouter_contain").style.top = -0.02 * newheight + 'px';
document.getElementById("page6water").style.width = 0.14 * newwidth + 'px'; //设置水滴
document.getElementById("page6water").style.height = 0.22 * newheight + 'px';
document.getElementById("page6left").style.top = 0.0466 * newheight + 'px';
document.getElementById("page6left").style.width = 0.80 * newwidth + 'px';
document.getElementById("page6right").style.width = 0.78 * newwidth + 'px';
document.getElementById("page6right").style.top = 0.0466 * newheight + 'px';
document.getElementById("page6_watervalue").style.height = 0.14 * newheight + 'px'; //水滴中的文字
document.getElementById("page6_watervalue").style.width = 0.06 * newwidth + 'px';
document.getElementById("page6_watervalue").style.left = 0.465 * newwidth + 'px';
document.getElementById("page6_watervalue").style.top = 0.04 * newheight + 'px';
document.getElementById("page6top").style.width = newwidth + 'px'; //第六页顶部宽度
document.getElementById("wechatpicture6").style.width = 0.05 * newwidth + 'px'; //第五页底部
document.getElementById("wechatpicture6").style.height = 0.08 * newheight + 'px';
document.getElementById("blogpicture6").style.width = 0.05 * newwidth + 'px';
document.getElementById("blogpicture6").style.height = 0.08 * newheight + 'px';
document.getElementById("QRcode6").style.left = 0.62 * newwidth + 'px';
document.getElementById("blogandwechat6").style.width = 0.20 * newwidth + 'px';
document.getElementById("introduction1_6").style.width = 0.45 * newwidth + 'px';
document.getElementById("introduction9_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
document.getElementById("introduction9_img").style.height = 0.02 * newheight + 'px';
fir_button.style.left = (0.7 * newwidth) / 2 + 'px'; //��һ����ҳ�ֲ�ͼ��ťλ��
window.onresize = function() {
    var width = window.innerWidth; //��ȡ��ҳ��������Ŀ�
    height = window.innerHeight; //��ȡ��ҳ���������
    if (window.innerwidth <= (1 / 3) * window.screen.width) {
        width = (1 / 3) * window.screen.width;
    }
    var navigation = document.getElementById("navigation");
    var newwidth = parseInt(width); //parseInt���ַ���ת��Ϊ����
    newheight = parseInt(height);
    navigation.style.height = newheight + 'px';
    navigation.style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation_fir").style.height = 0.07 * newheight + 'px';
    document.getElementById("navigation_content-fir_img").style.height = 0.5 * (0.07 * newheight) + 'px';
    document.getElementById("navigation_content-fir_img").style.width = 0.7 * (0.07 * newwidth) + 'px';
    document.getElementById("navigation1").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation1").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation2").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation2").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation3").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation3").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation4").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation4").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation5").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation5").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation6").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation6").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation1_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation1_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation2_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation2_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation3_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation3_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation4_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation4_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation5_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation5_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("navigation6_img").style.height = 0.13 * newheight + 'px';
    document.getElementById("navigation6_img").style.width = 0.07 * newwidth + 'px';
    document.getElementById("fir_content-fir_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-fir_img").style.height = newheight + 'px';
    document.getElementById("fir_content-second_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-second_img").style.height = newheight + 'px';
    document.getElementById("fir_content-third_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-third_img").style.height = newheight + 'px';
    document.getElementById("fir_content-forth_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-forth_img").style.height = newheight + 'px';
    document.getElementById("fir_content-fifth_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-fifth_img").style.height = newheight + 'px';
    document.getElementById("fir_content-sixth_img").style.width = newwidth + 'px';
    document.getElementById("fir_content-sixth_img").style.height = newheight + 'px';
    document.getElementById("fir_content_button").style.width = 0.3 * newwidth + 'px';
    document.getElementById("fir_content_button").style.height = 0.04 * newheight + 'px';
    document.getElementById("navigation_hidden").style.height = newheight + 'px';
    document.getElementById("navigation_hidden2").style.marginTop = 0.15 * newheight + 'px'; //调整导航栏隐藏内容中链接的位置，让它缩放时不受影响
    document.getElementById("navigation_hidden3").style.marginTop = 0.32 * newheight + 'px';
    document.getElementById("navigation_hidden4").style.marginTop = 0.32 * newheight + 'px';
    document.getElementById("navigation_hidden5").style.marginTop = 0.56 * newheight + 'px';
    document.getElementById("navhiddenlink1").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink2").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink3").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink4").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink5").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink6").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink7").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink8").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink9").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink10").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink11").style.height = 0.06 * newheight + 'px';
    document.getElementById("navhiddenlink12").style.height = 0.06 * newheight + 'px';
    document.getElementById("wechatpicture1").style.width = 0.05 * newwidth + 'px';
    document.getElementById("wechatpicture1").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture1").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture1").style.height = 0.08 * newheight + 'px';
    document.getElementById("contain_in-fir_content6_bottom").style.width = newwidth + 'px';
    document.getElementById("contain_in-fir_content6_bottom").style.height = 0.44 * newheight + 'px';
    document.getElementById("blogandwechat1").style.width = 0.20 * newwidth + 'px';
    document.getElementById("fircontentbutton1").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton1").style.height = 0.03 * newheight + 'px';
    document.getElementById("fircontentbutton2").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton2").style.height = 0.03 * newheight + 'px';
    document.getElementById("fircontentbutton3").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton3").style.height = 0.03 * newheight + 'px';
    document.getElementById("fircontentbutton4").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton4").style.height = 0.03 * newheight + 'px';
    document.getElementById("fircontentbutton5").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton5").style.height = 0.03 * newheight + 'px';
    document.getElementById("fircontentbutton6").style.width = 0.015 * newwidth + 'px';
    document.getElementById("fircontentbutton6").style.height = 0.03 * newheight + 'px';
    document.getElementById("introduction1").style.width = 0.45 * newwidth + 'px'; //��һ���ֲ�ͼ�ײ������ӵ�����
    document.getElementById("introduction2_img").style.width = 0.015 * newwidth + 'px';
    document.getElementById("introduction2_img").style.height = 0.02 * newheight + 'px';
    document.getElementById("contain_in-fir_content").style.height = newheight + 'px';
    document.getElementById("contain_in-fir_content").style.width = newwidth + 'px';
    document.getElementById("contain_in-fir_content6_bottom").style.top = -0.45 * newheight + 'px';
    document.getElementById("QRcode1").style.left = 0.62 * newwidth + 'px';
    document.getElementById("QRcode1").style.height = 0.25 * newheight + 'px';
    document.getElementById("QRcode_img" + 2).style.height = 0.20 * newheight + 'px';
    document.getElementById("QRcode_img" + 1).style.height = 0.20 * newheight + 'px';
    document.getElementById("QRcode_img" + 1).style.width = 0.10 * newwidth + 'px';
    document.getElementById("QRcode_img" + 2).style.width = 0.10 * newwidth + 'px';
    document.getElementById("contain_in-second_top").style.width = newwidth + 'px'; //�ڶ���ҳ�涥������
    document.getElementById("contain_in-second_top").style.height = newheight + 'px'; //�ڶ���ҳ�涥���߶�
    document.getElementById("secondtopvalue").style.top = 0.02 * newheight + 'px'; //�ڶ���ҳ�涥������
    document.getElementById("secondtopvalue").style.left = 0.15 * newwidth + 'px';
    document.getElementById("secondtopvalue").style.width = 0.5 * newwidth + 'px'; //�ڶ���ҳ�涥������
    document.getElementById("secondcontentimg1").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥����һ��ͼƬ����
    document.getElementById("secondcontentimg1").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥����һ��ͼƬ�߶�
    document.getElementById("secondcontentimg2").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥���ڶ���ͼƬ����
    document.getElementById("secondcontentimg2").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥���ڶ���ͼƬ�߶�
    document.getElementById("secondcontentimg3").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥��������ͼƬ����
    document.getElementById("secondcontentimg3").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥��������ͼƬ�߶�
    document.getElementById("secondcontentimg4").style.width = 0.22 * newwidth + 'px'; //�ڶ���ҳ�涥��������ͼƬ����
    document.getElementById("secondcontentimg4").style.height = 0.6 * newheight + 'px'; //�ڶ���ҳ�涥��������ͼƬ�߶�
    document.getElementById("secondtopmain_content").style.marginLeft = 0.08 * newwidth + 'px'; //�ڶ���ҳ�涥����Ҫ��������λ��
    document.getElementById("secondtopmain_content").style.top = -0.06 * newheight + 'px';
    document.getElementById("secondtopmain_content").style.width = 0.90 * newwidth + 'px'; //�ڶ���ҳ����Ҫ����������С
    document.getElementById("column1").style.height = 0.70 * newheight + 'px'; //��һ�����εĸ�
    document.getElementById("column1").style.width = 0.22 * newwidth + 'px'; //��һ�����εĿ�
    document.getElementById("column1").style.top = -0.20 * height + 'px'; //��һ�����ε�λ��
    document.getElementById("column2").style.height = 0.70 * newheight + 'px'; //�ڶ������εĸ�
    document.getElementById("column2").style.width = 0.22 * newwidth + 'px'; //�ڶ������εĿ�
    document.getElementById("column2").style.top = -0.20 * height + 'px'; //�ڶ������ε�λ��
    document.getElementById("column3").style.height = 0.70 * newheight + 'px'; //���������εĸ�
    document.getElementById("column3").style.width = 0.22 * newwidth + 'px'; //���������εĿ�
    document.getElementById("column3").style.top = -0.20 * height + 'px'; //���������ε�λ��
    document.getElementById("column4").style.height = 0.70 * newheight + 'px'; //���ĸ����εĸ�
    document.getElementById("column4").style.width = 0.22 * newwidth + 'px'; //���ĸ����εĿ�
    document.getElementById("column4").style.top = -0.20 * height + 'px'; //���ĸ����ε�λ��
    document.getElementById("columnbutton1").style.width = 0.08 * newwidth + 'px'; //ÿ�������ϰ�ť�Ĵ�С
    document.getElementById("columnbutton1").style.height = 0.049 * newheight + 'px';
    document.getElementById("columnbutton2").style.width = 0.08 * newwidth + 'px';
    document.getElementById("columnbutton2").style.height = 0.049 * newheight + 'px';
    document.getElementById("columnbutton3").style.width = 0.08 * newwidth + 'px';
    document.getElementById("columnbutton3").style.height = 0.049 * newheight + 'px';
    document.getElementById("columnbutton4").style.width = 0.08 * newwidth + 'px';
    document.getElementById("columnbutton4").style.height = 0.049 * newheight + 'px';
    document.getElementById("contain_in-second_bottom").style.height = 0.4 * newheight + 'px';
    document.getElementById("contain_in-second_bottom").style.width = newwidth + 'px';
    document.getElementById("wechatpicture2").style.width = 0.05 * newwidth + 'px';
    document.getElementById("wechatpicture2").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture2").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture2").style.height = 0.08 * newheight + 'px';
    document.getElementById("QRcode2").style.left = 0.62 * newwidth + 'px';
    document.getElementById("blogandwechat2").style.width = 0.20 * newwidth + 'px';
    document.getElementById("introduction1_2").style.width = 0.45 * newwidth + 'px'; //��һ���ֲ�ͼ�ײ������ӵ�����
    document.getElementById("introduction5_img").style.width = 0.015 * newwidth + 'px';
    document.getElementById("introduction5_img").style.height = 0.02 * newheight + 'px';
    document.getElementById("contain_in3topleft").style.width = 0.45 * newwidth + 'px';
    document.getElementById("contain_in3topleft").style.height = newheight + 'px';
    document.getElementById("contain_in3leftimg").style.height = newheight + 'px'; //第三页左边背景
    document.getElementById("contain_in3middleimg").style.width = 0.49 * newwidth + 'px';
    document.getElementById("contain_in3middleimg").style.height = newheight + 'px'; //第三页中间背景
    document.getElementById("contain_in3leftimg").style.width = 0.49 * newwidth + 'px';
    document.getElementById("contain_in3topmiddle").style.width = 0.45 * newwidth + 'px';
    document.getElementById("contain_in3topmiddle").style.height = newheight + 'px';
    document.getElementById("contain_in3rightimg").style.height = newheight + 'px';
    document.getElementById("contain_in3rightimg").style.width = 0.1 * newwidth + 'px';
    document.getElementById("contain_in3topright").style.height = newheight + 'px';
    document.getElementById("contain_in3topright").style.width = 0.1 * newwidth + 'px';
    document.getElementById("containin3topleft_contentimg1").style.width = 0.3 * newwidth + 'px'; //第三页左边水滴大小
    document.getElementById("containin3topleft_contentimg1").style.height = 0.45 * newheight + 'px';
    document.getElementById("containin3topleft_contentimg1").style.top = 0.5 * newheight + 'px';
    document.getElementById("containin3topleft_contentimg1").style.left = 0.1 * newwidth + 'px';
    document.getElementById("water_leftvalue").style.top = -0.32 * newheight + 'px'; //第三页左边水滴内文字
    document.getElementById("water_leftvalue").style.width = 0.08 * newwidth + 'px';
    document.getElementById("water_leftvalue").style.height = 0.03 * newheight + 'px';
    document.getElementById("water_leftvalue").style.left = 0.21 * newwidth + 'px';
    document.getElementById("water_leftcontain").style.width = 0.08 * newwidth + 'px'; //第三页左边水滴中的按键
    document.getElementById("water_leftcontain").style.height = 0.04 * newheight + 'px';
    document.getElementById("water_leftcontain").style.top = -0.40 * newheight + 'px';
    document.getElementById("water_leftcontain").style.left = 0.21 * newwidth + 'px';
    document.getElementById("containin3topmiddle_contentimg1").style.width = 0.3 * newwidth + 'px'; //第三页中间水滴
    document.getElementById("containin3topmiddle_contentimg1").style.height = 0.45 * newheight + 'px';
    document.getElementById("containin3topmiddle_contentimg1").style.top = 0.5 * newheight + 'px';
    document.getElementById("containin3topmiddle_contentimg1").style.left = 0.5 * newwidth + 'px';
    document.getElementById("water_middlevalue").style.width = 0.08 * newwidth + 'px'; //第三页中间水滴文字
    document.getElementById("water_middlevalue").style.height = 0.03 * newheight + 'px';
    document.getElementById("water_middlevalue").style.top = -0.33 * newheight + 'px';
    document.getElementById("water_middlevalue").style.left = 0.17 * newwidth + 'px';
    document.getElementById("water_middlecontain").style.width = 0.08 * newwidth + 'px'; //第三页中间水滴的按钮
    document.getElementById("water_middlecontain").style.height = 0.04 * newheight + 'px';
    document.getElementById("water_middlecontain").style.top = -0.40 * newheight + 'px';
    document.getElementById("water_middlecontain").style.left = 0.167 * newwidth + 'px';
    document.getElementById("wechatpicture3").style.width = 0.05 * newwidth + 'px';
    document.getElementById("wechatpicture3").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture3").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture3").style.height = 0.08 * newheight + 'px';
    document.getElementById("QRcode3").style.left = 0.62 * newwidth + 'px';
    document.getElementById("blogandwechat3").style.width = 0.20 * newwidth + 'px';
    document.getElementById("introduction1_3").style.width = 0.45 * newwidth + 'px';
    document.getElementById("introduction7_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
    document.getElementById("introduction7_img").style.height = 0.02 * newheight + 'px';
    document.getElementById("contain_in4topcontent1").style.width = 0.25 * newwidth + 'px'; //第四页
    document.getElementById("contain_in4topcontent1").style.height = newheight + 'px';
    document.getElementById("contain_in4topcontent2").style.width = 0.25 * newwidth + 'px';
    document.getElementById("contain_in4topcontent2").style.height = newheight + 'px';
    document.getElementById("contain_in4topcontent3").style.width = 0.25 * newwidth + 'px';
    document.getElementById("contain_in4topcontent3").style.height = newheight + 'px';
    document.getElementById("contain_in4topcontent4").style.width = 0.25 * newwidth + 'px';
    document.getElementById("contain_in4topcontent4").style.height = newheight + 'px';
    document.getElementById("contain4topimg1").style.height = newheight + 'px';
    document.getElementById("contain4topimg1").style.width = 0.4 * newwidth + 'px';
    document.getElementById("contain4topimg2").style.height = newheight + 'px';
    document.getElementById("contain4topimg2").style.width = 0.4 * newwidth + 'px';
    document.getElementById("contain4topimg3").style.height = newheight + 'px';
    document.getElementById("contain4topimg3").style.width = 0.4 * newwidth + 'px';
    document.getElementById("contain4topimg4").style.height = newheight + 'px';
    document.getElementById("contain4topimg4").style.width = 0.4 * newwidth + 'px';
    //document.getElementById("page4_water1").style.left = 0.18 * newwidth + 'px';
    //document.getElementById("#page4_water1").style.legt=-0.68*newwidth+'px';
    document.getElementById("wechatpicture4").style.width = 0.05 * newwidth + 'px';
    document.getElementById("wechatpicture4").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture4").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture4").style.height = 0.08 * newheight + 'px';
    document.getElementById("QRcode4").style.left = 0.62 * newwidth + 'px';
    document.getElementById("blogandwechat4").style.width = 0.20 * newwidth + 'px';
    document.getElementById("introduction1_4").style.width = 0.45 * newwidth + 'px';
    document.getElementById("introduction6_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
    document.getElementById("introduction6_img").style.height = 0.02 * newheight + 'px';
    document.getElementById("contain_infifthtop").style.height = newheight + 'px';
    //document.getElementById("contain_infifthtop").style.width = newwidth + 'px';//出错
    document.getElementById("fifthpage_1").style.height = 0.5 * newheight + 'px'; //第五个页面顶部第一个容器
    document.getElementById("fifthpage_1").style.width = newwidth + 'px';
    document.getElementById("fifthpage_2").style.height = 0.5 * newheight + 'px'; //第五个页面顶部第二个容器
    document.getElementById("fifthpage_2").style.width = newwidth + 'px';
    document.getElementById("fifthpage_img1").style.width = 1.2 * newwidth + 'px'; //第五个页面顶部第一个背景图
    document.getElementById("fifthpage_img1").style.height = 0.65 * newheight + 'px';
    document.getElementById("fifthpage_img2").style.width = 1.2 * newwidth + 'px'; //第五个页面顶部第二个背景图
    document.getElementById("fifthpage_img2").style.height = 0.65 * newheight + 'px';
    document.getElementById("fifthpage_img1_1").style.width = 0.15 * newwidth + 'px'; //第五个页面最顶部右边图文
    document.getElementById("fifthpage_img1_1").style.height = 0.08 * newheight + 'px';
    document.getElementById("pagefive_water1").style.width = 0.6 * newwidth + 'px'; //第五个页面最顶部水滴图片
    document.getElementById("pagefive_water1").style.height = 0.7 * newheight + 'px';
    document.getElementById("pagefivesmallwater1").style.width = 0.01 * newwidth + 'px'; //第五个页面最顶部水滴中的小水滴
    document.getElementById("pagefivesmallwater1").style.height = 0.025 * newheight + 'px';
    document.getElementById("pagefivesmallwater1").style.top = -0.28 * newheight + 'px';
    document.getElementById("pagefivesmallwater1").style.left = 0.295 * newwidth + 'px';
    document.getElementById("pagefive_watervalue1").style.width = 0.10 * newwidth + 'px'; //第五个页面最顶部水滴中的图文
    document.getElementById("pagefive_watervalue1").style.height = 0.05 * newheight + 'px';
    document.getElementById("pagefive_watervalue1").style.top = -0.26 * newheight + 'px';
    document.getElementById("pagefive_watervalue1").style.left = 0.25 * newwidth + 'px';
    document.getElementById("pagefive_watercontain1").style.width = 0.08 * newwidth + 'px'; //第五页最顶部水滴中的按钮
    document.getElementById("pagefive_watercontain1").style.height = 0.05 * newheight + 'px';
    document.getElementById("pagefive_watercontain1").style.left = 0.26 * newwidth + 'px';
    document.getElementById("pagefive_watercontain1").style.top = -0.34 * newheight + 'px';
    document.getElementById("fifthpage_img1_2").style.width = 0.15 * newwidth + 'px'; //第五个页面顶部第二张图左边边图文
    document.getElementById("fifthpage_img1_2").style.height = 0.08 * newheight + 'px';
    document.getElementById("pagefive_water2").style.width = 0.6 * newwidth + 'px'; //第五个页面顶部第二个水滴图片
    document.getElementById("pagefive_water2").style.height = 0.7 * newheight + 'px';
    document.getElementById("pagefivesmallwater2").style.width = 0.01 * newwidth + 'px'; //第五个页面第二个水滴中的小水滴
    document.getElementById("pagefivesmallwater2").style.height = 0.025 * newheight + 'px';
    document.getElementById("pagefivesmallwater2").style.top = -0.28 * newheight + 'px';
    document.getElementById("pagefivesmallwater2").style.left = 0.295 * newwidth + 'px';
    document.getElementById("pagefive_watervalue2").style.width = 0.10 * newwidth + 'px'; //第五个页面第二个水滴中的图文
    document.getElementById("pagefive_watervalue2").style.height = 0.05 * newheight + 'px';
    document.getElementById("pagefive_watervalue2").style.top = -0.26 * newheight + 'px';
    document.getElementById("pagefive_watervalue2").style.left = 0.25 * newwidth + 'px';
    document.getElementById("pagefive_watercontain2").style.width = 0.08 * newwidth + 'px'; //第五页第二个水滴中的按钮
    document.getElementById("pagefive_watercontain2").style.height = 0.05 * newheight + 'px';
    document.getElementById("pagefive_watercontain2").style.left = 0.26 * newwidth + 'px';
    document.getElementById("pagefive_watercontain2").style.top = -0.34 * newheight + 'px';
    document.getElementById("wechatpicture5").style.width = 0.05 * newwidth + 'px'; //第五页底部
    document.getElementById("wechatpicture5").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture5").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture5").style.height = 0.08 * newheight + 'px';
    document.getElementById("QRcode5").style.left = 0.62 * newwidth + 'px';
    document.getElementById("blogandwechat5").style.width = 0.20 * newwidth + 'px';
    document.getElementById("introduction1_5").style.width = 0.45 * newwidth + 'px';
    document.getElementById("introduction8_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
    document.getElementById("introduction8_img").style.height = 0.02 * newheight + 'px';
    document.getElementById("page6topimg").style.width = newwidth + 'px'; //第六页
    document.getElementById("page6topimg").style.height = 0.7 * newheight + 'px';
    document.getElementById("page6top_contain").style.height = 0.5 * newheight + 'px';
    document.getElementById("page6waterouter_contain").style.width = newwidth + 'px';
    document.getElementById("page6waterouter_contain").style.top = -0.02 * newheight + 'px';
    document.getElementById("page6water").style.width = 0.14 * newwidth + 'px'; //设置水滴
    document.getElementById("page6water").style.height = 0.22 * newheight + 'px';
    document.getElementById("page6left").style.top = 0.0466 * newheight + 'px';
    document.getElementById("page6left").style.width = 0.80 * newwidth + 'px';
    document.getElementById("page6right").style.width = 0.78 * newwidth + 'px';
    document.getElementById("page6right").style.top = 0.0466 * newheight + 'px';
    document.getElementById("page6_watervalue").style.height = 0.14 * newheight + 'px'; //水滴中的文字
    document.getElementById("page6_watervalue").style.width = 0.06 * newwidth + 'px';
    document.getElementById("page6_watervalue").style.left = 0.465 * newwidth + 'px';
    document.getElementById("page6_watervalue").style.top = 0.04 * newheight + 'px';
    document.getElementById("page6top").style.width = newwidth + 'px'; //第六页顶部宽度
    document.getElementById("wechatpicture6").style.width = 0.05 * newwidth + 'px'; //第五页底部
    document.getElementById("wechatpicture6").style.height = 0.08 * newheight + 'px';
    document.getElementById("blogpicture6").style.width = 0.05 * newwidth + 'px';
    document.getElementById("blogpicture6").style.height = 0.08 * newheight + 'px';
    document.getElementById("QRcode6").style.left = 0.62 * newwidth + 'px';
    document.getElementById("blogandwechat6").style.width = 0.20 * newwidth + 'px';
    document.getElementById("introduction1_6").style.width = 0.45 * newwidth + 'px';
    document.getElementById("introduction9_img").style.width = 0.015 * newwidth + 'px'; //公安备号图片
    document.getElementById("introduction9_img").style.height = 0.02 * newheight + 'px';
    fir_button.style.left = ((0.7 * newwidth) / 2) + 'px';
}

var oDiv = document.getElementById("navigation_hidden");
var timer = null;

function navonover(num) //��������ť����
{
    var width = window.innerWidth;
    var newwidth = parseInt(width);
    for (i = 2; i <= 5; i++) {
        document.getElementById("navigation_hidden" + i).style.display = "none";
    }
    if (num >= 2 && num <= 5) {
        document.getElementById("navigation_hidden" + num).style.display = "block";
    } //һ��Ҫ��ʵ�涨�����ܳ���û�е�id��eg��navigation_hidden6����û�еģ��ᱨ�������һ�Ӱ�����
    if (num == 2) {
        document.getElementById("navigation_hidden").style.backgroundColor = "#f39e38";
        //document.getElementById("navigation_hidden").style.width = 0.07 * newwidth + 'px';
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = Math.ceil((0.07 * newwidth - oDiv.offsetWidth) / 8);
            if (oDiv.offsetWidth >= 0.07 * newwidth) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 30);
        if (y != 2) {
            navi_fir.style.backgroundColor = "#f39e38";
            document.getElementById('navigation2_img').src = 'picture/navi_2_1.png'
        }
    }
    if (num == 3) {
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = Math.ceil((0.07 * newwidth - oDiv.offsetWidth) / 8);
            if (oDiv.offsetWidth >= 0.07 * newwidth) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 30);
        document.getElementById("navigation_hidden").style.backgroundColor = "#eb6b64";
        if (y != 3) {
            navi_fir.style.backgroundColor = "#eb6b64";
            document.getElementById('navigation3_img').src = 'picture/navi_3_1.png';
        }
    }
    if (num == 4) {
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = Math.ceil((0.07 * newwidth - oDiv.offsetWidth) / 8);
            if (oDiv.offsetWidth >= 0.07 * newwidth) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 30);
        document.getElementById("navigation_hidden").style.backgroundColor = "#71bde4";
        if (y != 4) {
            navi_fir.style.backgroundColor = "#71bde4";
            document.getElementById('navigation4_img').src = 'picture/navi_4_1.png';
        }
    }
    if (num == 5) {
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = Math.ceil((0.07 * newwidth - oDiv.offsetWidth) / 8);
            if (oDiv.offsetWidth >= 0.07 * newwidth) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 30);
        document.getElementById("navigation_hidden").style.backgroundColor = "#26a13a";
        if (y != 5) {
            navi_fir.style.backgroundColor = "#26a13a";
            document.getElementById('navigation5_img').src = 'picture/navi_5_1.png';
        }
    }
    if (num == 6 && y != 6) {
        document.getElementById("navigation6_img").src = 'picture/navi_6_1.png';
        navi_fir.style.backgroundColor = "#f4aa47";
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }
    if (num == 1 && y != 1) {
        document.getElementById("navigation1_img").src = 'picture/navi_1_1.png';
        navi_fir.style.backgroundColor = "#26a13a";
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }

}

function nav_onout(num_nav_out) //��������ť�Ƴ�
{
    if (num_nav_out >= 2 && num_nav_out <= 5) {
        document.getElementById("navigation_hidden" + num_nav_out).style.display = "none";
    }

    if (num_nav_out == 1 && y != 1) {
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
    }
    if (num_nav_out == 2 && y != 2) {
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }
    if (num_nav_out == 3 && y != 3) {
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }
    if (num_nav_out == 4 && y != 4) {
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }
    if (num_nav_out == 5 && y != 5) {
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        clearInterval(timer);
        timer = setInterval(function() {
            var iSpeed = -1;
            if (oDiv.offsetWidth <= 0) {
                clearInterval(timer);
            } else {
                oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
            }
        }, 5);
    }
    if (num_nav_out == 6 && y != 6) {
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
    }
}

function nav_click(num_nav_click) //��������ť���
{
    if (num_nav_click == 2) {
        navi_fir.style.backgroundColor = "#f39e38";
        document.getElementById('navigation2_img').src = 'picture/navi_2.png';
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        document.getElementById("contain_in" + 3).style.display = "none";
        document.getElementById("contain_in" + 1).style.display = "none";
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        y = 2;
    }
    if (num_nav_click == 3) {
        navi_fir.style.backgroundColor = "#eb6b64";
        document.getElementById('navigation3_img').src = 'picture/navi_3.png';
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        y = 3;
    }
    if (num_nav_click == 4) {
        navi_fir.style.backgroundColor = "#71bde4";
        document.getElementById('navigation4_img').src = 'picture/navi_4.png';
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";

        y = 4;
    }
    if (num_nav_click == 5) {
        navi_fir.style.backgroundColor = "#26a13a";
        document.getElementById('navigation5_img').src = 'picture/navi_5.png';
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
        3
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        y = 5;
    }
    if (num_nav_click == 6) {
        navi_fir.style.backgroundColor = "#f4aa47";
        document.getElementById('navigation6_img').src = 'picture/navi_6.png';
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        document.getElementById('navigation1_img').src = 'picture/navi_1_2.png';
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        y = 6;
    }
    if (num_nav_click == 1) {
        navi_fir.style.backgroundColor = "#26a13a";
        document.getElementById('navigation1_img').src = 'picture/navi_1.png';
        document.getElementById('navigation3_img').src = 'picture/navi_3_2.png';
        document.getElementById('navigation4_img').src = 'picture/navi_4_2.png';
        document.getElementById('navigation5_img').src = 'picture/navi_5_2.png';
        document.getElementById('navigation6_img').src = 'picture/navi_6_2.png';
        document.getElementById('navigation2_img').src = 'picture/navi_2_2.png';
        for (i = 1; i <= 6; i++) {
            document.getElementById("contain_in" + i).style.display = "none";
        }
        document.getElementById("contain_in" + num_nav_click).style.display = "block";
        y = 1;
    }
    /*for (i = 1; i <= 6; i++)
    {
        document.getElementById("contain_in" + i).style.display = "none";
    }
    document.getElementById("contain_in" + num_nav_click).style.display = "block";*/
}
var fir_buttontimer = null;
var fir_content1 = document.getElementById("contain_in-fir_content1");
var fir_content2 = document.getElementById("contain_in-fir_content2");
var fir_content3 = document.getElementById("contain_in-fir_content3");
var fir_content4 = document.getElementById("contain_in-fir_content4");
var fir_content5 = document.getElementById("contain_in-fir_content5");
var fir_content6 = document.getElementById("contain_in-fir_content6");

function fir_contentbutton(change) //��һ���ֲ���ť���
{
    clearInterval(fir_buttontimer);
    for (i = 1; i <= 6; i++) {
        document.getElementById("fircontentbutton" + i).style.width = 0.017 * newwidth + 'px';
        document.getElementById("fircontentbutton" + i).style.height = 0.03 * newheight + 'px'; //����ťȫ������Ϊ��ӦԲ�Ĵ�С
    }
    document.getElementById("fircontentbutton" + change).style.width = 0.017 * newwidth + 'px';
    document.getElementById("fircontentbutton" + change).style.height = 0.05 * newheight + 'px'; //��������İ�ť��Ϊ��Ӧˮ�εĴ�С

    fir_buttontimer = setInterval(function() {
        var iSpeed = (-(change - 1) * newheight - fir_content1.offsetTop) / 12;
        if (iSpeed > 0) {
            iSpeed = Math.ceil(iSpeed);
        }
        if (iSpeed < 0) {
            iSpeed = Math.floor(iSpeed);
        }
        if (fir_content1.offsetTop == -(change - 1) * newheight) {
            clearInterval(fir_buttontimer);
        } else {
            fir_content1.style.top = fir_content1.offsetTop + iSpeed + 'px';
            fir_content2.style.top = fir_content1.offsetTop + 'px';
            fir_content3.style.top = fir_content1.offsetTop + 'px';
            fir_content4.style.top = fir_content1.offsetTop + 'px';
            fir_content5.style.top = fir_content1.offsetTop + 'px';
            fir_content6.style.top = fir_content1.offsetTop + 'px';
        }
    }, 15);

    for (k = 1; k <= 6; k++) {
        document.getElementById("fircontentbutton" + k).src = "picture/fircontent_button2.png";
    }
    document.getElementById("fircontentbutton" + change).src = "picture/fircontent_button1.png";
}
//鼠标滚动,有缺陷，不能滚多次，不能再一次没滚完的情况下滚第二次
function getStyle(obj, name) {
    if (obj.currentStyle) //支持currentstyle
    {
        return obj.currentStyle[name];
    } else //不支持currentstyle
    {
        return getComputedStyle(obj, false)[name];
    }
}

function movement(obj, attr, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function() {
            var cur = parseInt(getStyle(obj, attr));
            if (cur == target) {
                clearInterval(obj.timer);
            } else {
                var iSpeed = (target - cur) / 8;
                iSpeed = (iSpeed > 0) ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = (cur + iSpeed) + 'px';
            }
        }, 1)
}
window.currentpage = 1;
window.onload = function() {
    var fircontent = document.querySelector("#contain_in-fir_content");
    //非火狐浏览器
    if (fircontent.addEventListener) {
        //火狐
        fircontent.addEventListener("DOMMouseScroll", fn);
    }
    fircontent.onmousewheel = fn;
    var mousewheel = null;

    function fn(ev) {
        clearInterval(mousewheel);
        ev = ev || event;
        var dir = "";
        if (ev.wheelDelta) {
            dir = ev.wheelDelta > 0 ? "up" : "down";
        }
        if (ev.detail) {
            dir = ev.detail < 0 ? "up" : "down";
        }
        switch (dir) {
            case "up":
                {
                    if (fir_content1.offsetTop < 0) {
                        movement(fir_content1, 'top', fir_content1.offsetTop + newheight);
                        movement(fir_content2, 'top', fir_content1.offsetTop + newheight);
                        movement(fir_content3, 'top', fir_content1.offsetTop + newheight);
                        movement(fir_content4, 'top', fir_content1.offsetTop + newheight);
                        movement(fir_content5, 'top', fir_content1.offsetTop + newheight);
                        movement(fir_content6, 'top', fir_content1.offsetTop + newheight);
                        if (window.currentpage == 6) {
                            document.getElementById("fir_content_button").style.display = "flex";
                        }
                        window.currentpage--;
                        for (i = 1; i <= 6; i++) {
                            document.getElementById("fircontentbutton" + i).style.width = 0.017 * newwidth + 'px';
                            document.getElementById("fircontentbutton" + i).style.height = 0.03 * newheight + 'px'; //����ťȫ������Ϊ��ӦԲ�Ĵ�С
                        }
                        document.getElementById("fircontentbutton" + window.currentpage).style.width = 0.017 * newwidth + 'px';
                        document.getElementById("fircontentbutton" + window.currentpage).style.height = 0.05 * newheight + 'px';
                        for (k = 1; k <= 6; k++) {
                            document.getElementById("fircontentbutton" + k).src = "picture/fircontent_button2.png";
                        }
                        document.getElementById("fircontentbutton" + window.currentpage).src = "picture/fircontent_button1.png";
                    }
                }
                break;
            case "down":
                {
                    if (fir_content1.offsetTop >= -4 * newheight) {
                        movement(fir_content1, 'top', fir_content1.offsetTop - newheight);
                        movement(fir_content2, 'top', fir_content1.offsetTop - newheight);
                        movement(fir_content3, 'top', fir_content1.offsetTop - newheight);
                        movement(fir_content4, 'top', fir_content1.offsetTop - newheight);
                        movement(fir_content5, 'top', fir_content1.offsetTop - newheight);
                        movement(fir_content6, 'top', fir_content1.offsetTop - newheight);
                        window.currentpage++;
                        for (i = 1; i <= 6; i++) {
                            document.getElementById("fircontentbutton" + i).style.width = 0.017 * newwidth + 'px';
                            document.getElementById("fircontentbutton" + i).style.height = 0.03 * newheight + 'px'; //����ťȫ������Ϊ��ӦԲ�Ĵ�С
                        }
                        document.getElementById("fircontentbutton" + window.currentpage).style.width = 0.017 * newwidth + 'px';
                        document.getElementById("fircontentbutton" + window.currentpage).style.height = 0.05 * newheight + 'px';
                        for (k = 1; k <= 6; k++) {
                            document.getElementById("fircontentbutton" + k).src = "picture/fircontent_button2.png";
                        }
                        document.getElementById("fircontentbutton" + window.currentpage).src = "picture/fircontent_button1.png";
                        if (window.currentpage == 6) {
                            document.getElementById("fir_content_button").style.display = "none";
                        }
                    }
                }
                break;
        }
        //禁止事件的默认行为 dom2
        if (ev.preventDefault) {
            ev.preventDefault();
        }
        //禁止事件的默认行为，防止系统滚动条的影响  dom0
        return false;
    }
}

function navhiddenover(hide) //���뵼�����������ݵĳ���������
{
    clearInterval(timer);
    timer = setInterval(function() {
        var iSpeed = Math.ceil((0.07 * newwidth - oDiv.offsetWidth) / 8);
        if (oDiv.offsetWidth >= 0.07 * newwidth) {
            clearInterval(timer);
        } else {
            oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
        }
    }, 30);
    document.getElementById("navigation_hidden" + hide).style.display = "block";
    if (2 == hide) {
        document.getElementById("navigation_hidden").style.backgroundColor = "#f39e38";
    }
    if (3 == hide) {
        document.getElementById("navigation_hidden").style.backgroundColor = "#eb6b64";
    }
    if (4 == hide) {
        document.getElementById("navigation_hidden").style.backgroundColor = "#71bde4";
    }
    if (5 == hide) {
        document.getElementById("navigation_hidden").style.backgroundColor = "#26a13a";
    }
}

function navhiddenout(out) //�Ƴ��������������ݵĳ���������
{
    clearInterval(timer);
    timer = setInterval(function() {
        var iSpeed = -1;
        if (oDiv.offsetWidth <= 0) {
            clearInterval(timer);
        } else {
            oDiv.style.width = oDiv.offsetWidth + iSpeed + 'px';
        }
    }, 5);
    document.getElementById("navigation_hidden" + out).style.display = "none";
}

function navhiddenlinkover(over) //���������ݵĳ�������������Ч��
{
    for (i = 1; i <= 12; i++) {
        document.getElementById("navhiddenlink" + over).style.backgroundColor = "transparent";
    }
    if (1 <= over && 4 >= over) {
        document.getElementById("navhiddenlink" + over).style.backgroundColor = "rgb(250,200,0,0.5)";
    }
    if (4 < over && 6 >= over) {
        document.getElementById("navhiddenlink" + over).style.backgroundColor = "rgb(255,192,203,0.5)";
    }
    if (6 < over && 10 >= over) {
        document.getElementById("navhiddenlink" + over).style.backgroundColor = "rgb(51,102,205,0.2)";
    }
    if (10 < over && 12 >= over) {
        document.getElementById("navhiddenlink" + over).style.backgroundColor = "rgb(0,255,0,0.2)";
    }
}

function navhiddenlinkout(out) //���������ݵĳ����������Ƴ�Ч��
{
    document.getElementById("navhiddenlink" + out).style.backgroundColor = "transparent";
}

function blogover(num) //΢��ͼ��������
{
    document.getElementById("blog" + num).style.color = "#fff";
    document.getElementById("blogpicture" + num).src = "picture/blog1.png";
}

function blogout(num) //΢��ͼ�����Ƴ�
{
    document.getElementById("blog" + num).style.color = "rgba(255, 255, 255,0.6)";
    document.getElementById("blogpicture" + num).src = "picture/blog2.png";
}

var timervx = null;

function wechatover(num) //΢��ͼ��������
{
    clearInterval(timervx);
    document.getElementById("wechat" + num).style.color = "#fff";
    document.getElementById("wechatpicture" + num).src = "picture/wechat1.png";
    var code = document.getElementById("QRcode" + num);
    timervx = setInterval(function() {
        var iSpeed = 5;
        if (code.offsetWidth >= 0.10 * newwidth) {
            clearInterval(timervx);
        } else {
            code.style.width = code.offsetWidth + iSpeed + 'px';
        }
    }, 1);
}

function wechatout(num) //΢��ͼ�����Ƴ�
{
    clearInterval(timervx);
    document.getElementById("wechat" + num).style.color = "rgba(255, 255, 255,0.6)";
    document.getElementById("wechatpicture" + num).src = "picture/wechat2.png";
    var code = document.getElementById("QRcode" + num);
    timervx = setInterval(function() {
        var iSpeed = -5;
        if (code.offsetWidth <= 0) {
            clearInterval(timervx);
        } else {
            code.style.width = code.offsetWidth + iSpeed + 'px';
        }
    }, 1);
}

function introduction1over(num) //��һҳ�ֲ�ͼ�ײ��ĳ�����
{
    document.getElementById("introduction1_contain" + num).style.color = "#fff";
}

function introduction1out(num) {
    document.getElementById("introduction1_contain" + num).style.color = "#b5b5b6";
}

function introduction2over(num) {
    document.getElementById("introduction2_contain").style.color = "#fff";
}

function introduction2out(num) {
    document.getElementById("introduction2_contain").style.color = "#b5b5b6";
}

function introduction3over(num) {
    document.getElementById("introduction3_contain" + num).style.color = "#fff";
}

function introduction3out(num) {
    document.getElementById("introduction3_contain" + num).style.color = "#b5b5b6";
}
//第二页
var secondtimer1 = null;
var secondtimer2 = null;
var secondtimer3 = null;
var secondtimer4 = null;
var secondimg1 = document.getElementById("secondcontentimg1");
var secondimg2 = document.getElementById("secondcontentimg2");
var secondimg3 = document.getElementById("secondcontentimg3");
var secondimg4 = document.getElementById("secondcontentimg4");
var colunmn1 = document.getElementById("column1");
var colunmn2 = document.getElementById("column2");
var colunmn3 = document.getElementById("column3");
var colunmn4 = document.getElementById("column4");

function secondtopover(num) //�ڶ���ҳ��ͼƬ������
{
    document.getElementById("columnbutton" + num).style.backgroundColor = "#fff";
    if (num == 1) {
        document.getElementById("columnbutton" + num).style.color = "#f39e38";
        clearInterval(secondtimer1);
        var iSpeed = Math.ceil((0.28 * newwidth - secondimg1.offsetWidth) / 8);
        secondtimer1 = setInterval(function() {
            if (secondimg1.offsetWidth >= 0.28 * newwidth) {
                clearInterval(secondtimer1);
            } else {
                secondimg1.style.width = secondimg1.offsetWidth + 2 * iSpeed + 'px';
                colunmn1.style.width = colunmn1.offsetWidth + 2 * iSpeed + 'px';
                secondimg1.style.height = secondimg1.offsetHeight + iSpeed + 'px';
                colunmn1.style.height = colunmn1.offsetHeight + iSpeed + 'px';
            }
        }, 60);

    }
    if (num == 2) {
        document.getElementById("columnbutton" + num).style.color = "#eb6b64";
        clearInterval(secondtimer2);
        var iSpeed = Math.ceil((0.28 * newwidth - secondimg2.offsetWidth) / 8);
        secondtimer2 = setInterval(function() {
            if (secondimg2.offsetWidth >= 0.28 * newwidth) {
                clearInterval(secondtimer2);
            } else {
                secondimg2.style.width = secondimg2.offsetWidth + 2 * iSpeed + 'px';
                colunmn2.style.width = colunmn2.offsetWidth + 2 * iSpeed + 'px';
                secondimg2.style.height = secondimg2.offsetHeight + iSpeed + 'px';
                colunmn2.style.height = colunmn4.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
    if (num == 3) {
        document.getElementById("columnbutton" + num).style.color = "#71bde4";
        clearInterval(secondtimer3);
        var iSpeed = Math.ceil((0.28 * newwidth - secondimg3.offsetWidth) / 8);
        secondtimer3 = setInterval(function() {
            if (secondimg3.offsetWidth >= 0.28 * newwidth) {
                clearInterval(secondtimer3);
            } else {
                secondimg3.style.width = secondimg3.offsetWidth + 2 * iSpeed + 'px';
                colunmn3.style.width = colunmn3.offsetWidth + 2 * iSpeed + 'px';
                secondimg3.style.height = secondimg3.offsetHeight + iSpeed + 'px';
                colunmn3.style.height = colunmn4.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
    if (num == 4) {
        document.getElementById("columnbutton" + num).style.color = "#81c043";
        clearInterval(secondtimer4);
        var iSpeed = Math.ceil((0.28 * newwidth - secondimg4.offsetWidth) / 8);
        secondtimer4 = setInterval(function() {
            if (secondimg4.offsetWidth >= 0.28 * newwidth) {
                clearInterval(secondtimer4);
            } else {
                secondimg4.style.width = secondimg4.offsetWidth + 2 * iSpeed + 'px';
                colunmn4.style.width = colunmn4.offsetWidth + 2 * iSpeed + 'px';
                secondimg4.style.height = secondimg4.offsetHeight + iSpeed + 'px';
                colunmn4.style.height = colunmn4.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
}

function secondtopout(num) //�ڶ���ҳ��ͼƬ���Ƴ�
{
    document.getElementById("columnbutton" + num).style.backgroundColor = "transparent";
    document.getElementById("columnbutton" + num).style.color = "#fff";
    if (num == 1) {
        clearInterval(secondtimer1);
        var iSpeed = Math.floor((0.22 * newwidth - secondimg1.offsetWidth) / 8);
        secondtimer1 = setInterval(function() {
            if (secondimg1.offsetWidth <= 0.22 * newwidth) {
                clearInterval(secondtimer1);
            } else {
                secondimg1.style.width = secondimg1.offsetWidth + 2 * iSpeed + 'px';
                colunmn1.style.width = colunmn1.offsetWidth + 2 * iSpeed + 'px';
                secondimg1.style.height = secondimg1.offsetHeight + iSpeed + 'px';
                colunmn1.style.height = colunmn1.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
    if (num == 2) {
        clearInterval(secondtimer2);
        var iSpeed = Math.floor((0.22 * newwidth - secondimg2.offsetWidth) / 8);
        secondtimer2 = setInterval(function() {
            if (secondimg2.offsetWidth <= 0.22 * newwidth) {
                clearInterval(secondtimer2);
            } else {
                secondimg2.style.width = secondimg2.offsetWidth + 2 * iSpeed + 'px';
                colunmn2.style.width = colunmn2.offsetWidth + 2 * iSpeed + 'px';
                secondimg2.style.height = secondimg2.offsetHeight + iSpeed + 'px';
                colunmn2.style.height = colunmn2.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
    if (num == 3) {
        clearInterval(secondtimer3);
        var iSpeed = Math.floor((0.22 * newwidth - secondimg3.offsetWidth) / 8);
        secondtimer3 = setInterval(function() {
            if (secondimg3.offsetWidth <= 0.22 * newwidth) {
                clearInterval(secondtimer3);
            } else {
                secondimg3.style.width = secondimg3.offsetWidth + 2 * iSpeed + 'px';
                colunmn3.style.width = colunmn3.offsetWidth + 2 * iSpeed + 'px';
                secondimg3.style.height = secondimg3.offsetHeight + iSpeed + 'px';
                colunmn3.style.height = colunmn3.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
    if (num == 4) {
        clearInterval(secondtimer4);
        var iSpeed = Math.floor((0.22 * newwidth - secondimg4.offsetWidth) / 8);
        secondtimer4 = setInterval(function() {
            if (secondimg4.offsetWidth <= 0.22 * newwidth) {
                clearInterval(secondtimer4);
            } else {
                secondimg4.style.width = secondimg4.offsetWidth + 2 * iSpeed + 'px';
                colunmn4.style.width = colunmn4.offsetWidth + 2 * iSpeed + 'px';
                secondimg4.style.height = secondimg4.offsetHeight + iSpeed + 'px';
                colunmn4.style.height = colunmn4.offsetHeight + iSpeed + 'px';
            }
        }, 60);
    }
}

function introduction1_2over(num) //�ڶ�ҳ�ײ��ĳ�����
{
    document.getElementById("introduction1_2_contain" + num).style.color = "#fff";
}

function introduction1_2out(num) {
    document.getElementById("introduction1_2_contain" + num).style.color = "#b5b5b6";
}

function introduction2_2over(num) {
    document.getElementById("introduction2_2_contain").style.color = "#fff";
}

function introduction2_2out(num) {
    document.getElementById("introduction2_2_contain").style.color = "#b5b5b6";
}

function introduction3_2over(num) {
    document.getElementById("introduction3_2_contain" + num).style.color = "#fff";
}

function introduction3_2out(num) {
    document.getElementById("introduction3_2_contain" + num).style.color = "#b5b5b6";
}




//第三页
var left = document.getElementById("contain_in3leftimg");
var contain3timerleft = null;
var page4left = document.getElementById("contain_in3topleft");
var leftwater = document.getElementById("containin3topleft_contentimg1");
var leftbutton = document.getElementById("water_leftcontain");
page4left.onmouseover = function() {
    clearInterval(contain3timerleft);
    contain3timerleft = setInterval(function() {
        var iSpeed = Math.ceil((0.58 * newwidth - left.offsetWidth) / 18);
        if (left.offsetWidth >= 0.58 * newwidth) {
            clearInterval(contain3timerleft);
        } else {
            left.style.width = left.offsetWidth + 2 * iSpeed + 'px';
            leftwater.style.height = leftwater.offsetHeight - iSpeed + 'px';
            right.style.width = right.offsetWidth + 100 * iSpeed + 'px';
        }
    }, 30);
    leftbutton.style.color = "#ef9a38";
    leftbutton.style.backgroundColor = "#fff";
}
page4left.onmouseout = function() {
    clearInterval(contain3timerleft);
    contain3timerleft = setInterval(function() {
        var iSpeed = Math.floor((0.49 * newwidth - left.offsetWidth) / 18);
        if (left.offsetWidth <= 0.49 * newwidth) {
            clearInterval(contain3timerleft);
        } else {
            left.style.width = left.offsetWidth + 2 * iSpeed + 'px';
            leftwater.style.height = leftwater.offsetHeight - iSpeed + 'px';
            right.style.width = right.offsetWidth + 100 * iSpeed + 'px';
        }
    }, 30);
    leftbutton.style.backgroundColor = "transparent";
    leftbutton.style.color = "#fff";
}
var middle = document.getElementById("contain_in3middleimg");
var contain3timermiddle = null;
var page3middle = document.getElementById("contain_in3topmiddle");
var middlewater = document.getElementById("containin3topmiddle_contentimg1");
var right = document.getElementById("contain_in3rightimg");
var middlebutton = document.getElementById("water_middlecontain");
page3middle.onmouseover = function() {
    clearInterval(contain3timermiddle); //绝对不能加双引号
    contain3timermiddle = setInterval(function() {
        var iSpeed = Math.ceil((0.58 * newwidth - middle.offsetWidth) / 18);
        if (middle.offsetWidth >= 0.58 * newwidth) {
            clearInterval(contain3timermiddle);
        } else {
            middle.style.width = middle.offsetWidth + 2 * iSpeed + 'px';
            //middle.style.height = middle.offsetHeight + iSpeed + 'px';
            middlewater.style.height = middlewater.offsetHeight - iSpeed + 'px';
            right.style.width = right.offsetWidth + 100 * iSpeed + 'px';
        }
    }, 30);
    middlebutton.style.color = "#e47065";
    middlebutton.style.backgroundColor = "#fff";
}
page3middle.onmouseout = function() {
    clearInterval(contain3timermiddle);
    contain3timermiddle = setInterval(function() {
        var iSpeed = Math.floor((0.49 * newwidth - middle.offsetWidth) / 18);
        if (middle.offsetWidth <= 0.49 * newwidth) {
            clearInterval(contain3timermiddle);
        } else {
            middle.style.width = middle.offsetWidth + 2 * iSpeed + 'px';
            // middle.style.height = middle.offsetHeight + iSpeed + 'px';
            middlewater.style.height = middlewater.offsetHeight - iSpeed + 'px';
            right.style.width = right.offsetWidth + 100 * iSpeed + 'px';
        }
    }, 30);
    middlebutton.style.color = "#fff";
    middlebutton.style.backgroundColor = "transparent";
}

function introduction1_3over(num) //�ڶ�ҳ�ײ��ĳ�����
{
    document.getElementById("introduction1_3_contain" + num).style.color = "#fff";
}

function introduction1_3out(num) {
    document.getElementById("introduction1_3_contain" + num).style.color = "#b5b5b6";
}

function introduction2_3over(num) {
    document.getElementById("introduction2_3_contain").style.color = "#fff";
}

function introduction2_3out(num) {
    document.getElementById("introduction2_3_contain").style.color = "#b5b5b6";
}

function introduction3_3over(num) {
    document.getElementById("introduction3_3_contain" + num).style.color = "#fff";
}

function introduction3_3out(num) {
    document.getElementById("introduction3_3_contain" + num).style.color = "#b5b5b6";
}




//第四页
var contain4timer1 = null;
var contain1 = document.getElementById("contain_in4topcontent1");
var contain4timer2 = null;
var contain2 = document.getElementById("contain_in4topcontent2");
var contain4timer3 = null;
var contain3 = document.getElementById("contain_in4topcontent3");
var contain4timer4 = null;
var contain4 = document.getElementById("contain_in4topcontent4");
contain1.onmouseover = function() {
    clearInterval(contain4timer1);
    var iSpeed = Math.ceil((0.35 * newwidth - contain1.offsetWidth) / 8);
    contain4timer1 = setInterval(function() {
        if (contain1.offsetWidth >= 0.35 * newwidth) {
            clearInterval(contain4timer1);
        } else {
            contain1.style.width = contain1.offsetWidth + iSpeed + 'px';
        }
    }, 30);
}
contain1.onmouseout = function() {
    clearInterval(contain4timer1);
    var iSpeed = Math.floor((0.25 * newwidth - contain1.offsetWidth) / 8);
    contain4timer1 = setInterval(function() {
        if (contain1.offsetWidth <= 0.25 * newwidth) {
            clearInterval(contain4timer1);
        } else {
            contain1.style.width = contain1.offsetWidth + iSpeed + 'px';
        }
    }, 30);
}

contain2.onmouseover = function() {
    clearInterval(contain4timer2);
    var iSpeed = Math.ceil((0.35 * newwidth - contain2.offsetWidth) / 8);
    contain4timer2 = setInterval(function() {
        if (contain2.offsetWidth >= 0.35 * newwidth) {
            clearInterval(contain4timer2);
        } else {
            contain2.style.width = contain2.offsetWidth + iSpeed + 'px';
            //contain1.style.width = contain1.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}
contain2.onmouseout = function() {
    clearInterval(contain4timer2);
    var iSpeed = Math.floor((0.25 * newwidth - contain2.offsetWidth) / 8);
    contain4timer2 = setInterval(function() {
        if (contain2.offsetWidth <= 0.25 * newwidth) {
            clearInterval(contain4timer2);
        } else {
            contain2.style.width = contain2.offsetWidth + iSpeed + 'px';
            // contain1.style.width = contain1.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}

contain3.onmouseover = function() {
    clearInterval(contain4timer3);
    var iSpeed = Math.ceil((0.35 * newwidth - contain3.offsetWidth) / 8);
    contain4timer3 = setInterval(function() {
        if (contain3.offsetWidth >= 0.35 * newwidth) {
            clearInterval(contain4timer3);
        } else {
            contain3.style.width = contain3.offsetWidth + iSpeed + 'px';
            // contain2.style.width = contain2.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}
contain3.onmouseout = function() {
    clearInterval(contain4timer3);
    var iSpeed = Math.floor((0.25 * newwidth - contain3.offsetWidth) / 8);
    contain4timer3 = setInterval(function() {
        if (contain3.offsetWidth <= 0.25 * newwidth) {
            clearInterval(contain4timer3);
        } else {
            contain3.style.width = contain3.offsetWidth + iSpeed + 'px';
            //contain2.style.width = contain2.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}
contain4.onmouseover = function() {
    clearInterval(contain4timer4);
    var iSpeed = Math.ceil((0.35 * newwidth - contain4.offsetWidth) / 8);
    contain4timer4 = setInterval(function() {
        if (contain4.offsetWidth >= 0.35 * newwidth) {
            clearInterval(contain4timer4);
        } else {
            contain4.style.width = contain4.offsetWidth + iSpeed + 'px';
            //contain3.style.width = contain3.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}
contain4.onmouseout = function() {
    clearInterval(contain4timer4);
    var iSpeed = Math.floor((0.25 * newwidth - contain4.offsetWidth) / 8);
    contain4timer4 = setInterval(function() {
        if (contain4.offsetWidth <= 0.25 * newwidth) {
            clearInterval(contain4timer4);
        } else {
            contain4.style.width = contain4.offsetWidth + iSpeed + 'px';
            //contain3.style.width = contain3.offsetWidth - iSpeed + 'px';
        }
    }, 30);
}

function introduction1_4over(num) //�ڶ�ҳ�ײ��ĳ�����
{
    document.getElementById("introduction1_4_contain" + num).style.color = "#fff";
}

function introduction1_4out(num) {
    document.getElementById("introduction1_4_contain" + num).style.color = "#b5b5b6";
}

function introduction2_4over(num) {
    document.getElementById("introduction2_4_contain").style.color = "#fff";
}

function introduction2_4out(num) {
    document.getElementById("introduction2_4_contain").style.color = "#b5b5b6";
}

function introduction3_4over(num) {
    document.getElementById("introduction3_4_contain" + num).style.color = "#fff";
}

function introduction3_4out(num) {
    document.getElementById("introduction3_4_contain" + num).style.color = "#b5b5b6";
}


//第五页顶部第一个图
var pagefivetoptimer1 = null;
var pagefivewater1 = document.getElementById("pagefive_water1");
var pagefivetopimg1 = document.getElementById("fifthpage_img1");
var pagefivetop1 = document.getElementById("fifthpage_1");
pagefivetop1.onmouseover = function() {
    clearInterval(pagefivetoptimer1);
    var iSpeed = Math.ceil((0.70 * newheight - pagefivetopimg1.offsetHeight) / 8);
    pagefivetoptimer1 = setInterval(function() {
        if (pagefivetopimg1.offsetHeight >= 0.70 * newheight) {
            clearInterval(pagefivetoptimer1);
        } else {
            pagefivewater1.style.height = pagefivewater1.offsetHeight - 2 * iSpeed + 'px';
            pagefivetopimg1.style.height = pagefivetopimg1.offsetHeight + iSpeed + 'px';
            pagefivetopimg1.style.width = pagefivetopimg1.offsetWidth + iSpeed + 'px';
        }
    }, 30);
    document.getElementById("pagefive_watercontain1").style.color = "#E47065";
    document.getElementById("pagefive_watercontain1").style.backgroundColor = "#fff";
}
pagefivetop1.onmouseout = function() {
        clearInterval(pagefivetoptimer1);
        var iSpeed = Math.floor((0.65 * newheight - pagefivetopimg1.offsetHeight) / 8);
        pagefivetoptimer1 = setInterval(function() {
            if (pagefivetopimg1.offsetHeight <= 0.65 * newheight) {
                clearInterval(pagefivetoptimer1);
            } else {
                pagefivewater1.style.height = pagefivewater1.offsetHeight - 2 * iSpeed + 'px';
                pagefivetopimg1.style.height = pagefivetopimg1.offsetHeight + iSpeed + 'px';
                pagefivetopimg1.style.width = pagefivetopimg1.offsetWidth + iSpeed + 'px';
            }
        }, 30);
        document.getElementById("pagefive_watercontain1").style.color = "#fff";
        document.getElementById("pagefive_watercontain1").style.backgroundColor = "transparent";
    }
    //第五页顶部第二个图
var pagefivetoptimer2 = null;
var pagefivewater2 = document.getElementById("pagefive_water2");
var pagefivetopimg2 = document.getElementById("fifthpage_img2");
var pagefivetop2 = document.getElementById("fifthpage_2");
pagefivetop2.onmouseover = function() {
    clearInterval(pagefivetoptimer2);
    var iSpeed = Math.ceil((0.70 * newheight - pagefivetopimg2.offsetHeight) / 8);
    pagefivetoptimer2 = setInterval(function() {
        if (pagefivetopimg2.offsetHeight >= 0.70 * newheight) {
            clearInterval(pagefivetoptimer2);
        } else {
            pagefivewater2.style.height = pagefivewater2.offsetHeight - 2 * iSpeed + 'px';
            pagefivetopimg2.style.height = pagefivetopimg2.offsetHeight + iSpeed + 'px';
            pagefivetopimg2.style.width = pagefivetopimg2.offsetWidth + iSpeed + 'px';
        }
    }, 30);
    document.getElementById("pagefive_watercontain2").style.color = "#71bae1";
    document.getElementById("pagefive_watercontain2").style.backgroundColor = "#fff";
}
pagefivetop2.onmouseout = function() {
    clearInterval(pagefivetoptimer2);
    var iSpeed = Math.floor((0.65 * newheight - pagefivetopimg2.offsetHeight) / 8);
    pagefivetoptimer2 = setInterval(function() {
        if (pagefivetopimg2.offsetHeight <= 0.65 * newheight) {
            clearInterval(pagefivetoptimer2);
        } else {
            pagefivewater2.style.height = pagefivewater2.offsetHeight - 2 * iSpeed + 'px';
            pagefivetopimg2.style.height = pagefivetopimg2.offsetHeight + iSpeed + 'px';
            pagefivetopimg2.style.width = pagefivetopimg2.offsetWidth + iSpeed + 'px';
        }
    }, 30);
    document.getElementById("pagefive_watercontain2").style.color = "#fff";
    document.getElementById("pagefive_watercontain2").style.backgroundColor = "transparent";
}

//第五页底部
function introduction1_5over(num) //�ڶ�ҳ�ײ��ĳ�����
{
    document.getElementById("introduction1_5_contain" + num).style.color = "#fff";
}

function introduction1_5out(num) {
    document.getElementById("introduction1_5_contain" + num).style.color = "#b5b5b6";
}

function introduction2_5over(num) {
    document.getElementById("introduction2_5_contain").style.color = "#fff";
}

function introduction2_5out(num) {
    document.getElementById("introduction2_5_contain").style.color = "#b5b5b6";
}

function introduction3_5over(num) {
    document.getElementById("introduction3_5_contain" + num).style.color = "#fff";
}

function introduction3_5out(num) {
    document.getElementById("introduction3_5_contain" + num).style.color = "#b5b5b6";
}
//第六页文章的轮播
function article(num) {
    for (i = 1; i <= 4; i++) {
        document.getElementById("datecontain" + i).style.display = "none";
        document.getElementById("articlecontain" + i).style.display = "none";
    }
    document.getElementById("datecontain" + num).style.display = "block";
    document.getElementById("articlecontain" + num).style.display = "block";
}
document.getElementById("articlebuttonleft").onclick = function() {
    if (document.getElementById("datecontain1").style.display == "block") {
        document.getElementById("datecontain1").style.display = "none";
        document.getElementById("articlecontain1").style.display = "none";
        document.getElementById("datecontain4").style.display = "block";
        document.getElementById("articlecontain4").style.display = "block";
    } else {
        if (document.getElementById("datecontain4").style.display == "block") {
            document.getElementById("datecontain4").style.display = "none";
            document.getElementById("articlecontain4").style.display = "none";
            document.getElementById("datecontain3").style.display = "block";
            document.getElementById("articlecontain3").style.display = "block";
        } else {
            if (document.getElementById("datecontain3").style.display == "block") {
                document.getElementById("datecontain3").style.display = "none";
                document.getElementById("articlecontain3").style.display = "none";
                document.getElementById("datecontain2").style.display = "block";
                document.getElementById("articlecontain2").style.display = "block";
            } else {

                document.getElementById("datecontain2").style.display = "none";
                document.getElementById("articlecontain2").style.display = "none";
                document.getElementById("datecontain1").style.display = "block";
                document.getElementById("articlecontain1").style.display = "block";

            }
        }
    }
}
document.getElementById("articlebuttonright").onclick = function() {
    if (document.getElementById("datecontain1").style.display == "block") {
        document.getElementById("datecontain1").style.display = "none";
        document.getElementById("articlecontain1").style.display = "none";
        document.getElementById("datecontain2").style.display = "block";
        document.getElementById("articlecontain2").style.display = "block";
    } else {
        if (document.getElementById("datecontain4").style.display == "block") {
            document.getElementById("datecontain4").style.display = "none";
            document.getElementById("articlecontain4").style.display = "none";
            document.getElementById("datecontain1").style.display = "block";
            document.getElementById("articlecontain1").style.display = "block";
        } else {
            if (document.getElementById("datecontain3").style.display == "block") {
                document.getElementById("datecontain3").style.display = "none";
                document.getElementById("articlecontain3").style.display = "none";
                document.getElementById("datecontain4").style.display = "block";
                document.getElementById("articlecontain4").style.display = "block";
            } else {
                document.getElementById("datecontain2").style.display = "none";
                document.getElementById("articlecontain2").style.display = "none";
                document.getElementById("datecontain3").style.display = "block";
                document.getElementById("articlecontain3").style.display = "block";
            }
        }
    }
}

function articlebuttonover(num) {
    if (num == 5) {
        document.getElementById("articlebuttonleft").style.color = "green";
        document.getElementById("articlebuttonleft").style.backgroundColor = "#eb6b64";
    } else {
        if (num == 6) {
            document.getElementById("articlebuttonright").style.color = "green";
            document.getElementById("articlebuttonright").style.backgroundColor = "#eb6b64";
        } else {
            document.getElementById("articlebutton" + num).style.color = "green";
            document.getElementById("articlebutton" + num).style.backgroundColor = "#eb6b64";
        }
    }
}

function articlebuttonout(num) {
    if (num == 5) {
        document.getElementById("articlebuttonleft").style.color = "#81c043";
        document.getElementById("articlebuttonleft").style.backgroundColor = "transparent";
    } else {
        if (num == 6) {
            document.getElementById("articlebuttonright").style.color = "#81c043";
            document.getElementById("articlebuttonright").style.backgroundColor = "transparent";
        } else {
            document.getElementById("articlebutton" + num).style.color = "#81c043";
            document.getElementById("articlebutton" + num).style.backgroundColor = "transparent";
        }
    }
}
//第六页底部
function introduction1_6over(num) {
    document.getElementById("introduction1_6_contain" + num).style.color = "#fff";
}

function introduction1_6out(num) {
    document.getElementById("introduction1_6_contain" + num).style.color = "#b5b5b6";
}

function introduction2_6over(num) {
    document.getElementById("introduction2_6_contain").style.color = "#fff";
}

function introduction2_6out(num) {
    document.getElementById("introduction2_6_contain").style.color = "#b5b5b6";
}

function introduction3_6over(num) {
    document.getElementById("introduction3_6_contain" + num).style.color = "#fff";
}

function introduction3_6out(num) {
    document.getElementById("introduction3_6_contain" + num).style.color = "#b5b5b6";
}