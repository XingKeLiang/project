$(function(){
	//选择收货地址 
	$('.merParty input').click(function(){
		if (this.checked == true){
			$(this).parents('.merParty').css('background','#F2E5D1').siblings().css('background','#fff');
		}
	})
	
	//填写发票信息
	$('.js_Tableth2 input').focus(function(){
		$(this).css('color','red')
	})
	$('.js_Tableth2 input').blur(function(){
		$(this).css('color','#000')
	})
	
	//修改地址/显示隐藏
	$('.clearfix .ssDizxiug').click(function(){
		$('.none_Bg,.XG_address').show();
	})
	//鼠标触碰
	$('.merPartyB_a').hover(function(){
		$(this).css('color','red')
	},function(){
		$(this).css('color','#000')
	})
	
	$('#Guan_Bi').click(function(){
		$('.none_Bg,.XG_address').hide();
	})
	
	//删除地址/
	$('.merPartyB .sctyB_a').click(function(){
		$(this).parents('.merParty').hide();
	})
})
