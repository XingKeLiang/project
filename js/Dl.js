// JavaScript Document
$(function(){
	$(".username,.passwor").focus(function(){
		  $(this).css("background-color","#FDF6C8");
		  $(this).siblings("p").show();
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).css("background-color","#FDF6C8"); 
			$(this).siblings("p").show();
		 }
		 if ($(this).val() != '') {
			$(this).css("background-color","#FFF"); 
			$(this).siblings("p").hide();
		 }
	});	
});
function subform(obj){
	if($('.username').value === "" ){
		$("#email_p").show();
		return false;
	}else{
		$("#email_p").hide();	
	}
	
	if($('.password').value === "" ){
		$("#pass_p").show();
		return false;
	}else{
		$("#pass_p").hide();	
	}
	return true;
}