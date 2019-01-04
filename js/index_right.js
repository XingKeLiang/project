$(function(){
	//给li添加效果
//	$('.shangpbUl li').hover(function(){
//		$(this).children('.shangpbUl_li_div').hide().siblings('.shangpbUl_li_dl').show().end().siblings('li').children('.shangpbUl_li_dl').hide();
//	},function(){
//		$(this).children('.shangpbUl_li_div').show().siblings('.shangpbUl_li_dl').hide().end().siblings('li').children('.shangpbUl_li_dl').show();
//	})
	$('.shangpbUl li').hover(function(){
		$(this).children('.shangpbUl_li_div').hide().siblings('.shangpbUl_li_dl').show();
	},function(){
		$(this).children('.shangpbUl_li_div').show().siblings('.shangpbUl_li_dl').hide();
	})
})