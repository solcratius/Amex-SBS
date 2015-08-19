
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

SBS.namespace( 'view' );

SBS.view = (function() {
	var gFontSize,
		heroImgH,
		shareCounter,
		windowH,
		infoGY,
		infoGID,
		infoGTotal = 5,
		infoGTriggerY = [1100, 1355, 1610, 1825, 2050],
		$yearArrowX = ['70px', '225px', '380px', '535px'],
		carouselTrans,
		carouselCurID,
		carouselTotal = 4,
		isMobileOnly;
	
	var $heroImg = $("div.sbs-about-header"),
		$shareCounter = $("div#navpanel ul.about-subnav li.share"),
		$infoGArrow = $(".section1 .infoGraphixAnim .arrowContainer"),
		$infoGItem = $(".section1 .infoGraphixAnim .itemContainer"),
		$carouselNavL = $(".section2 .carousel .carouselNav.left"),
		$carouselNavR = $(".section2 .carousel .carouselNav.right"),
		$carouselMain = $(".section2 .carousel .carouselMain"),
		$yearArrow = $(".section2 .yearArrow img"),
		$yearBtn = $(".section2 .yearBtn");

  	var init = function init() {
  		$infoGArrow.find("img").removeAttr("src");
  		
  		gFontSize = 12;
  		gFontSizeSet();
  		mobileResizeSet();
  		
  		windowH = $(window).height();
  		heroImgH = $heroImg.height();
  		infoGID = 0;
  		carouselTrans = false;
  		setCarouselID(0);
  		
  		handlers();
  		
  		if(isMobile.any())
  		{
  			if ($(window).width()+15 <= 660)
  			{
  				$heroImg.css("background-size","auto 100%");
  				for (var i = 0; i < infoGTotal; i ++) infoGBuildIn(infoGID);
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
	  			
	  			$('body').scroll(function() {
	  	  			infoGY = ((-1*$('.main-container').offset().top)+74)+windowH;
	  	  			if (infoGY > infoGTriggerY[infoGID] && infoGID < infoGTotal) infoGBuildIn(infoGID);
	  	  		});
  			}
  		}
  		else
  		{
  			$(window).scroll(function() {
  				if ($(window).scrollTop() < heroImgH)
  	  			{
  	  				$heroImg.css({
  	  	  				"background-position": "center "+(($(window).scrollTop()*.5))+"px"
  	  	  			});
  	  			}
  	  			
  	  			infoGY = $(window).scrollTop()+windowH;
  	  			
  	  			if (infoGY > infoGTriggerY[infoGID] && infoGID < infoGTotal) infoGBuildIn(infoGID);
  	  		});
  		}
  		
  		$(window).resize(function(){
  			windowH = $(window).height();
  			gFontSizeSet();
  			mobileResizeSet();
  			//console.log($(window).width());
        });
	};
	
	var gFontSizeSet = function gFontSizeSet () {
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
			var $mobileHeroC = $(".res_Small div.sbs-about-header div.about-hdr-cnt");
			$mobileHeroC.css('margin-top', (mobileHeroH - $mobileHeroC.height() - 15) + 'px');
			$(".res_Small div.sbs-about-header").css('height', mobileHeroH+'px');
			
			$yearArrowX = ['11%', '36%', '60.8%', '85.5%'];
			$carouselMain.find('.carouselItem').css('width',$(window).width()+'px');
			
			infoGID = 0;
			setCarouselID(0);
			
			for (var i = 0; i < infoGTotal; i ++) $infoGItem.find(".id"+i+" .item").removeAttr('style');
			isMobileOnly = true;
		}
		else
		{
			$("div.sbs-about-header").css('height','450px');
			$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
			
			$yearArrowX = ['70px', '225px', '380px', '535px'];
			$carouselMain.find('.carouselItem').css('width','620px');
			
			isMobileOnly = false;
		}
	}
	
	var rNumGenerator = function (num) {
		return Math.floor(Math.random()*num);
    };
    
    var infoGBuildIn = function infoGraphBuildIn (id) {
    	if (id < infoGTotal) infoGID += 1;
    	
    	if (id > 0 && !isMobileOnly)
    	{
    		var srcGif;
    		if ($("body").hasClass("ie") || isMobile.any()) srcGif = "app/images/infoArrow-ie";
    		//else if(isMobile.any()) srcGif = "app/images/infoArrow-ios";
    		else srcGif = "app/images/infoArrow";

    		if ($infoGArrow.find(".id"+id).hasClass("arrowR")) $infoGArrow.find(".id"+id+" img").attr("src", srcGif+"R.gif?"+Math.random()).css('display','inline-block');
        	if ($infoGArrow.find(".id"+id).hasClass("arrowL")) $infoGArrow.find(".id"+id+" img").attr("src", srcGif+"L.gif?"+Math.random()).css('display','inline-block');
    	}
    	
    	var $infoGCur = $infoGItem.find(".id"+id+" .item");
    	var myDelay = 600;
    	var mySpeed = 250;
    	
    	if (!isMobileOnly)
    	{
    		$infoGCur.css({
        		"display": "inline-block",
        		"opacity": "0"
        	});
    	}
    	else
    	{
    		$infoGCur.css({
        		"display": "block",
        		"opacity": "0"
        	});
    	}
    	
    	if (!isMobileOnly)
    	{
	    	switch (id)
			{
				case 0:
					$infoGCur.delay(0).animate({
						marginRight: "80px",
						opacity: "1"
					}, mySpeed).animate({marginRight: "100px"}, mySpeed);
					$infoGCur.find(".reveal").css({left: "-50px"}).delay(0).animate({
						width: "250px",
						left: "0"
					}, mySpeed+100);
					break;
				case 1:
					$infoGCur.delay(myDelay).animate({
						marginRight: "40px",
						opacity: "1"
					}, mySpeed).animate({marginRight: "20px"}, mySpeed);
					$infoGCur.find(".reveal").css({left: "50px"}).delay(myDelay).animate({
						width: "170px",
						left: "0"
					}, mySpeed+100);
					break;
				case 2:
					$infoGCur.delay(myDelay).animate({
						marginLeft: "30px",
						opacity: "1"
					}, mySpeed).animate({marginLeft: "10px"}, mySpeed);
					$infoGCur.find(".reveal").css({left: "-50px"}).delay(myDelay).animate({
						width: "160px",
						left: "0"
					}, mySpeed+100);
					break;
				case 3:
					$infoGCur.delay(myDelay).animate({
						marginRight: "30px",
						opacity: "1"
					}, mySpeed).animate({marginRight: "10px"}, mySpeed);
					$infoGCur.find(".reveal").css({left: "50px"}).delay(myDelay).animate({
						width: "180px",
						left: "0"
					}, mySpeed+100);
					break;
				case 4:
					$infoGCur.delay(myDelay-150).animate({
						marginLeft: "140px",
						opacity: "1"
					}, mySpeed+150).animate({marginLeft: "120px"}, mySpeed);
					$infoGCur.find(".reveal").css({left: "-50px"}).delay(myDelay-150).animate({
						width: "250px",
						left: "0"
					}, mySpeed+250);
					break;
			}
	    	$("div.about-container .section1 .infoGraphixAnim").animate({'height':($infoGItem.height()+50)+'px'}, 150);
    	}
    	else
    	{
    		$infoGCur.delay(myDelay).animate({"opacity": "1"}, 200, function(){
    			$(".res_Small div.about-container .section1 .infoGraphixAnim").css({'height':($infoGItem.height()+50)+'px'});
    		});
    	}
    };
    
    var initShareCounter = function () {
    	shareCounter = [];
    	for (var i = 0; i < 3; i ++) shareCounter.push(Number(String(rNumGenerator(10)) + String(rNumGenerator(10)) + String(rNumGenerator(10)) + String(rNumGenerator(10))));
    	
    	setShareCounter($shareCounter.find("span.facebook"), 0);
    	setShareCounter($shareCounter.find("span.twitter"), 1);
    	setShareCounter($shareCounter.find("span.instagram"), 2);
    };
    
    var setShareCounter = function ($clip, counter) {
    	$clip.html(shareCounter[counter]);
    	
    	setTimeout(function(){
    		shareCounter[counter] += rNumGenerator(101);
    		setShareCounter($clip, counter);
    	}, (rNumGenerator(10) * 1000));
    };
    
    var carouselInit = function carouselInit () {
    	$carouselNavL.click(function(e){
    		e.stopPropagation();
			e.preventDefault();
			if (carouselCurID > 0)
			{
				if (!carouselTrans) setCarouselID(carouselCurID-1);
	    		$(this).animate({marginLeft: "-115px"}, 100, function(){
	    			$(this).animate({marginLeft: "-110px"}, 300);
	    		});
			}
    	});
    	
		$carouselNavR.click(function(e){
			e.stopPropagation();
			e.preventDefault();
			if (carouselCurID < (carouselTotal-1))
			{
				if (!carouselTrans) setCarouselID(carouselCurID+1);
	    		$(this).animate({marginLeft: "675px"}, 100, function(){
	    			$(this).animate({marginLeft: "670px"}, 300);
	    		});
			}
    	});
		
		$yearBtn.find('.year').each(function(i){
			$(this).on('click', function(){
				if (!$(this).hasClass('active')) if (!carouselTrans) setCarouselID(i);
			});
		});
    }
    
    var setCarouselID = function setCarouselID (id) {
    	carouselTrans = true;
    	if (id <= 0)
    	{
    		$carouselNavL.removeClass('active');
    		if (!$carouselNavR.hasClass('active')) $carouselNavR.addClass('active');
    	}
    	else if (id >= (carouselTotal-1))
    	{
    		$carouselNavR.removeClass('active');
    		if (!$carouselNavL.hasClass('active')) $carouselNavL.addClass('active');
    	}
    	else
    	{
    		if (!$carouselNavL.hasClass('active')) $carouselNavL.addClass('active');
    		if (!$carouselNavR.hasClass('active')) $carouselNavR.addClass('active');
    	}
    	
    	carouselCurID = id;
    	
    	if ($(window).width()+15 <= 660)
		{
    		$carouselMain.animate({
        		left: -(carouselCurID*$(window).width())+'px'
        	}, 500, 'easeInOutCubic', function(){
        		carouselTrans = false;
        	});
		}
    	else
    	{
    		$carouselMain.animate({
        		left: -(carouselCurID*620)+'px'
        	}, 500, 'easeInOutCubic', function(){
        		carouselTrans = false;
        	});
    	}
    	
    	$yearBtn.find('.active').removeClass('active');
		$yearBtn.find('.year').eq(carouselCurID).addClass('active');
    	
    	$yearArrow.animate({
    		left: $yearArrowX[carouselCurID]
    	}, 500, 'easeInOutCubic');
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
    	initShareCounter();
    	carouselInit();    	
    	$('.sbs-about-header .about-hdr-cnt a.submit-btn').on("mousedown touchstart", function () {
    		$("#modalBox").fadeIn(150);
    	});
    };

	return {
		init: init
	};

})();


//-----------------------------------------------------------------------------------------------

$( document ).ready(function() {
	SBS.view.init();
});
