$(function(){
	$('.div1_ul li').click(function(){
		$(this).addClass('teshli').siblings('li').removeClass('teshli');
		$index = $(this).index();
		$('.conter_div2 .conter_div2_kaui').eq($index).show().siblings('div').hide();
	})
})
