$(document).ready(function(){

   // add custom scroll
   // $('.scroller_js').each(element, new SimpleBar);

	// add custom select
	// jcf.replaceAll();
	// add custom select  END


    // accordeon
    $(".faq_list_js li:first").addClass("active");
    $(".drop_faq_js:not(:first)").hide();
 
    $(".faq_list_js li a").click(function(){
        $(this).parent().parent().find(".drop_faq_js").slideToggle("fast");
        $(this).parent().parent().toggleClass("active");
        return false;
     });
});
