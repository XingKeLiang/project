 $(function(){
 	 //右侧浮框
	$(document).scroll(function() {
	        $(".inform").animate({"top":250+document.documentElement.scrollTop},20);
	});
	
	
//点击显示内容
	$(".inform").click(function(){
		$(".none_inform,.none_Bg").css('display','block');
	})
 //点击隐藏内容
 	$(".none_inform .close").click(function(){
		$(".none_inform,.none_Bg").css('display','none');
	})
 	
 	
 	
 	
 	
 })
