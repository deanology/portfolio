$(function(){
	$(window).scroll(function(){

		if($(this).scrollTop() < 100){
			//hide the navigation bar
			$("nav").removeClass('navbar-top');
		}else{
			//show navigation bar
			$("nav").addClass('navbar-top');
		}
	});
});

$(function(){
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
});


$(function(){
	$(".filter-button").click(function(){ //click on the function
		var value = $(this).attr('data-filter');

		if(value == "all"){
			$('.filter').show('1000');
		}else{
			$(".filter").not('.'+ value).hide('3000');
			$(".filter").filter('.'+value).show('3000');

		}
	});

	if($(".filter-button").removeClass("active")){
		$(this).removeClass("active");
	}
	$(this).addClass("active");
});