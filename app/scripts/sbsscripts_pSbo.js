
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
		winW,
		winH,
		quadModuleSelected,
		quadModuleExpanded,
		expandID,
		detailRowH = 0,
		detailMobileRowH = [],
		mobileScrollTop = [],
		carouselItemsW,
		sectionY = [],
		scrollY,
		ieEight,
		isMobileOnly;
	
	var $heroImg = $("div.sbs-about-header"),
		$quadModuleBg = $(".section1 div.baseImg"),
		$quadModuleItem = $(".itemContainer .itemRow .rowContainer .item"),
		$quadModuleDetail = $(".itemContainer .detailRow"),
		$quadModuleDItem = $(".section1 .detailRow .detailItem"),
		$carousel0d = $("div.about-container .section.section2b.desktopOnly .carouselContainer.cr0"),
		$carousel1d = $("div.about-container .section.section2b.desktopOnly .carouselContainer.cr1");

  	var init = function init() {
  		if ($("body").hasClass("ie8nbelow")) ieEight = true;
  		else !ieEight;
  			
  		gFontSize = 12;
  		gFontSizeSet();
  		mobileResizeSet();
  		
  		scrollY = $(window).scrollTop();
  		navH = $('#nav-container').height();
  		heroImgH = $heroImg.height();
  		winH = $(window).height();
  		moduleOffsetInit();
  		quadModuleSelected = 4;
  		quadModuleExpanded = false;
  		subNavInit();
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
  			
	  			$heroImg.css("background-size","auto 702px");
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
  				
  				subNavInit();
  	  		});
  		}
  		
  		$(window).resize(function(){
  			heroImgH = $heroImg.height();
  			gFontSizeSet();
  			mobileResizeSet();
  			moduleOffsetInit();
  			if (quadModuleExpanded) quadModuleExpand();
  			subNavInit();
        });
	};
	
	var subNavInit = function subNavInit() {		
		if (scrollY >= 400)
		{
			$("#nav-container").css({
  				"position": "absolute",
  				"top": "400px"
  			});
			
			if (scrollY < 450)
			{
				$(".subNav .bg").css({
	  				"opacity": .65 + ((scrollY-400)*.0063)
	  			});
			}
			else
			{
				$(".subNav .bg").css({
	  				"opacity": .92
	  			});
			}
		}
		else
		{
			$("#nav-container").css({
  				"position": "fixed",
  				"top": "0"
  			});
			
			$(".subNav .bg").css({
  				"opacity": .65
  			});
		}
		
		if (scrollY >= 450)
		{
			$(".subNav").css({
  				"position": "fixed",
  				"margin-top": "0",
  				"top": "0"
  			});
			
//			$(".section2 h2.header-text").css({
//  				"padding-top": "85px"
//  			});
		}
		else
		{
			$(".subNav").css({
  				"position": "absolute",
  				"margin-top": "-50px",
  				"top": "auto"
  			});
			
//			$(".section2 h2.header-text").css({
//  				"padding-top": "35px"
//  			});
		}
		
		for (var j = 0; j < 3; j ++)
		{
			if (scrollY >= sectionY[j] && scrollY < sectionY[j+1]) $(".subNav").find(".id"+j).addClass("selected");
			else $(".subNav").find(".id"+j).removeClass("selected");
			
			if (scrollY >= sectionY[j+1]) $(".subNav").find(".id"+j).addClass("passed");
			else $(".subNav").find(".id"+j).removeClass("passed");
		}
	}
	
	var moduleOffsetInit = function moduleOffsetInit () {
		sectionY = [];
		
		sectionY.push($(".section2").position().top-20);
		sectionY.push($(".section1").position().top-20);
		sectionY.push($(".section4a").position().top-20);
		sectionY.push($(".section-terms").position().top);
	}
	
	var initQuadModule = function initQuadModule() {
		$quadModuleItem.each(function(i){
			var $myItem = $quadModuleItem.eq(i);
			
			$myItem.on('mouseover', function(e) {
				e.stopPropagation();
				e.preventDefault();
				
				if (!quadModuleExpanded)
				{
					if (i == 0 || i == 2) $(this).find('.blueHover').stop().animate({left: '-36%'},250);
					else $(this).find('.blueHover').stop().animate({right: '-36%'},250);
						
					$(this).find('.blueHover .label').css('display','block');
				}
			});
			
			$myItem.on('mouseout', function(e) {
				if (!quadModuleExpanded)
				{
					if (i == 0 || i == 2) $(this).find('.blueHover').stop().animate({left: '-40%'},250);
					else $(this).find('.blueHover').stop().animate({right: '-40%'},250);
					
					$(this).find('.blueHover .label').css('display','none');
				}
			});
			
			$myItem.on('click', function(e) {
				e.stopPropagation();
				e.preventDefault();

				quadModuleSelected = i;
				quadModuleExpanded = true;
				
				var $quadModuleItemBlueW = $quadModuleItem.eq(0).find('.blueHover').width();
				
				for (var j = 0; j < 4; j ++)
				{
					if (j != i)
					{
//						if (j == 0 || j == 2) $quadModuleItem.eq(j).find('.blueHover').stop().animate({left: (-1*$quadModuleItemBlueW)+'px'},300,"easeInOutQuad",function(){$(this).css("display","none")});
//						else $quadModuleItem.eq(j).find('.blueHover').stop().animate({right: (-1*$quadModuleItemBlueW)+'px'},300,"easeInOutQuad",function(){$(this).css("display","none")});
						$quadModuleItem.eq(j).find('.blueHover').stop().animate({opacity: 0},300,"easeInOutQuad",function(){$(this).css("display","none")});
					}
				}
				var myRight = $(this).width()*-.36;
				
				if (i == 0 || i == 2) $(this).find('.blueHover').stop().animate({left: '0'},400,"easeInOutQuad");
				else $(this).find('.blueHover').stop().css({right: myRight+'px'}).animate({right: '0'},400,"easeInOutQuad");
				
				$(this).find('.blueHover .copy').fadeOut(200);
				$(this).find('.blueHover .label').fadeOut(200);
				
				setTimeout(function(){
					$quadModuleBg.find("img.baseImg"+i).css("display","block");
					$quadModuleBg.find("img.baseImg4").css("display","none");
					
					$quadModuleItem.eq(i).find('.blueHover').css("display","none");
					
					quadModuleExpandCalc(i);
					
				},250);
				
				setTimeout(function(){
					quadModuleExpand(i);
				}, 650);
			});
		});
		
		$(".section1 .detailRow .detailItem .blueBg").on('click', function(e) {
			quadModuleCollapse();
		});
	};
	
	var quadModuleExpandCalc = function quadModuleExpandCalc(i) {
		var $quadModuleBgH = ((winW*2+8)*484)/1351;
		if ($quadModuleBgH > (968+4))
		{
			$quadModuleBg.find("img").css("height", "auto");
			
			switch(i) {
		    case 0:
		    	$quadModuleBg.find("img").stop().animate({
					width: (winW*2+4)+'px',
					left: 0,
					top: 0
				},400,"easeInOutQuad");
		        break;
		    case 1:
		    	$quadModuleBg.find("img").stop().animate({
					width: (winW*2+4)+'px',
					left: (-1*(winW+8))+"px",
					top: 0
				},400,"easeInOutQuad");
		        break;
		    case 2:
		    	$quadModuleBg.find("img").stop().animate({
					width: (winW*2+4)+'px',
					left: 0,
					top: (-1*($quadModuleBgH*.5+8))+'px'
				},400,"easeInOutQuad");
		        break;
		    case 3:
		    	$quadModuleBg.find("img").stop().animate({
					width: (winW*2+4)+'px',
					left: (-1*(winW+8))+"px",
					top: (-1*($quadModuleBgH*.5+8))+'px'
				},400,"easeInOutQuad");
		        break;
		    default:
		        $quadModuleBg.find("img").stop().animate({
					width: (winW*2+4)+'px',
					left: 0,
					top: 0
				},400,"easeInOutQuad");
			}
		}
		else
		{
			$quadModuleBg.find("img").css("width", "auto");
			
			switch(i) {
		    case 0:
		    	$quadModuleBg.find("img").stop().animate({
					height: (968+4)+'px',
					left: (-1*((2702)*.5-winW))+"px",
					top: 0
				},400,"easeInOutQuad");
		        break;
		    case 1:
		    	$quadModuleBg.find("img").stop().animate({
		    		height: (968+4)+'px',
					left: (-1*(2713*.5))+"px",
					top: 0
				},400,"easeInOutQuad");
		        break;
		    case 2:
		    	$quadModuleBg.find("img").stop().animate({
		    		height: (968+4)+'px',
		    		left: (-1*((2702)*.5-winW))+"px",
		    		top: '-488px'
				},400,"easeInOutQuad");
		        break;
		    case 3:
		    	$quadModuleBg.find("img").stop().animate({
		    		height: (968+4)+'px',
		    		left: (-1*(2713*.5))+"px",
		    		top: '-488px'
				},400,"easeInOutQuad");
		        break;
		    default:
		        $quadModuleBg.find("img").stop().animate({
		        	height: (968+4)+'px',
		        	left: (-1*((2702)*.5-winW))+"px",
					top: 0
				},400,"easeInOutQuad");
			}
		}
	}
	
	var quadModuleExpand = function quadModuleExpand(id) {
		$(".section1 .detailRow").css("display","block");
		$(".section1 .detailRow .detailItem.id"+id).fadeIn(250);
		
		if (winW <= (1351))
		{			
			$quadModuleDItem.find("img.bgImg").removeAttr('style');
			
			$quadModuleDItem.find("img.bgImg").css({
				"width": "1351px",
				"height": "484px",
				"top": 0
			});
			
			switch(quadModuleSelected) {
			    case 0:
			    	$quadModuleDItem.eq(quadModuleSelected).find("img.bgImg").css({
						"left": (-1*((2702)*.5-winW))+"px"
					});
			        break;
			    case 1:
			    	$quadModuleDItem.eq(quadModuleSelected).find("img.bgImg").css({
			    		"left": "0"
					});
			        break;
			    case 2:
			    	$quadModuleDItem.eq(quadModuleSelected).find("img.bgImg").css({
			    		"left": (-1*((2702)*.5-winW))+"px"
					});
			        break;
			    case 3:
			    	$quadModuleDItem.eq(quadModuleSelected).find("img.bgImg").css({
			    		"left": "0"
					});
			        break;
			    default:
			    	$quadModuleDItem.eq(quadModuleSelected).find("img.bgImg").css({
			    		"left": (-1*((2702)*.5-winW))+"px"
					});
			}
		}
		else
		{			
			$quadModuleDItem.find("img.bgImg").css({
				"width": "100%",
				"height": "auto",
				"left": "0"
			});
		}
	};
	
	var quadModuleCollapse = function quadModuleCollapse() {
		$(".section1 .detailRow .detailItem.id"+quadModuleSelected).fadeOut(200);
		
		var $quadModuleBgH = ((winW*2+8)*484)/1351;
		if ($quadModuleBgH > (968+4))
		{
			$quadModuleBg.find("img").css("height", "auto");
			
			switch(quadModuleSelected) {
		    case 0:
		    	$quadModuleBg.find("img").css({
					width: (winW*2+4)+'px',
					left: 0,
					top: 0
				});
		        break;
		    case 1:
		    	$quadModuleBg.find("img").css({
					width: (winW*2+4)+'px',
					left: (-1*(winW+8))+"px",
					top: 0
				});
		        break;
		    case 2:
		    	$quadModuleBg.find("img").css({
					width: (winW*2+4)+'px',
					left: 0,
					top: (-1*($quadModuleBgH*.5+8))+'px'
				});
		        break;
		    case 3:
		    	$quadModuleBg.find("img").css({
					width: (winW*2+4)+'px',
					left: (-1*(winW+8))+"px",
					top: (-1*($quadModuleBgH*.5+8))+'px'
				});
		        break;
		    default:
		        $quadModuleBg.find("img").css({
					width: (winW*2+4)+'px',
					left: 0,
					top: 0
				});
			}
		}
		else
		{
			$quadModuleBg.find("img").css("width", "auto");
			
			switch(quadModuleSelected) {
		    case 0:
		    	$quadModuleBg.find("img").css({
					height: (968+4)+'px',
					left: (-1*((2702)*.5-winW))+"px",
					top: 0
				});
		        break;
		    case 1:
		    	$quadModuleBg.find("img").css({
		    		height: (968+4)+'px',
					left: (-1*(2713*.5))+"px",
					top: 0
				});
		        break;
		    case 2:
		    	$quadModuleBg.find("img").css({
		    		height: (968+4)+'px',
		    		left: (-1*((2702)*.5-winW))+"px",
		    		top: '-488px'
				});
		        break;
		    case 3:
		    	$quadModuleBg.find("img").css({
		    		height: (968+4)+'px',
		    		left: (-1*(2713*.5))+"px",
		    		top: '-488px'
				});
		        break;
		    default:
		        $quadModuleBg.find("img").css({
		        	height: (968+4)+'px',
		        	left: (-1*((2702)*.5-winW))+"px",
					top: 0
				});
			}
		}
		
		setTimeout(function(){
			$(".section1 .detailRow").css("display","none");
			
			
			if (ieEight && winW > 1351)
			{
				$quadModuleBg.find("img").stop().animate({
					width: '1351px',
					height: '484px',
					left: 0,
					top: 0
				},400,"easeInOutQuad");
			}
			else
			{
				$quadModuleBg.find("img").stop().animate({
					width: '1351px',
					height: '484px',
					left: (winW*.5-676)+"px",
					top: 0
				},400,"easeInOutQuad");
			}
			
		},200);
		
		setTimeout(function(){
			$quadModuleBg.find("img.baseImg4").css("display","block");
			$quadModuleBg.find("img.baseImg"+quadModuleSelected).css("display","none");
			$quadModuleItem.eq(quadModuleSelected).find('.blueHover').css("display", "block");
			if (quadModuleSelected == 0 || quadModuleSelected == 2) $quadModuleItem.eq(quadModuleSelected).find('.blueHover').stop().animate({left: '-40%'},400,"easeInOutQuad", function(){quadModuleExpanded = false;});
			else $quadModuleItem.eq(quadModuleSelected).find('.blueHover').stop().animate({right: '-40%'},400,"easeInOutQuad", function(){quadModuleExpanded = false;});
			$quadModuleItem.eq(quadModuleSelected).find('.blueHover .copy').fadeIn(200);
			$quadModuleItem.eq(quadModuleSelected).find('.blueHover .label').fadeIn(200);
			
			for (var j = 0; j < 4; j ++)
			{
//				if (j == 0 || j == 2) $quadModuleItem.eq(j).find('.blueHover').css("display","block").stop().animate({left: '-40%'},300,"easeInOutQuad");
//				else $quadModuleItem.eq(j).find('.blueHover').css("display","block").stop().animate({right: '-40%'},300,"easeInOutQuad");
				if (j != quadModuleSelected) $quadModuleItem.eq(j).find('.blueHover').css("display","block").animate({opacity: 1},300,"easeInOutQuad");
				$quadModuleItem.eq(j).find('.blueHover .label').css('display','none');
			}
			mobileResizeSet();
		},600);
	};
	
	var initCarousels = function initCarousels() {
		$carousel0d.find(".pagination ul li").each(function(i){
			$(this).on("click", function(e){
				e.stopPropagation();
				e.preventDefault();
				$carousel0d.find(".pagination ul li.selected").removeClass('selected');
				$(this).addClass('selected');
				$carousel0d.find(".itemContainer").stop().animate({left: (-1*(300*i))+'px'},300,'easeInOutCubic');
			});
		});
		
		$carousel0d.find(".pagination .pagiArrow.left").on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			var tempID = $carousel0d.find(".pagination ul li.selected").index();
			$carousel0d.find(".pagination ul li.selected").removeClass('selected');
			if (tempID <= 0) tempID = 3;
			else tempID = tempID-1;
			$carousel0d.find(".pagination ul li").eq(tempID).addClass('selected');
			$carousel0d.find(".itemContainer").stop().animate({left: (-1*(300*tempID))+'px'},300,'easeInOutCubic');
			$(this).animate({marginRight: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginRight: '5px'},300,'easeInOutCubic');
			});
			$carousel0d.find(".pagination .pagiArrow.right").animate({marginRight: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginRight: '5px'},300,'easeInOutCubic');
			});
		});
		
		$carousel0d.find(".pagination .pagiArrow.right").on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			var tempID = $carousel0d.find(".pagination ul li.selected").index();
			$carousel0d.find(".pagination ul li.selected").removeClass('selected');
			if (tempID >= 3) tempID = 0;
			else tempID = tempID+1;
			$carousel0d.find(".pagination ul li").eq(tempID).addClass('selected');
			$carousel0d.find(".itemContainer").stop().animate({left: (-1*(300*tempID))+'px'},300,'easeInOutCubic');
			$(this).animate({marginLeft: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginLeft: '5px'},300,'easeInOutCubic');
			});
			$carousel0d.find(".pagination .pagiArrow.left").animate({marginLeft: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginLeft: '5px'},300,'easeInOutCubic');
			});
		});
		
		$carousel1d.find(".pagination ul li").each(function(i){
			$(this).on("click", function(e){
				e.stopPropagation();
				e.preventDefault();
				$carousel1d.find(".pagination ul li.selected").removeClass('selected');
				$(this).addClass('selected');
				$carousel1d.find(".itemContainer").stop().animate({left: (-1*(300*i))+'px'},300,'easeInOutCubic');
			});
		});
		
		$carousel1d.find(".pagination .pagiArrow.left").on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			var tempID = $carousel1d.find(".pagination ul li.selected").index();
			$carousel1d.find(".pagination ul li.selected").removeClass('selected');
			if (tempID <= 0) tempID = 2;
			else tempID = tempID-1;
			$carousel1d.find(".pagination ul li").eq(tempID).addClass('selected');
			$carousel1d.find(".itemContainer").stop().animate({left: (-1*(300*tempID))+'px'},300,'easeInOutCubic');
			$(this).animate({marginRight: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginRight: '5px'},300,'easeInOutCubic');
			});
			$carousel1d.find(".pagination .pagiArrow.right").animate({marginRight: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginRight: '5px'},300,'easeInOutCubic');
			});
		});
		
		$carousel1d.find(".pagination .pagiArrow.right").on("click", function(e){
			e.stopPropagation();
			e.preventDefault();
			var tempID = $carousel1d.find(".pagination ul li.selected").index();
			$carousel1d.find(".pagination ul li.selected").removeClass('selected');
			if (tempID >= 2) tempID = 0;
			else tempID = tempID+1;
			$carousel1d.find(".pagination ul li").eq(tempID).addClass('selected');
			$carousel1d.find(".itemContainer").stop().animate({left: (-1*(300*tempID))+'px'},300,'easeInOutCubic');
			$(this).animate({marginLeft: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginLeft: '5px'},300,'easeInOutCubic');
			});
			$carousel1d.find(".pagination .pagiArrow.left").animate({marginLeft: '8px'},150,'easeInOutCubic',function(){
				$(this).animate({marginLeft: '5px'},300,'easeInOutCubic');
			});
		});
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
	
	var mobileResizeSet = function mobileResizeSet() {
		$("div.sbs-about-header").css('height','450px');
		$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
		
		$quadModuleItem.each(function( i ) {
  			$(this).css('width', (($(window).width()*.5)-2)+'px');
			var $quadCopy = $(this).find(".blueHover .copy");
			var $quadCopyH = $quadCopy.height();
			$quadCopy.css('top', ((240-$quadCopy.height())*.5)+'px');
		});
		
		winW = $(window).width();
		
		if (winW <= (1351+15))
		{
			$quadModuleBg.find("img").css({
				"left": (winW*.5-676)+"px"
			});
		}
		else
		{
			if (!ieEight)
			{
				$quadModuleBg.find("img").css({
					"left": (winW*.5-676)+"px"
				});
			}
			else
			{
				$quadModuleBg.find("img").css({
					"left": 0
				});
			}
		}
		
		$(".itemContainer .itemRow").removeAttr('style');
		//$(".ie8nbelow .itemContainer .detailRow").find('a.submit-btn').css('left', (($(window).width()*.5)-($(".itemContainer .detailRow").find('a.submit-btn').width()*.5+32))+'px');
		
		isMobileOnly = false;
		
		$quadModuleItem.find(".blueHover").css("width", ($quadModuleItem.width()+40)+"px");
		$quadModuleItem.find(".blueHover .blueBg .bluePx").css("width", ($quadModuleItem.find(".blueHover .blueBg").width()-35)+"px");
		
		
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
    	initQuadModule();
    	initCarousels();
    	$(".subNav .subBtn").each(function(i){
			$(".subNav .subBtn").eq(i).on("click", function(){
				$("html, body").animate({
					scrollTop: sectionY[i]+20
				}, 500, "easeInOutCubic");
			});
		});
    };

	return {
		init: init
	};

})();


//-----------------------------------------------------------------------------------------------
$(window).load(function() {
	SBS.sbo.init();
});
//$( document ).ready(function() {
//	SBS.sbo.init();
//});
