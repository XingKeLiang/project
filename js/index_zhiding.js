$(function(){
	//置顶按钮的显示与隐藏
	$(function () { 
		$(window).scroll(function () { 
			if ($(window).scrollTop() >= 400) {
				$('.backgTop').fadeIn();
			} else { 
				$('.backgTop').fadeOut();
			} 
		});
	});
	
	
	//置顶按钮功能
	$('.backgTop').click(function () {
    	$('html,body').animate({ scrollTop: 0 }, 500);
	});
	
})
