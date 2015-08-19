// Wait until the DOM has loaded before querying the document
$(document).ready(function () {
if($(window).width() >660){
 $(".ambsdr-footer ul").each(function() {
							
                               var listHeight, maxHeight=-1;
                                      $(this).find("li.ambsdr-footer-li").each(function() {
                                              var listHeight = $(this).height();
                                              maxHeight =listHeight > maxHeight ?listHeight : maxHeight;
                                      });
                                      
                                              $(this).find("li.ambsdr-footer-li").css({"height":maxHeight});
                                    
                               });
}
	$("#joinin").on("mouseenter", function () {
		$("#nav-joinin-layer").slideDown("fast");
	});
	$("#joinin,#nav-joinin-layer").on("mouseleave", function () {
		$("#nav-joinin-layer").slideUp("fast");
	});
	$("#nav-joinin-layer").on("mouseenter", function () {
		$(this).stop();
		$(this).show();
	});
	
	$("#nav-menu").on("click tap", function(){
		$(this).toggleClass("active");
		$("#nav-menu-layer").slideToggle("fast");
	});
	$("div#nav-menu-container div a").on("mousedown touchstart", function () {
		$(this).css("color","#0070B7")
	});
	$("div#nav-menu-container div a").on("mouseup touchend", function () {
		$(this).css("color","#002663")
	});

	$(window).bind("orientationchange", function () {	
		$("#nav-container").css({
			"position":"fixed",
			"top":"0px !important",
			"left":"0px !important"
		});	
	});
	
	/*shareamex js loading start*/
	var js = document.createElement("script");
	js.async = true;
	js.type = "text/javascript";
	js.src = "https://www.aexp-static.com/api/axpi/shareamex/2.0-latest/js/shareamex.js";
	$("head").append(js);
	 /*shareamex js loading end*/
	 
	 /*activeMenu start*/
	$(document).find("li.activeMenu").removeClass("activeMenu");
	var pathname = window.location.pathname;
	var servletPath;
	if (pathname.lastIndexOf("/") == (pathname.length - "/".length)) {
		pathname = pathname.substring(0, (pathname.length - "/".length));
	}
	servletPath = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.length);
	$("#nav-container li a").each(function () {
		var hrefVal = $(this).attr("href");	
		hrefVal = hrefVal.substring(0, hrefVal.indexOf("?"));
		if (hrefVal.lastIndexOf("/") == (hrefVal.length - "/".length)) {
			hrefVal = hrefVal.substring(0, (hrefVal.length - "/".length));
		}
		hrefVal = hrefVal.substring(hrefVal.lastIndexOf("/") + 1, hrefVal.length);
		if(hrefVal!="" && (servletPath.indexOf(hrefVal) !=-1)){
			if( servletPath.indexOf("emailsubmit") >= 0 || $(this).parent("li").hasClass("joininSubMenu") )					
				$("#joinin").addClass("activeMenu");			
			else 
				$(this).parent("li").addClass("activeMenu");			
			return false;
		}		
	});
	/*activeMenu end*/		
	
	/*omniture tracking for facebook and twitter start*/
	$("a#shareamex-anchor-Facebook").click(function () {
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Click_FacebookShare') : null;
	});
	$("a#shareamex-anchor-Twitter").click(function () {
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','Click_TwitterShare') : null;
	});	
	/*omniture tracking for facebook and twitter end*/		
	
});