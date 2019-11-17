////定时头部轮播
		var timer = null;
		var i=5;
		
		
		function mover()//鼠标进来
		{
			clearInterval(timer);
		}
		function mout()//鼠标出去，开始轮播
		{
			timer = setInterval
			(
			function () 
			{
				changeBanner(i%3+1);
				i+=1;
			},
			1000
			);
		}
		
		
		//头部切换
		function changeBanner(n)
		{
			if(n==1)
			{
				document.getElementById("fist").style.display="block";
				document.getElementById("skend").style.display="none";
				document.getElementById("srd").style.display="none";
				
				document.getElementById("selsctor1").style.backgroundColor="#2C97E8";
				document.getElementById("selsctor2").style.backgroundColor="aliceblue";
				document.getElementById("selsctor3").style.backgroundColor="aliceblue";
			}
			if(n==2)
			{
				document.getElementById("fist").style.display="none";
				document.getElementById("skend").style.display="block";
				document.getElementById("srd").style.display="none";
				
				document.getElementById("selsctor1").style.backgroundColor="aliceblue";
				document.getElementById("selsctor2").style.backgroundColor="#2C97E8";
				document.getElementById("selsctor3").style.backgroundColor="aliceblue";
			}
			if(n==3)
			{
				document.getElementById("fist").style.display="none";
				document.getElementById("skend").style.display="none";
				document.getElementById("srd").style.display="block";
				
				document.getElementById("selsctor1").style.backgroundColor="aliceblue";
				document.getElementById("selsctor2").style.backgroundColor="aliceblue";
				document.getElementById("selsctor3").style.backgroundColor="#2C97E8";
			}
		}
		//代码按钮切换
		function displayCode(num)
		{
			var i=1;
			for(i=1; i<=8;i++)
			{
				if(num==i)
				{
					document.getElementById('c'+i).style.display="block";
				}
				else
				{
					document.getElementById('c'+i).style.display="none";
				}
				
			}
		}
		//鼠标hover后边框改变
		function borderHaveM(str)
		{
			document.getElementById(str).style.border="2px solid #2c97e8";
		}
		function borderHNoM(str)
		{
			document.getElementById(str).style.border="1px solid #f1eeee";
		}
		
		
		
		
		
		
		//d---description
		//i----image
		//user case切换效果
		function mon(num)//mouice on logo
		{
			if(num==1)
			{
				document.getElementById("usercased1").style.display="block";
				document.getElementById("usercasei1").style.filter="none";
				
				document.getElementById("usercased2").style.display="none";
				document.getElementById("usercasei2").style.filter="grayscale(100%)";
				
				document.getElementById("usercased3").style.display="none";
				document.getElementById("usercasei3").style.filter="grayscale(100%)";
			}
			
			if(num==2)
			{
				document.getElementById("usercased2").style.display="block";
				document.getElementById("usercasei2").style.filter="none";
				
				document.getElementById("usercased1").style.display="none";
				document.getElementById("usercasei1").style.filter="grayscale(100%)";
				
				document.getElementById("usercased3").style.display="none";
				document.getElementById("usercasei3").style.filter="grayscale(100%)";
			}
			
			if(num==3)
			{
				document.getElementById("usercased3").style.display="block";
				document.getElementById("usercasei3").style.filter="none";
				
				document.getElementById("usercased2").style.display="none";
				document.getElementById("usercasei2").style.filter="grayscale(100%)";
				
				document.getElementById("usercased1").style.display="none";
				document.getElementById("usercasei1").style.filter="grayscale(100%)";
			}
		}
function columnStyleChange(num)
{
	var i=1;
	for(i=1;i<=5;i++)
	{
		if(num==i)
		{
			document.getElementById('col'+i).style.borderWidth="3px";
			document.getElementById('col'+i).style.color="#2c97e8";
		}
		else
		{
			document.getElementById('col'+i).style.borderWidth="1px";
			document.getElementById('col'+i).style.color="#373d41";
		}
	}
}