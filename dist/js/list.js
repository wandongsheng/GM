"use strict";$(function(){var t=location.search.split("=")[1];$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{classID:t},function(t){console.log(t);for(var i="",o=0;o<t.length;o++)console.log(t[o]),i+='<li><div class="shoujitupian">\n\t\t\t\t\t\t\t\t\t<a href="item.html?id='+t[o].goodsID+'">\n\t\t\t\t\t\t\t\t\t\t<img src="'+t[o].goodsListImg+'" />\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="shoujijiage">\n\t\t\t\t\t\t\t\t    <span>￥</span><a href="item.html?id='+t[o].goodsID+'">'+t[o].price+'</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class="shoujimingcheng">\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href="item.html?id='+t[o].goodsID+'">'+t[o].goodsName+"</a>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</li>";$("#liebiaoye ul").append(i)})});