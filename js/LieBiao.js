$(function(){
	//为conter_XuanXi里的li 添加hover
	$('.conter_XuanXi ul li').not('.conter_XuanXi ul li:first').hover(function(){
		$(this).addClass('xianshi').children('a').css('color','#fff').end().siblings().not('.conter_XuanXi ul li:nth-child(2)').removeClass('xianshi').children('a').css('color','#666');
	},function(){
		$(this).removeClass('xianshi').children('a').css('color','#666');
	})
	
	//为最后一个选项设置效果
	$('#wei_le').hover(function(){
		$('.wei_le_xian').css('display','block');
	},function(){
		$('.wei_le_xian').css('display','none');
	})
	
	//最后一个选项的a标签的效果
	$('#wei_le .wei_le_xian a').hover(function(){
		$(this).addClass('xianshi').css('color','#fff');
	},function(){
		$(this).removeClass('xianshi').css('color','#666');
	})
})