$(function(){
	//点击选择让背景变颜色
	$('.ShoppingList .shop_tu .duo_xu').click(function(){
//		alert(1)
		//得到小计的值
	var zhi = $(this).parent('td').nextAll('td').eq(2).children('span').html();
		//得到选取总金额的值
	var zhonghe = $('.Empty_car_ri .yxzh span').html();
		//获取已选商品的条数
		//获取选中个数
	var sum = 0;
	$('.duo_xu').each(function(){
		if (this.checked == true) {
			sum ++;
		}
	})		
	$('.zongji .yixuanjian span').html(sum);
	
	
		if (this.checked ==true) {
			//已选商品额度功能
			$('.Empty_car_ri .yxzh .scsc').text(parseFloat(zhonghe)+parseFloat(zhi))
			//点击改变背景颜色
			$(this).parents('tr').css('background','#F7E5C6');
		}else{
			var sss = $('.Empty_car_ri .yxzh .scsc').text(parseFloat(zhonghe)-parseFloat(zhi))
			$(this).parents('tr').css('background','#Fff');
		}
	})
	//点击全选
	$('.concent_div1 .concent_redeo .concent_redeo_sinp,.zongji .Empty_car_lf_check').click(function(){
		$('.ShoppingList .shop_tu .duo_xu').attr('checked',this.checked);
		if(this.checked ==true){
			$('.ShoppingList .shop_tu .duo_xu').parents('tr').css('background','#F7E5C6');
		}else{
			$('.ShoppingList .shop_tu .duo_xu').parents('tr').css('background','#fff');
		}
	})
	
	
	//删除
	$('.ShoppingList tr .del').click(function(){
		$(this).parents('tr').hide();
	})
	
	//删除选中的
	$('.check1').click(function(){
		$('.duo_xu').each(function(){
			if (this.checked==true) {
				$(this).parents('tr').remove();
			}
		})
	})
	
	//数量加减
	//加号逻辑
    $('.jian').click(function(){
        var num = $(this).siblings('.shuru').val();
        num++;
        $(this).siblings('.shuru').val(num);
        if(num>1){ //prop() 方法设置或返回被选元素的属性和值
            $(this).siblings('.jia').prop('disabled',false);//判断当输入框内数值大于1，使“-”减号处于解封可用状态。
            $(this).siblings('.jia').css("cursor","pointer");
            $(this).siblings('.jia').addClass('col');
        }
        var prices = $(this).parents('td').siblings('.jifen').html();
        var xiaoji = prices * num;
//      console.log(xiaoji);
        $(this).parents('td').siblings('.xiaoji').children('span').html(xiaoji);
    })
	//减号逻辑
    $('.jia').click(function(){
        var num =$(this).siblings('.shuru').val();//获取数量框里的数值
        if(num>1){
            num--;//单击“-”减号时，数量递减
            $(this).siblings('.shuru').val(num);//把数量变化后的新值放入数量框中
        }
        if(num<2){
            $(this).prop('disabled',true);//当输入框内数值为1时，使“-”减号处于不可用状态。
            $(this).removeClass('col');
        }
        var prices = $(this).parents('td').siblings('.jifen').html();//获取单价
        var xiaoji = prices * num;//用单价乘以数量计算得到单个小计的值
   		$(this).parents('td').siblings('.xiaoji').children('span').html(xiaoji);//把得到的小计值放入数量框中显示
    })
	
})
