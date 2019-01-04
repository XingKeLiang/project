//鼠标加载完成之后在执行
$(function(){
	//输入框点击效果
		//给输入框添加事件
		$('.inn_right_fro_in1').focus(function(){
			//添加判断查看输入框内的值
			if($(this).val()==this.defaultValue){
				$(this).val('').css('color','#000');
			}
		}).blur(function(){
			//添加判断查看输入框内的值
			if($(this).val()==''){
				$(this).val(this.defaultValue).css('color','#999');
			}
		})
		
		
		
	
	//导航栏鼠标进入显示隐藏效果
		//给导航栏添加事件
		$('.logo_dh_left').hover(function(){
			$('.left_ul').addClass('dis_blo')
		},function(){
			$('.left_ul').removeClass('dis_blo')
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
