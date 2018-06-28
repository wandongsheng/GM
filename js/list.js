$(function(){
	var claid = location.search.split("=")[1];
	var url = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=?";
	$.getJSON(url,{classID:claid},function(obj){
		console.log(obj);
		var str=""
		for(var i=0;i<obj.length;i++){
			console.log(obj[i])
			str+=`<li><div class="shoujitupian">
									<a href="../item.html?id=${obj[i].goodsID}">
										<img src="${obj[i].goodsListImg}" />
									</a>
								</div>
								<div class="shoujijiage">
								    <span>￥</span><a href="../item.html?id=${obj[i].goodsID}">${obj[i].price}</a>
								</div>								
								<div class="shoujimingcheng">									
									<a href="../item.html?id=${obj[i].goodsID}">${obj[i].goodsName}</a>
								</div>																
								</li>`
		}
		$("#liebiaoye ul").append(str)		
	})
})