$(document).ready(function(){
	"use strict";
	var activeImgURL,activeImg;
	var imageSlider = function(t){
		setTimeout(function(){
			if($('#active-slide').hasClass('animate')){
			$('#active-slide').animate(
			{
				"opacity":"0",
				"visibility":"hidden",
			},
		    {
				duration:t,
				complete: function(){
					activeImg = $('.active-slide');
					activeImg.removeClass('active-slide');
					if(activeImg.next().length !== 0){
						activeImg.next().addClass('active-slide');
					}else{
						$('.slide-item').eq(0).addClass('active-slide');
					}
					activeImgURL = $('.active-slide > img').attr('src');
					$('#active-slide > img').attr('src',activeImgURL);
					$(this).animate(
					{
						"opacity":"1",
						"visibility":"visibile"
					});
					imageSlider(t);
				}
			});
		}
		},10000);	
	};
	imageSlider(500);
	$('#active-slide').hover(function(){
		$(this).stop( true, false );
		$(this).animate(
					{
						"opacity":"1",
						"visibility":"visibile"
					});
		$(this).removeClass('animate');
	},function(){
		$(this).addClass('animate');
		imageSlider(1000);
	});
	/**/
});