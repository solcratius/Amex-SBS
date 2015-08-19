
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
		moduleOffsetS = [],
		moduleOffsetE = [],
		carouselShareCount,
		carouselShareIDs = [],
		isMobileOnly;
	
	var scrollY,
		scrollDir,
		$heroImg = $("div.sbs-about-header"),
		$heroImg2 = $("div.about-container .section2a"),
		$heroImg3 = $("div.about-container .section2b"),
		$heroImg4 = $("div.about-container .section2c"),
		$heroImgs = [$heroImg2, $heroImg3, $heroImg4],
		$flipShare = $(".flipContainer .flipShare"),
		$navpanelH;

  	var init = function init() {
  		gFontSize = 12;
  		gFontSizeSet();
  		mobileResizeSet();
  		
  		carouselShareCount = 0;
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
  				$heroImg2.css("background-size","auto 100%");
  				$heroImg3.css("background-size","auto 100%");
  				$heroImg4.css("background-size","auto 100%");
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
  				$heroImg2.css("background-size","auto 702px");
  				$heroImg3.css("background-size","auto 702px");
  				$heroImg4.css("background-size","auto 702px");
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
  				
  				for(var i = 0; i < 3; i ++)
  				{
  					if (($(window).scrollTop() > moduleOffsetS[i]) && ($(window).scrollTop() < moduleOffsetE[i]))
  	  	  			{
  	  					var perLen = (moduleOffsetE[i]-moduleOffsetS[i])*0.01;
  	  					//var perNum = (i == 0 || i == 2) ? 100-(Math.round((scrollY-moduleOffsetS[i])/perLen)) : Math.round((scrollY-moduleOffsetS[i])/perLen);
  	  					var perNum = Math.round((scrollY-moduleOffsetS[i])/perLen) * 1;
  	  					$heroImgs[i].css({
  	  	  	  				"background-position": "center "+perNum+"%"
  	  	  	  			});
  	  	  			}
  				}
  	  		});
  		}
  		
  		$(window).resize(function(){
  			heroImgH = $heroImg.height();
  			gFontSizeSet();
  			mobileResizeSet();
  			moduleOffsetInit();
        });
	};
	
	var moduleOffsetInit = function moduleOffsetInit () {
		moduleOffsetS = [];
		moduleOffsetE = [];
		
		for (var i = 0; i < 3; i ++)
		{
			moduleOffsetS.push($heroImgs[i].offset().top-winH);
			moduleOffsetE.push($heroImgs[i].offset().top+$heroImgs[i].height()-navH);
			//console.log('moduleOffsetS: '+moduleOffsetS[i]+", moduleOffsetE: "+moduleOffsetE[i]);
		}
		
		$("#navpanel .expanded").css({"display": "block"});
		$("#navpanel").css({"height": "auto"});
		$navpanelH = $("#navpanel .expanded").height() + 50;
		$("#navpanel .expanded").css("display", "none");
		$("#navpanel").css({"height": "50px"});
		$("#subExpand").removeClass('selected');
		
		$("div#navpanel .videoPlayer .playerContainer").html('');
		$("div#navpanel .videoPlayer").css({"display": "none"});
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
	
	var modalW;
	
	var mobileResizeSet = function mobileResizeSet() {
		if ($(window).width()+15 <= 660)
		{
//			var mobileHeroH = ($(window).width()*786)/660;
			var mobileHeroH = ($(window).width()*856)/660;
			$(".res_Small div.sbs-about-header").css('height', mobileHeroH+'px');
			
			isMobileOnly = true;
		}
		else
		{
			$("div.sbs-about-header").css('height','450px');
			$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
			
			$(".itemContainer .itemRow").removeAttr('style');
			
			isMobileOnly = false;
		}
		
		modalW = $("#modalBox .modal").width();
		
		$("#modalBox .modal").css({
			"margin": 0,
			"margin-top": "60px",
			"left": "50%",
			"margin-left": (-1*(modalW*.5))+"px"
		});
	}
	
	var rNumGenerator = function rNumGenerator(num) {
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
    
    var currentHour = function currentHour () {
    	var now     = new Date();
        var hour    = now.getHours();
        
        if (hour > 16 || hour < 6) $('div.sbs-about-header').addClass('night');
//        return hour;
    };
    
    var hacked = function hacked () {
    	var x, y, newX, newY;
    	$("#modalBox .modal .closeBtn").on("mouseover", function () {
    		if ($("#modalBox .modal .confirmContent").css("display") == "block")
    		{
    			x = $("#modalBox .modal").position().left;
        		y = $("#modalBox .modal").position().top;
        		if (x > ($(window).width()-($("#modalBox .modal").width()+x))) newX = x-($(window).width()-$("#modalBox .modal").width());
        		else newX = x+(($(window).width()-($("#modalBox .modal").width()+x))*.25);
        		if (y > ($(window).height()-($("#modalBox .modal").height()+y))) newY = y-($(window).height()-($("#modalBox .modal").height()+y));
        		else newY = y+(($(window).height()-($("#modalBox .modal").height()+y))*.25);
        		
        		$("#modalBox .modal").removeAttr("style");
        		$("#modalBox .modal").css({
        			"position": "absolute",
        			"margin": 0,
        			"left": newX+"px",
        			"top": newY+"px"
        		});
    		}
    	});
    };
    
    function handlers() {
    	currentHour();
    	
    	$('div#navpanel ul.about-subnav li a.addToCalBtn').on("mousedown touchstart", function () {
    		$("#modalBox .modal .shareContent").css("display","block");
    		$("#modalBox .modal .confirmContent").css("display","none");
    		$("#modalBox .modal").removeAttr("style");
    		$("#modalBox").fadeIn(150);
    		modalW = $("#modalBox .modal").width();
    		$("#modalBox .modal").css({
    			"margin": 0,
    			"margin-top": "60px",
    			"left": "50%",
    			"margin-left": (-1*(modalW*.5))+"px"
    		});
    	});
    	
    	$('div.sbs-about-header .noDiv a.no-btn').on("mousedown touchstart", function () {
    		$("#modalBox .modal .shareContent").css("display","none");
    		$("#modalBox .modal .confirmContent").css("display","block");
    		$("#modalBox .modal").removeAttr("style");
    		$("#modalBox").fadeIn(150);
    		modalW = $("#modalBox .modal").width();
    		$("#modalBox .modal").css({
    			"margin": 0,
    			"margin-top": "60px",
    			"left": "50%",
    			"margin-left": (-1*(modalW*.5))+"px"
    		});
    		hacked();
    	});
    	
    	$('div.sbs-about-header .about-hdr-cnt img').on("mousedown touchstart", function () {
    		if ($('div.sbs-about-header').hasClass('night')) $('div.sbs-about-header').removeClass('night');
    		else $('div.sbs-about-header').addClass('night');
    	});
    	
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
    	
    	$("div#navpanel .expanded .grid960 .videoContainer .playBtn").on("click", function(e){
    		e.stopPropagation();
			e.preventDefault();
			$("div#navpanel").animate({"height": "530px"}, 300, 'easeInOutCubic');
			$("div#navpanel .videoPlayer").css({"display": "block", "opacity": 0}).animate({'opacity': 1}, 300, 'easeInOutCubic');
			$("div#navpanel .videoPlayer .playerContainer").html('<iframe src="https://www.youtube.com/embed/4hAyaRr9zZY?autoplay=1" frameborder="0" allowfullscreen=""> </iframe>');
    	});
    	
    	$("div#navpanel .videoPlayer .closeBtn").on("click", function(e){
    		e.stopPropagation();
			e.preventDefault();
			$("div#navpanel .videoPlayer").animate({'opacity': 0}, 300, 'easeInOutCubic', function(){
				$("div#navpanel .videoPlayer .playerContainer").html('');
				$("div#navpanel .videoPlayer").css({"display": "none"});
				$("div#navpanel").animate({"height": $navpanelH+"px"}, 300, 'easeInOutCubic');
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
