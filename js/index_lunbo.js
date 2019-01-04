$(function(){
	var $index =0;
	//点击轮播图小圆点效果
	$('.lunbo_con a').click(function(){
		clearInterval(inter);
		var $index = $(this).index();
		$(this).css('background','red').siblings('a').css('background','#666')
		$('.slide li').eq($index).fadeIn(1000).siblings('li').hide();
	})
	
	//图片自动轮播
	function zidong(){
		 inter = setInterval(function(){
			$index++;
			if ($index>=2) {
				$index=0	
			}
			$('.slide li').eq($index).fadeIn(1000).siblings('li').hide();
	//		console.log($index);
			$('.lunbo_con a').eq($index).css('background','red').siblings('a').css('background','#666')
		},2000)
	}
	
	zidong();
	
	
	//小圆点hove时清除定时
	$('.lunbo_con a').hover(function(){
		clearInterval(inter);
	},function(){
		zidong();
	})
	
	
	
	
	
	
	
	
	
	
})