$(function(){
//	头部导航
	$(".header1 ul li:last").css('background','none');
//	尾部最后一个边框
	$(".footer_ul li:last").css('borderRight','none');
//导航ul
	$("#header001").hover(function(){
		$("#header002").css("display","block");
	},function(){
		$("#header002").css("display","none");
	})
//TOP
	var $backToTopTxt = "", $backToTopEle = $('<div class="top"></div>').appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });
	
})