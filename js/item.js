$(function(){
	var gooid = location.search.split("=")[1];	
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,{goodsID:gooid},function(data){
		var imgsUrl = JSON.parse(data[0].imgsUrl);
		console.log(data);
		var str = `<div id="zoomBox">
						<div id="midArea">
							<img src="${data[0].goodsListImg}">
							<div id="zoom"></div>
						</div>
						<div id="bigArea">
							<img src="${data[0].goodsListImg}">
						</div>
						<div id="smallArea">
														
						</div>
		            </div>
					<div id="shangpinjianshu">
					    <p>${data[0].goodsName}</p>
					    <div class="jiage">
					        <span>国美价￥</span>
					        <b>${data[0].price}</b>
					    </div>
					    <div class="gouwuchelan">
					        <div class="num">					            
		                        <span class="btnjian">-</span>
		                        <span class="numbers">1</span>
		                        <span class="btnjia">+</span>
					        </div>
					        <input type= "button" id="btngou" value="添加购物车">
					    </div>
					</div>`
		$("#xiangqing").append(str);
		
		
		for(var i =0; i<imgsUrl.length; i++){
			var oImg = document.createElement("img");			
			oImg.src = imgsUrl[i];
			$("#smallArea")[0].append(oImg);
		}
		$("#smallArea img").hover(function(){
			var src = $(this)[0].src;
			$("#midArea img")[0].src = src;
			$("#bigArea img")[0].src = src;
		})
		
		
		
		
						
		$("#btngou").click(function(){
			var num = $(".numbers").html();
//			var adress= location.search.split("=")[1];
//			console.log(adress);
			$.get("http://datainfo.duapp.com/shopdata/updatecar.php",{userID:$.cookie("username"),goodsID:data[0].goodsID,number:num},function(data){				
				console.log(data);
				//data = JSON.parse(data);
				if(data==0){
					alert("添加失败");
				}
				if(data == 1){
					location.href = "cart.html";
				}
			})
		})
		
		
		    $(".btnjian").click(function(){
		    	var numb = $(this).next().text()
			    numb--;
				if(numb <= 1){
					numb = 1;
				}
				$(this).next().text(numb)
			})    
			$(".btnjia ").click(function(){
				var numb = $(this).prev().text()
			    numb++;
			    $(this).prev().text(numb)
			})
		
	})
	
	
	
})


















