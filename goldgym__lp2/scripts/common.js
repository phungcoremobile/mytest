
	// function sliderSetting(){
	// var width = $(window).width();
	// if(width <= 750){
	// 	$('#itemlist_block ul').not('.slick-initialized').slick({
	// 　　autoplay: true,
	// 	variableWidth: true,
	// 	slidesToShow: 1,
	// 	autoplaySpeed: 1000,
	// 	arrows: false,
	// 	dots: false
	// 　});
	// }else{
	// 	$('#itemlist_block ul.slick-initialized').slick('unslick');

	// 	// cuppon copy
		
	// }
	// }
	
	// // 初期表示の実行
	// sliderSetting();
	
	// // リサイズの実行
	// $(window).resize( function() {
	// sliderSetting();
	// });

function myFunction() {
	var copyText = document.getElementById("myInput");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert(copyText.value + " クーポンコードをコピーしました");
	}

$(function(){
	$('.Pick__items__Slider').slick({
			// autoplay: true,
			variableWidth: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplaySpeed: 5000,
			arrows: true,
			dots: false,
			prevArrow: '<img src="./images/common/pre_arrow.png" class="slide-arrow prev-arrow">',
			nextArrow: '<img src="./images/common/next_arrow.png" class="slide-arrow next-arrow">',
			responsive: [{
				breakpoint: 750,
				settings: {
					slidesToScroll: 3,
					centerPadding: '60px', 
				}
			  }
			]
	});
	$(window).scroll(function (){
		$('.fadein,.fadein2').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 200){
						$(this).addClass('active');
				}
		});
	});
	$("dl.contmenu dt.active").click(function(){
		$(this).next('dd').slideToggle();
		$(this).toggleClass("active");
	});

});


