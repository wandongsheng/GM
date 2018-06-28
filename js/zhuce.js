$(function(){	
	$("#btn").click(function(){
		var url = "http://datainfo.duapp.com/shopdata/userinfo.php";
		var arr = {"status":"register","userID":$("#userName").val(),"password":$("#passWord").val()};
		$.post(url,arr,function(data){
			console.log(data);
			
			if(data == 0){
			    alert("用户名重复，请重新输入");
		   }else if(data == 1){		    	
		    	window.location.href = "denglu.html";
		    }else{
		    	alert("密码错误");
		    }
	    })
		
	})
})