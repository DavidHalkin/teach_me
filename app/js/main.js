$(document).ready(function(){

   // add custom scroll
   // $('.scroller_js').each(element, new SimpleBar);

	// add custom select
	jcf.replaceAll();
	// add custom select  END



// drop
    $(".case_js").hover(function() {
        // $(this).parent().find(".drop_case").fadeIn("fast");
        $(this).parent().addClass("opened");
    }, function() {
        // $(this).parent().find(".drop_case").fadeOut("fast");
         $(this).parent().removeClass("opened");
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

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
        $('#return_to_top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return_to_top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return_to_top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});


