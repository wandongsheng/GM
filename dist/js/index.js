"use strict";console.log($),$(function(){$(".vip1").mouseover(function(){$("#gmhy").css("display","block")}),$(".vip1").mouseout(function(){$("#gmhy").css("display","none")}),$(".dingdan li").eq(2).mouseover(function(){$("#wodeguomei").css("display","block")}),$(".dingdan li").eq(2).mouseout(function(){$("#wodeguomei").css("display","none")}),$(".check").mouseover(function(){$(".shangpin").css("display","block")}),$(".check").mouseout(function(){$(".shangpin").css("display","none")}),$("#cart").mouseover(function(){$("#cart p").css("display","block")}),$("#cart").mouseout(function(){$("#cart p").css("display","none")}),$("#banner-list li").mouseover(function(){$(".class2").show()}),$("#banner-list li").mouseout(function(){$(".class2").hide()}),$(function(){var n=$("#floorNav"),s=$("#floorNav").find("li"),i=$("#content").find("div"),t=!0;$(window).scroll(function(){if(t){var o=$(this).scrollTop();1048<o?n.fadeIn():n.fadeOut(),i.each(function(){if(o>$(this).offset().top-$(this).outerHeight()/2){var n=$(this).index();s.eq(n).addClass("hover").siblings().removeClass("hover")}})}}),s.not(":last").click(function(){t=!1;var n=$(this).index();$(this).addClass("hover").siblings().removeClass("hover"),$("body,html").stop().animate({scrollTop:i.eq(n).offset().top},500,function(){t=!0})}),s.last().click(function(){$("body,html").stop().animate({scrollTop:0},500,function(){})})})}),$(function(){!function(){$("#nav-right ul").append($("#nav-right ul li").eq(0).clone());var n=null,o=0,s=0;function i(){4==++o&&($("#nav-right ul").css("top",0),o=0),$("#nav-right ul").stop().animate({top:40*-o+"px"},800),4==++s&&(s=0)}n=setInterval(i,3e3),$("#nav-right").mouseenter(function(){clearInterval(n)}),$("#nav-right").mouseleave(function(){n=setInterval(i,3e3)})}()}),$(function(){!function(){$("#shangpinlunbo ul").append($("#shangpinlunbo ul li").eq(0).clone());var n=null,o=0,s=0;function i(){3==++o&&($("#shangpinlunbo ul").css("left",0),o=0),$("#shangpinlunbo ul").stop().animate({left:950*-o+"px"},1e3)}n=setInterval(i,3e3),$("#shangpinlunbo").mouseenter(function(){clearInterval(n)}),$("#shangpinlunbo").mouseleave(function(){n=setInterval(i,3e3)}),$(".syz").click(function(){-1==--o&&(o=1,$("#shangpinlunbo ul").css("left","-950px")),$("#shangpinlunbo ul").stop().animate({left:950*-o+"px"}),s=o}),$(".xyz").click(function(){2==++o&&(o=0,$("#shangpinlunbo ul").css("left",0)),$("#shangpinlunbo ul").stop().animate({left:950*-o+"px"}),2==++s&&(s=0)})}()});