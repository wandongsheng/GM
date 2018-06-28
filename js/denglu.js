$(function(){	
	$("#btn").click(function(){
		var url = "http://datainfo.duapp.com/shopdata/userinfo.php";
		var arr = {status:"login",userID:$("#userName").val(),password:$("#passWord").val()};
		$.get(url,arr,function(data){			
			data = JSON.parse(data);
			console.log(data);
		    if(data == 0){
		    	alert("用户名不存在");
		    }else if(data == 2){
		    	alert("用户名或密码错误");
		    }else{
		    	$.cookie("username",data.userID,{expires:30,path:"/"});
				location.href = "index.html";
		    }

	    })
		
	})
})