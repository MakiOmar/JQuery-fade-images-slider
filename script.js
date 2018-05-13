$(document).ready(function(){
	"use strict";
	var activeImgURL,activeImg;
	var imageSlider = function(t){
		setTimeout(function(){
			$('#active-slide').animate(
			{
				"opacity":"0",
				"visibility":"hidden"
			},
		    {
				duration:t,
				complete: function(){
					activeImg = $('.active-slide');
					if(activeImg.next().length !== 0){
						activeImg.removeClass('active-slide');
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
		},3000);	
	};
	imageSlider(5000);

	$('#active-slide').hover(function(){
		$(this).stop( false, false );
		clearTimeout(imageSlider);
		$(this).animate(
					{
						"opacity":"1",
						"visibility":"visibile"
					});
	},function(){
		imageSlider(5000);
	});
});