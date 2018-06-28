console.log($);
$(function(){
	//国美会员显示与隐藏
	$(".vip1").mouseover(function(){
		$("#gmhy").css("display","block");
	})
	$(".vip1").mouseout(function(){
		$("#gmhy").css("display","none");
	})
	 
	$(".dingdan li").eq(2).mouseover(function(){
//		console.log("sssss")
		$("#wodeguomei").css("display","block");
	})
	$(".dingdan li").eq(2).mouseout(function(){
		$("#wodeguomei").css("display","none");
	})
	//搜索框前下拉菜单显示与隐藏
	$(".check").mouseover(function(){
		$(".shangpin").css("display","block");
	})
	$(".check").mouseout(function(){
		$(".shangpin").css("display","none");
	})
	//购物车空了 显示与隐藏
	$("#cart").mouseover(function(){
		$("#cart p").css("display","block");		
	})
	$("#cart").mouseout(function(){
		$("#cart p").css("display","none");
	})
	//二级菜单显示与隐藏
	$("#banner-list li").mouseover(function () {
        $('.class2').show()
    });
    $("#banner-list li").mouseout(function () {
        $('.class2').hide()
    });
    
    
    
    
    
    
    
    
   /*********************楼梯***************************/ 
    $(function(){
        var $floorNav = $("#floorNav");
        var $navList = $("#floorNav").find("li");
        var $conList = $("#content").find("div");
        var flag = true;
        $(window).scroll(function(){
            if(flag){
                var scrollTop = $(this).scrollTop();
                if(scrollTop > 1048){
                    $floorNav.fadeIn();
                }else{
                    $floorNav.fadeOut();
                }
                $conList.each(function(){
                    if(scrollTop > $(this).offset().top - $(this).outerHeight()/2){
                        //console.log(scrollTop,$(this).offset().top)
                        var index = $(this).index();
                        $navList.eq(index).addClass("hover").siblings().removeClass("hover");
                    }
                })
            }
        })
        $navList.not(":last").click(function(){
            flag = false;
            var index = $(this).index();
            $(this).addClass("hover").siblings().removeClass("hover");
            $("body,html").stop().animate({"scrollTop":$conList.eq(index).offset().top},500,function(){
                flag = true;
            });
        })
        $navList.last().click(function(){
            //flag = false;
            $("body,html").stop().animate({"scrollTop":0},500,function(){
                //flag = true;
            });

        })

    })
    
})
					
/*********************************导航栏右侧轮播************************************/
$(function(){
	(function navlunbo(){
    	$("#nav-right ul").append($("#nav-right ul li").eq(0).clone());
             
            var timer=null;
            var count=0;//0-4 
            var k=0;//0-4 记录原点的位置
             
            timer=setInterval(autoPlay,3000);
            function autoPlay(){
                count++;
                if(count==4){
                    $("#nav-right ul").css("top",0)
                    count=0;
                }
                $("#nav-right ul").stop().animate({"top":-count*40+"px"},800)
                k++;
                if(k==4){
                     
                    k=0;
                }
                
            }
            
            $("#nav-right").mouseenter(function(){
                clearInterval(timer);
            });
            $("#nav-right").mouseleave(function(){
                timer = setInterval(autoPlay,3000)
            }) 
    })()
})
    
$(function(){
	/********************商品轮播*************************/
    (function ltp(){
    	$("#shangpinlunbo ul").append($("#shangpinlunbo ul li").eq(0).clone());
    	var timer = null;
    	var count = 0;
    	var k = 0;
    	
    	timer = setInterval(autoplay,3000);
    	function autoplay(){
    		count++;
    		if(count ==3){
    			$("#shangpinlunbo ul").css("left",0)
    			count = 0;
    		}
    		$("#shangpinlunbo ul").stop().animate({"left":-count*950+"px"},1000)                              
    	}
    	$("#shangpinlunbo").mouseenter(function(){
            clearInterval(timer);
        });
        $("#shangpinlunbo").mouseleave(function(){
            timer = setInterval(autoplay,3000)
        })
        $(".syz").click(function(){
                count--;
                if(count==-1){
                    count=1;
                    $("#shangpinlunbo ul").css("left",-950+"px")
                }
                $("#shangpinlunbo ul").stop().animate({"left":-count*950+"px"})
                k=count;
            })
            //控制右边箭头
            $(".xyz").click(function(){
                count++;
                if(count==2){
                    count=0;
                    $("#shangpinlunbo ul").css("left",0)
                }
                $("#shangpinlunbo ul").stop().animate({"left":-count*950+"px"})
                k++;
                if(k==2){
                    k=0;
                     
                }
            });
    })()
})
