$(function(){
	$.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?",{userID:$.cookie("username")},function(data){
		console.log(data);
		var str = "";
		$.each(data,function(index,item){
            var pice = item.price*item.number;			
			str+=`<li><ul class="wupin">
			    <li>
			        <input type="checkbox" name="" id="" value="" />
			        <img src="${item.goodsListImg}"/>
			    </li>
			    <li>
			        <span>${item.goodsName}</span>
			    </li>
			    <li>
			        <span>￥</span>
				    <b class="danjia">${item.price}</b>
				</li>
			    <li>
			        <span class="btnjian">-</span>
			        <span class="numbers">${item.number}</span>
			        <span class="btnjia">+</span>
			    </li>
			    <li>
			        <b>￥</b>
			        <b class="jijia">${pice}</b>
			    </li>
			    <li>
			        <a class="shanchu">删除</a>
			    </li>
			</ul></li>`									
		})	
		
		$(".wupinlan").append(str);
		
		/******点击加减按钮进行数量加减********/
			$(".btnjian").click(function(){
			    var numb = $(".numbers").html()
				numb--;
				if(numb <= 1){
					numb = 1;
				}
				$(".numbers").html(numb)
				//$(".jijia").html() = $(".numbers").html(numb)*$(".danjia").html();
			})    
			$(".btnjia ").click(function(){
				var numb = $(".numbers").html()
			    numb++;
				$(".numbers").html(numb)
		    })
		/************删除按钮**************/
		$(".shanchu").click(function(){		
		     console.log(data[0].goodsID)
		     var url="http://datainfo.duapp.com/shopdata/updatecar.php";
		    $.get(url,{userID:$.cookie("username"),goodsID:data[0].goodsID,number:0},function(data){				
		    		    		    
		    })
	       $( this).parent().parent().parent().remove();
	    })
		
	})
	/***************全选*************/
	
	$("#checkAll").click(function(){
		$(".wupin input").prop("checked",$(this).prop("checked"));
	})
	$(".wupin input").click(function(){
		if($(".wupin input:checked").length == $(".wupin input").length){
			$("#checkAll").prop("checked",true)
		}else{
			$("#checkAll").prop("checked",false)
		}
	})
	
	
})
