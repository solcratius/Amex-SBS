
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

SBS.namespace( 'ambassador' );

SBS.ambassador = (function() {
	var gFontSize,
		navH,
		heroImgH,
		winH,
		moduleOffsetS = [],
		moduleOffsetE = [],
		$newstickerW,
		$newstickerX,
		$newstickerHover,
		isMobileOnly;
	
	var scrollY,
		scrollDir,
		$heroImg = $("div.ambsdr-container div.header-section"),
		$heroImg3a = $("div.ambsdr-container div.passport-kit"),
		$newsticker = $("ul.newsticker");
	
  	var init = function init() {
  		gFontSize = 12;
  		gFontSizeSet();
  		mobileResizeSet();
  		$newstickerW = $newsticker.width();
  		$newstickerHover = false;
  		scrollY = 0;
  		navH = $('#nav-container').height();
  		heroImgH = $heroImg.height();
  		winH = $(window).height();
  		moduleOffsetInit();
  		handlers();
  		
  		if(isMobile.any())
  		{
  			if ($(window).width()+15 <= 660)
  			{
  				$heroImg.css("background-size","auto 100%");
  				$heroImg3a.css("background-size","auto 100%");
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
  			
	  			$heroImg.css("background-size","auto 702px");
  				$heroImg3a.css("background-size","auto 702px");
  			}
  		}
  		else
  		{
  			$(window).scroll(function() {
  				if ($(window).scrollTop() > scrollY) scrollDir = 'down';
  				else scrollDir = 'up';
  				
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
	
	var moduleOffsetInit = function moduleOffsetInit () {

	}
	
	var gFontSizeSet = function gFontSizeSet () {
		$("body").css('font-size', '12px');
		
		if (($("body").hasClass("res_Large res_850") || $("body").hasClass("res_Large res_800") || $("body").hasClass("res_Medium")))
		{
			gFontSize = Math.abs((12*$(window).width())/900);
			//console.log(gFontSize + ", " + $(window).width());
			if (gFontSize < 11) gFontSize = 11;
			$("body").css('font-size', gFontSize+'px');
		}
		
		if ($(window).width()+15 <= 660)
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
			var mobileHeroH = ($(window).width()*856)/660;
			//var $mobileHeroC = $(".res_Small div.sbs-about-header div.about-hdr-cnt");
			//$mobileHeroC.css('margin-top', (mobileHeroH - $mobileHeroC.height() - 15) + 'px');
			$(".res_Small div.sbs-about-header").css('height', mobileHeroH+'px');
			
			isMobileOnly = true;
		}
		else
		{
			$("div.sbs-about-header").css('height','530px');
			$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
			
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
    	$('div#kitpanel ul.kit-subnav li a').on("click",function(){
    		var cls=$(this).attr('class');
    		var prntClass = $("div#EventGuide").attr("class");
    		$(this).parents("div#EventGuide").removeClass(prntClass); 
    		$('div#kitpanel ul.kit-subnav li').removeClass("active");
    		$(".tabContent").removeClass("show");
    		$(this).parents("div#EventGuide").addClass(cls);
    		$(this).parent().addClass("active");
    		$('#'+cls+'-desc').addClass("show");	
    		if(cls=='passport-kit'){
    			$("div.ambsdr-container div.passport-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-passport.jpg", sizingMethod="scale")');
    		}
    		else if(cls=='familyday-kit'){
    			$("div.ambsdr-container div.familyday-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-familyday.jpg", sizingMethod="scale")');		
    		}
    		else if(cls=='funrun-kit'){
    			$("div.ambsdr-container div.funrun-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-fun-run.jpg", sizingMethod="scale")');	
    		}
    		else{
    			$("div.ambsdr-container div.kick-offbreakfast-kit ").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-breakfast.jpg", sizingMethod="scale")');
    		}
    	});
    	
    	$('div#ss-kit-desc p.para1 a,div.kit-desc  p.para1 a').on("click",function(){
    		var olid=$(this).parents("div.kit-desc").attr('id');
    		$('.'+olid+'-nav').show().animate({"top":"0"},350,"easeInOutCubic");
    		if(olid=='ss-kit-desc'){
    			$('html, body').animate({
	    			scrollTop: ($('div#ss-kit-desc').offset().top)-525+'px'
	    		}, 350);
    			return false;
    		}
    		else if(olid=='passport-kit-desc')
    		{
    			$('html, body').animate({
    				scrollTop: ($('div#EventGuide').offset().top)-50+'px'
    			}, 350);
    			return false;
    		}
    		else if(olid=='familyday-kit-desc')
    		{
				$('html, body').animate({
					scrollTop: ($('div#EventGuide').offset().top)-50+'px'
				}, 350);
    			return false;
			}
    		else if(olid=='funrun-kit-desc')
    		{
				$('html, body').animate({
    				scrollTop: ($('div#EventGuide').offset().top)-50+'px'
				}, 350);
    			return false;
			}
    		else if(olid=='kick-offbreakfast-kit-desc')
    		{
				$('html, body').animate({
    				scrollTop: ($('div#EventGuide').offset().top)-50+'px'
				}, 350);
    			return false;
			}	
    	});
    	
    	$('div.ambsdr-container div.nav-content-sec span.kit-layer-close').on("click",function(){
    		$(this).parents("div.nav-content-sec").animate({"top":"600px"},350,"easeInOutCubic", function(){
    			$(this).hide();
    		});
    	});
    	
    	$('div.mobile-kit-sec div.mobile-kit-des h2').on("click",function(){
    		var pid=$(this).parent().attr('id');
    		if($('div.mobile-kit-des .tog-sec').is(":visible")){
    			var vid=$('div.mobile-kit-des .tog-sec:visible').parent().attr('id');
    			if(vid==pid){
    				$('#'+pid+' .tog-sec').slideToggle();
    				$('#'+pid+' h2').children('span.mb-arrow').toggleClass('mb-arrow-up');
    			}else{
    				$('#'+vid+' .tog-sec').slideUp();
    				$('#'+vid+' h2').children('span.mb-arrow').removeClass('mb-arrow-up');
    				$('#'+pid+' .tog-sec').slideDown();
    				$('#'+pid+' h2').children('span.mb-arrow').addClass('mb-arrow-up');
    			}
    		}else{
    			$('#'+pid+' .tog-sec').slideDown();
    			$('#'+pid+' h2').children('span.mb-arrow').addClass('mb-arrow-up');
    		}
    	});
    	
    	$newsticker.hover(function(){
    		$newstickerHover = true;
    	}, function(){
    		$newstickerHover = false;
    	});
    	
    	$newstickerX = 0;
    	$newsticker.css({
    		"left": $newstickerX
    	});
    	setInterval(newstick, 25);
    	
    	console.log((-1*$newstickerW));
    };
    
    var newstick = function newstick() {
    	if (!$newstickerHover)
    	{
    		if ($newstickerX > (-1*($newstickerW-$(".tickercontainer").width())))
        	{
        		$newstickerX = $newstickerX - 1;
        		$newsticker.css("left",($newstickerX)+"px");
        	}
    		else
    		{
    			$newstickerX = -1*(1810 - $(".tickercontainer").width());
    		}
    	}
    }

	return {
		init: init
	};

})();

//-----------------------------------------------------------------------------------------------
$( document ).ready(function() {
	SBS.ambassador.init();
});
