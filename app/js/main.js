$(document).ready(function(){

   $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 250 }, 1000);
    });





	// add custom select
	jcf.replaceAll();
	// add custom select  END

	//read more
	 // $(".more_block_js").hide();
	$(".read_more_js a").click(function(){

        $(this).parent().parent().parent().find(".more_block_js").slideToggle("fast");
        $(this).parent().toggleClass("opened_more");
        var $this = $(this);
         if ($this.parent().hasClass("opened_more")) {
                $this.html("Read Less");
            } else {
                $this.html("Read more");
            }
        return false;
    });

	// bar menu
	$(".bar_menu_js a").click(function(){
        $(this).parent().addClass("active");
        $(this).parent().siblings("li").removeClass("active");
        return false;
    });
	$('.carousel_quote').owlCarousel({
		autoHeight: true,
		items:1,
		responsiveClass:true,
	    	responsive:{
	    	0:{
	            dots: true,
				nav:false,
	        },
	        600:{
	            items:1,
	            dots: false,
				nav:true,
	        }
	    }
	});
	$('.owl_carousel_images').owlCarousel({
		autoHeight: true,
		items:1,
		nav:false,
		dots: true,
		responsiveClass:true
	});
	$('.owl_carousel_labels').owlCarousel({
		responsiveClass:true,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			loop:true,
			dots: false,
			nav:false,
	    	responsive:{
	    	0:{
	    		items:2,
				margin:10
	        },
	        500:{
	    		items:3,
				margin:10
	        },
	        800:{
	            items:4
	        },
	        1000:{
	            items:5
	        },
	        1200:{
	            items:7
	        }
	    }
	})
	$(".header_js .navbar-toggler").click(function(){
        $(".header_js").toggleClass("header_opened");
    });
    // accordeon
    $(".faq_list_js li:first").addClass("active");
    $(".drop_faq_js:not(:first)").hide();
 
    $(".faq_list_js li a").click(function(){
        $(this).parent().parent().find(".drop_faq_js").slideToggle("fast");
        $(this).parent().parent().toggleClass("active");
        return false;
     });
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.wrapper').addClass('fixed_header');
    }
    else {
        $('.wrapper').removeClass('fixed_header');
    }
});
$(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
        $('.bar_navigation_js').addClass('fixed_bar');
    }
    else {
        $('.bar_navigation_js').removeClass('fixed_bar');
    }
});
// for ie home full-article height
var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);

if(ie) {
  $(".article_fix_ie_js").each(function () {
    var $container = $(this),hld = $container.wrap("<div class='ie_article_holder'></div>");
  });
}