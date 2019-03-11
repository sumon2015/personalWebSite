
$('document').ready(function(){
    // wow js and animate css run function
    new WOW().init();
    
    $('.socialButton').click(function(){
        $('.socialLink').slideToggle({
			duration:500,
			easing:'easeOutElastic',
			complete:'callback'
		});
    });
    
    /*
    $('.menu ul li').mouseover(function(){
        $(this).find('.caretLeft').css({
            display:'block',
        });
    });
    
    $('.menu ul li').mouseout(function(){
        $(this).find('.caretLeft').css({
            display:'none',
        });
    });
    */
    
    // $('.menu ul li .selected').find('.caretLeft').css({
        // display:'block',
    // });
    
    //  slider controls..

$('.bxslider').bxSlider({
				auto: true,
				// autoControls:false,
                // controls:true,
				pager:false,
				// captions: true,
				// mode:'fade',
				// useCSS: true,
				// easing: 'easeOutElastic',
				// pause: 3000,
				// speed: 1000
				});
    
    // $('bx-prev').removeClass('disabled');
    
});

    