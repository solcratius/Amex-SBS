
'use strict';

var SBS = SBS || {};

(function() {

	SBS.namespace = function( nsString ) {

	    var parts 	= nsString.split( '.' ),
	        parent 	= SBS,
	        i;

	    if ( parts[0] === 'SBS' ) {
	    	parts = parts.slice(1);
	    }

	    for ( i = 0; i < parts.length; i += 1 ) {
	    	if ( typeof parent[ parts[i] ] === 'undefined' ) {
	        	parent[ parts[i] ] = {};
	      	}
	      	parent = parent[ parts[i] ];
	    }

	    return parent;

	};
}());


//-----------------------------------------------------------------------------------------------

SBS.namespace( 'sbo' );

SBS.sbo = (function() {
	var gFontSize,
		navH,
		heroImgH,
		winH,
		isMobileOnly;
	
	var scrollY,
		$heroImg = $("div.sbs-about-header"),
		$navpanelH;

  	var init = function init() {
  		gFontSize = 12;
  		gFontSizeSet();
  		mobileResizeSet();
  		
  		scrollY = 0;
  		navH = $('#nav-container').height();
  		heroImgH = $heroImg.height();
  		winH = $(window).height();
  		handlers();
  		
  		if(isMobile.any())
  		{
  			if ($(window).width()+15 <= 660)
  			{
  				$heroImg.css("background-size","auto 100%");
  			}
  			else
  			{  				
	  			$('html').css({
	  				"height": "100%",
	  				"width": "100%",
	  				"overflow": "hidden"
	  			});
	  			$('body').css({
	  				"height": "100%",
	  				"width": "100%",
	  				"overflow-y": "scroll"
	  			});
  			
	  			$heroImg.css("background-size","auto 100%");
  			}
  		}
  		else
  		{
  			$(window).scroll(function() {  				
  				scrollY = $(window).scrollTop();
  				
  				if ($(window).scrollTop() < heroImgH)
  	  			{
  	  				$heroImg.css({
  	  	  				"background-position": "center "+(($(window).scrollTop()*.5))+"px"
  	  	  			});
  	  			}
  	  		});
  		}
  		
  		$(window).resize(function(){
  			heroImgH = $heroImg.height();
  			gFontSizeSet();
  			mobileResizeSet();
        });
	};
	
	var gFontSizeSet = function gFontSizeSet () {
		$("body").css('font-size', '12px');
		
		if (($("body").hasClass("res_Large res_850") || $("body").hasClass("res_Large res_800") || $("body").hasClass("res_Medium")))
		{
			gFontSize = Math.abs((12*$(window).width())/900);
			//console.log(gFontSize + ", " + $(window).width());
			if (gFontSize < 11) gFontSize = 11;
			$("body").css('font-size', gFontSize+'px');
		}
		
		if ($(window).width() <= 660)
		{
			gFontSize = Math.abs((11*$(window).width())/660);
			//console.log(gFontSize + ", " + $(window).width());
			if (gFontSize < 7) gFontSize = 7;
			$("body").css('font-size', gFontSize+'px');
		}
	};
	
	var mobileResizeSet = function mobileHeroSet() {
		if ($(window).width()+15 <= 660)
		{
//			var mobileHeroH = ($(window).width()*786)/660;
			var mobileHeroH = 400;//($(window).width()*856)/660;
			$(".res_Small div.sbs-about-header").css({
				'height': mobileHeroH+'px',
				'margin-top': '44px'
			});
			
			isMobileOnly = true;
		}
		else
		{
			$("div.sbs-about-header").css('height','400px');
			$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
			
			$(".itemContainer .itemRow").removeAttr('style');
			
			isMobileOnly = false;
		}
	}
	
	var rNumGenerator = function (num) {
		return Math.floor(Math.random()*num);
    };
    
    var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    iOSm: function() {
	        return navigator.userAgent.match(/iPhone|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
    
    function handlers() {
    	$("#subExpand").on("click", function(e){
    		e.stopPropagation();
			e.preventDefault();
			if ($(this).hasClass('selected'))
			{
				$(this).removeClass('selected');
				$("#navpanel").animate({'height': '50px'}, 300, 'easeInOutCubic', function(){
					$("#navpanel .expanded").css({"display": "none"});
				});
			}
			else
			{
				$(this).addClass('selected');
				$("#navpanel .expanded").css({"display": "block"});
				$("#navpanel").animate({'height': $navpanelH+'px'}, 300, 'easeInOutCubic');
			}
    	});
    	
    	$("div.about-container .section .sectionBtn").hover(function(e){
			e.preventDefault();
			$(this).parent().parent().find(".shader").css({"display": "block", "opacity": 0}).stop().animate({'opacity': 1}, 300, 'easeOutCubic');
    	}, function(e){
			e.preventDefault();
			$(this).parent().parent().find(".shader").animate({'opacity': 0}, 500, 'easeInOutQuad', function(){
				$(this).css({"display": "none"});
			});
    	});
    	
    	$("div.about-container .section1 .topBtn").on("click", function(e){
    		e.stopPropagation();
			e.preventDefault();
			$("div.about-container .section1 .shader").animate({'opacity': 0}, 500, 'easeInOutQuad', function(){
				$(this).css({"display": "none"});
			});
			$("div.about-container .section1 .videoPlayer").css({"display": "block", "opacity": 0}).animate({'opacity': 1}, 300, 'easeInOutCubic');
			$("div.about-container .section1 .videoPlayer .playerContainer").html('<iframe src="https://www.youtube.com/embed/4hAyaRr9zZY?autoplay=1" frameborder="0" allowfullscreen=""> </iframe>');
    	});
    	
    	$("div.about-container .section1 .videoPlayer .closeBtn").on("click", function(e){
    		e.stopPropagation();
			e.preventDefault();
			$("div.about-container .section1 .videoPlayer").animate({'opacity': 0}, 300, 'easeInOutCubic', function(){
				$("div.about-container .section1 .videoPlayer .playerContainer").html('');
				$("div.about-container .section1 .videoPlayer").css({"display": "none"});
			});
    	});
    };

	return {
		init: init
	};

})();


//-----------------------------------------------------------------------------------------------

$( document ).ready(function() {
	SBS.sbo.init();
});
