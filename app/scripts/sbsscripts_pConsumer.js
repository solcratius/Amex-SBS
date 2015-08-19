
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
		navH,
		savethedateNum,
		savethedateTotalDigit,
		moduleOffsetS = [],
		moduleOffsetE = [],
		sBoxCol = 12,
		sBoxRow = 3,
		sBoxW = 75,
		isMobileOnly,
		sectionY = [],
		scrollY = 0,
		sBoxTeased = false,
		searchEventState = 0,
		pushLAmountArr = [-25,-13,-1,11,23],
	    pushRAmountArr = [-23,-11,1,13,25],
	    pushAmountArrIndex,
	    rowIndex,
	    colIndex,
	    isBoxOpened = false,
	    prevBox,
	    winW;
	
	var $heroImg = $("div.sbs-about-header"),
		$heroImg2 = $("div.about-container .section2"),
		$heroImg0 = $("div.about-container .section0"),
		$shareCounter = $("div#navpanel ul.about-subnav li.share"),
		$savethedateCounter = $("div.sbs-about-header .about-hdr-cnt .savethedate-counter"),
		$sBoxContainer = $("div.about-container .section2 .grid1320"),
		$heroImgs = [$heroImg2];
		
  	var init = function init() {
  		gFontSize = 12;
  		gFontSizeSet();
  		navH = $('#nav-container').height();
  		windowH = $(window).height();
  		heroImgH = $heroImg.height();
  		mobileResizeSet();
  		moduleOffsetInit();
  		subNavInit();
  		handlers();
  		
  		if(isMobile.any())
  		{
  			if ($(window).width() <= 660)
  			{
  				$heroImg.css("background-size","auto 100%");
  				$heroImg1.css("background-size","auto");
  				$heroImg0.css("background-size","auto");
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
	  			$heroImg1.css("background-size","auto 702px");
  				$heroImg2.css("background-size","auto 702px");
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
  				
  				for(var i = 0; i < 1; i ++)
  				{
  					if (($(window).scrollTop() > moduleOffsetS[i]) && ($(window).scrollTop() < moduleOffsetE[i]))
  	  	  			{
  	  					var perLen = (moduleOffsetE[i]-moduleOffsetS[i])*0.01;
  	  					var perNum = Math.round((scrollY-moduleOffsetS[i])/perLen);
  	  					$heroImgs[i].css({
  	  	  	  				"background-position": "center "+perNum+"%"
  	  	  	  			});
  	  	  			}
  				}
  				
  				subNavInit();
  	  		});
  		}
  		
  		$(window).resize(function(){
  			windowH = $(window).height();
  			gFontSizeSet();
  			mobileResizeSet();
  			moduleOffsetInit();
  			handlers();
  			subNavInit();
  			//console.log($(window).width());
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
		}
		else
		{
			$(".subNav").css({
  				"position": "absolute",
  				"margin-top": "-50px",
  				"top": "auto"
  			});
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
		moduleOffsetS = [];
		moduleOffsetE = [];
		
		for (var i = 0; i < 1; i ++)
		{
			moduleOffsetS.push($heroImgs[i].offset().top-windowH);
			moduleOffsetE.push($heroImgs[i].offset().top+$heroImgs[i].height()-navH);
			
//			console.log((windowH)+", "+moduleOffsetE[i]);
		}
		
		sectionY = [];
		
		sectionY.push($(".section1").position().top-20);
		sectionY.push($(".section2").position().top-20);
		sectionY.push($(".section2b").position().top-20);
		sectionY.push($(".section3").position().top);
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
			$(".res_Small div.sbs-about-header").css('height', mobileHeroH+'px');
			
			
			isMobileOnly = true;
		}
		else
		{
//			$("div.sbs-about-header").css('height',(windowH - 50)+'px');
			$("div.sbs-about-header").css('height','450px');
			$("div.sbs-about-header div.about-hdr-cnt").removeAttr('style');
			
			isMobileOnly = false;
		}
	}
	
	var rNumGenerator = function (num) {
		return Math.floor(Math.random()*num);
    };
    
    var initSavethedateCounter = function initSavethedateCounter() {
    	if ($(window).width() > 660)
		{
    		savethedateTotalDigit = 0;
        	$savethedateCounter.find('.digit').each(function() {
        		$(this).find('.face1a').append('<div class="c0a"> </div>');
        		$(this).find('.face1b').append('<div class="c0b"> </div>');
        		savethedateTotalDigit += 1;
        	});
        	
        	savethedateNum = "0000000";
        	setSavethedateCounter(3143098);
		}
    }
    
    var loopSavethedateCounter = function loopSavethedateCounter() {
    	var delayNum = rNumGenerator(10)*1000;
    	if (delayNum < 3000) delayNum = 3000;
    	setTimeout(function(){
    		setSavethedateCounter(savethedateNum + rNumGenerator(1000));
    	}, delayNum);
    }
    
    var setSavethedateCounter = function setSavethedateCounter(num) {
    	var oldDigits = (""+savethedateNum).split("");
    	var newDigits = (""+num).split("");
    	var newDigitsLen = newDigits.length;
    	var digitDiff = savethedateTotalDigit - newDigits.length;
    	
    	if (digitDiff > 0) for (var i = 0; i < digitDiff; i ++) newDigits.unshift("0");
    	
    	for (var j = 0; j < savethedateTotalDigit; j ++) if (newDigits[j] != oldDigits[j]) flipSavethedateCounter(j, Number(newDigits[j]));
    	savethedateNum = num;
    	loopSavethedateCounter();
    }
    
    var flipSavethedateCounter = function flipSavethedateCounter(digit, num) {
    	var $myDigit = $savethedateCounter.find('.digit').eq(digit);
    	$myDigit.find('.face2a').html('<div class="c'+num+'a"> </div>');
    	$myDigit.find('.face2b').html('<div class="c'+num+'b"> </div>');
    	
    	setTimeout(function(){
    		$myDigit.find('.face2a div').css('opacity', 0);
        	$myDigit.find('.face1b').animate({
        		'height': 0
        	}, 200, 'easeInCubic');
        	$myDigit.find('.face1b div').animate({
        		'opacity': 0
        	}, 150, 'easeInCubic');
        	$myDigit.find('.faceShadb').delay(50).animate({
        		'opacity': 0
        	}, 250, 'easeInCubic');
        	$myDigit.find('.face2a div').delay(200).animate({
        		'opacity': 1
        	}, 175, 'easeInCubic');
        	$myDigit.find('.face2a').delay(200).animate({
        		'height': 27
        	}, 200, 'easeOutQuint', function(){
        		$myDigit.find('.face1a').html('<div class="c'+num+'a"> </div>');
            	$myDigit.find('.face1b').html('<div class="c'+num+'b"> </div>');
            	$myDigit.find('.face2a div').css('opacity', 0);
            	$myDigit.find('.face2a').css('height', 0);
            	$myDigit.find('.face1b').css('height', '27px');
            	$myDigit.find('.face1b div').css('opacity', 1);
            	$myDigit.find('.faceShadb').css('opacity', 1);
        	});
        	
    	},digit*150);
    }
    
    var pushOtherBoxes = function pushOtherBoxes(id)
    {
    	//console.log("id: "+id);
    	rowIndex = Math.floor(id/sBoxCol);
    	if (id%sBoxCol != 0) rowIndex += 1;
    	
    	if (rowIndex == 1) pushAmountArrIndex = 2;
    	else if (rowIndex == 3) pushAmountArrIndex = 0;
    	else pushAmountArrIndex = 1;
    	
    	colIndex = id%sBoxCol;
    	if (colIndex <= 0) colIndex = 12;
    	
    	var myBoxId = 0;
    	isBoxOpened = true;
    	
    	sBoxShow(id);
    	
    	for (var i = 0; i < sBoxRow; i ++)
    	{
    		for (var j = 0; j < sBoxCol; j ++)
    		{
    			myBoxId += 1;
    			
    			if (rowIndex <= 1)
    			{
    				TweenMax.to($(".sBox.id"+(Number(id)+12)),.25, {top:Number($(".sBox.id"+(Number(id)+12)).find(".yPos").html())+160, delay:0, ease:Cubic.easeInOut, overwrite:0});
    				TweenMax.to($(".sBox.id"+(Number(id)+24)),.25, {top:Number($(".sBox.id"+(Number(id)+24)).find(".yPos").html())+160, delay:0, ease:Cubic.easeInOut, overwrite:0});
    			}
    			else if (rowIndex >= 3)
    			{
    				TweenMax.to($(".sBox.id"+(Number(id)-12)),.25, {top:Number($(".sBox.id"+(Number(id)-12)).find(".yPos").html())-160, delay:0, ease:Cubic.easeInOut, overwrite:0});
    				TweenMax.to($(".sBox.id"+(Number(id)-24)),.25, {top:Number($(".sBox.id"+(Number(id)-24)).find(".yPos").html())-160, delay:0, ease:Cubic.easeInOut, overwrite:0});
    			}
    			else
    			{
    				TweenMax.to($(".sBox.id"+(Number(id)-12)),.25, {top:Number($(".sBox.id"+(Number(id)-12)).find(".yPos").html())-80, delay:0, ease:Cubic.easeInOut, overwrite:0});
    				TweenMax.to($(".sBox.id"+(Number(id)+12)),.25, {top:Number($(".sBox.id"+(Number(id)+12)).find(".yPos").html())+80, delay:0, ease:Cubic.easeInOut, overwrite:0});
    			}
    			
    			if (colIndex <= 1)
    			{
    				if (myBoxId <= (Number(id)+Number(pushLAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())+160, delay:0, ease:Cubic.easeOut, overwrite:0});
    				if (myBoxId >= (Number(id)+Number(pushRAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())+160, delay:0, ease:Cubic.easeOut, overwrite:0});
    			}
    			else if (colIndex >= 12)
    			{
    				if (myBoxId <= (Number(id)+Number(pushLAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())-160, delay:0, ease:Cubic.easeOut, overwrite:0});
    				if (myBoxId >= (Number(id)+Number(pushRAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())-160, delay:0, ease:Cubic.easeOut, overwrite:0});
    			}
    			else
    			{
    				if (myBoxId <= (Number(id)+Number(pushLAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())-80, delay:0, ease:Cubic.easeOut, overwrite:0});
    				if (myBoxId >= (Number(id)+Number(pushRAmountArr[i+pushAmountArrIndex]))) TweenMax.to($(".sBox.id"+myBoxId),.25, {left:Number($(".sBox.id"+myBoxId).find(".xPos").html())+80, delay:0, ease:Cubic.easeOut, overwrite:0});
    			}
    			
    			//console.log("XXX: "+(Number(id)+Number(pushLAmountArr[i+pushAmountArrIndex]))+", "+rowIndex+", "+colIndex);
    		}
    	}
    	
    	setTimeout(function(){
    		prevBox = id;
    	},251);
    }
    
    var pullOtherBoxes = function pullOtherBoxes(id)
    {
    	if (isBoxOpened)
    	{
    		sBoxHide(prevBox);
    		var myBoxId = 0;
        	
        	for (var i = 0; i < sBoxRow; i ++)
        	{
        		for (var j = 0; j < sBoxCol; j ++)
        		{
        			myBoxId += 1;
        			$(".sBox.id"+myBoxId).delay(250).animate({
        				'left': $(".sBox.id"+myBoxId).find(".xPos").html(),
        				'top': $(".sBox.id"+myBoxId).find(".yPos").html()
        			}, 250, 'easeOutCubic');
        		}
        	}
        	
        	setTimeout(function(){
        		pushOtherBoxes(id);
        	},501);
    	}
    	else 
    	{
    		pushOtherBoxes(id);
    	}
    }
    
    var sBoxShow = function sBoxShow(id) {
    	var $myBox = $(".sBox.id"+Number(id));
    	$myBox.addClass("selected");
    	TweenMax.to($myBox.find(".sBoxFront"), .24, {rotationY: 90, delay:.1, ease:Cubic.easeIn, overwrite:0, onComplete:function(){
    		$myBox.find(".sBoxFront").css({
				"opacity": 0,
				"display": "none"
			});
    	}});
    	TweenMax.set($myBox.find(".sBoxBack"), {rotationY: -90, opacity: 0, display: "block", delay:.34});
    	TweenMax.set($myBox.find(".sBoxBack .sBoxBtn"), {opacity: 0, display: "block", delay:.34});
    	TweenMax.to($myBox.find(".sBoxBack .sBoxBtn"), .25, {opacity:1, delay:.35, ease:Cubic.easeOut, overwrite:0});
    	TweenMax.to($myBox.find(".sBoxBack"), .25, {rotationY: 0, delay:.35, ease:Cubic.easeOut, overwrite:0});
    	TweenMax.to($myBox.find(".sBoxBack"), 0, {opacity: 1, delay:.35, ease:Linear.easeNone, overwrite:0});
    	TweenMax.to($myBox,.25, {width:235, height:235, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	
    	if ($myBox.find(".yPos").html() <= 0) TweenMax.to($myBox,.25, {top:0, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	else if ($myBox.find(".yPos").html() >= 160) TweenMax.to($myBox,.25, {top:$myBox.find(".yPos").html()-160, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	else TweenMax.to($myBox,.25, {top:$myBox.find(".yPos").html()-80, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	
    	if ($myBox.find(".xPos").html() <= 0) TweenMax.to($myBox,.25, {left:0, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	else if ($myBox.find(".xPos").html() >= 880) TweenMax.to($myBox,.25, {left:$myBox.find(".xPos").html()-160, delay:.1, ease:Cubic.easeOut, overwrite:0});
    	else TweenMax.to($myBox,.25, {left:$myBox.find(".xPos").html()-80, delay:.1, ease:Cubic.easeOut, overwrite:0});
    };
    
    var sBoxHide = function sBoxHide(id) {
    	var $myBox = $(".sBox.id"+Number(id));
    	$myBox.removeClass("selected");
    	TweenMax.to($myBox.find(".sBoxBack .sBoxBtn"), .1, {opacity:0, delay:0, ease:Cubic.easeOut, overwrite:0});
		TweenMax.to($myBox.find(".sBoxBack"), .24, {rotationY: 90, delay:0, ease:Cubic.easeIn, overwrite:0, onComplete:function(){
			$myBox.find(".sBoxBack").css({
				"opacity": 0,
				"display": "none"
			});
		}});
    	TweenMax.set($myBox.find(".sBoxFront"), {rotationY: -90, opacity: 0, display: "block", delay:.24});
    	TweenMax.to($myBox.find(".sBoxFront"), .25, {rotationY: 0, delay:.25, ease:Cubic.easeOut, overwrite:0});
    	TweenMax.to($myBox.find(".sBoxFront"), 0, {opacity: 1, delay:.25, ease:Linear.easeNone, overwrite:0});
    	TweenMax.to($myBox,.25, {left:$myBox.find(".xPos").html(), top:$myBox.find(".yPos").html(), width:75, height:75, delay:0, ease:Cubic.easeIn, overwrite:0});
    };
    
    var autoPlayer;
    
    var autoPlayBoxes = function autoPlayBoxes() {
		var randID = getRandomArbitrary(1, 36);
		
		if (randID != prevBox) pullOtherBoxes(randID);
		else autoPlayBoxes();
    	
    	autoPlayer = setTimeout(function(){
    		clearTimeout(autoPlayer);
    		
    		randID = getRandomArbitrary(1, 36);
    		
    		if (randID != prevBox) pullOtherBoxes(randID);
    		else autoPlayBoxes();
    		
    		activateSBoxClick();
    	}, 1500);
    }
    
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
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
    
    var sBoxRandomHolder = [];
    
    var Shuffle = function Shuffle(o) {
    	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    };
    
    var setSBoxRandomArray = function setSBoxRandomArray() {
    	for(var i = 0; i < 4; i ++) sBoxRandomHolder.push(i);
    	Shuffle(sBoxRandomHolder);
    };
    
    var sburl = ["https://www.henrythehatterdetroit.com/", "http://www.laprov.com/", "http://bicyclehabitat.com/", "http://www.spoonsnspice.com/"]
    
    var initSBoxModule = function initSBoxModule () {
    	if ($(window).width() > 660)
		{
	    	setSBoxRandomArray();
		    
	    	var sBoxContent = "";
	    	var sBoxID = 0;
	    	
	    	for (var i = 0; i < sBoxRow; i ++)
	    	{
	    		for (var j = 0; j < sBoxCol; j ++)
	    		{
	    			var myRanID;
	    			if (sBoxRandomHolder.length > 0)
	    			{
	    				myRanID = sBoxRandomHolder[0];
	    				sBoxRandomHolder.splice(0, 1);
	    			}
	    			else
	    			{
	    				setSBoxRandomArray();
	    				myRanID = sBoxRandomHolder[0];
	    				sBoxRandomHolder.splice(0, 1);
	    			}
	    			
	    			sBoxID += 1; 
	    			sBoxContent += "<div class='sBox id" + sBoxID + "'>";
	    			sBoxContent += "<span class='xPos' style='display:none'>"+ 80*j +"</span><span class='yPos' style='display:none'>"+ 80*i +"</span><span class='rID' style='display:none'>"+ myRanID +"</span><span class='url' style='display:none'>"+ sburl[myRanID] +"</span><div class='sBoxBack'><img src='app/images/sBoxSC-"+myRanID+".png' /><div class='sBoxBtn'> </div></div><img class='sBoxFront' src='app/images/sBox-"+myRanID+".png' /><img class='preloadBoxFront' src='app/images/sBox-"+myRanID+"a.png' /></div>";
	    		}
	    	}
	    	
	    	$sBoxContainer.append(sBoxContent);
	    	sBoxID = 0; 
	    	
	    	for (var k = 0; k < sBoxRow; k ++)
	    	{
	    		for (var l = 0; l < sBoxCol; l ++)
	    		{
	    			sBoxID += 1; 
	    			$(".sBox.id" + sBoxID).css({
	        			"left": ($(".sBox.id" + sBoxID + " .xPos").html())+"px",
	        			"top": ($(".sBox.id" + sBoxID + " .yPos").html())+"px"
	        		});
	    		}
	    	}
		}
    }
    
    function getWidth() {
	    var xWidth = null;
	    
	    if(window.screen != null) xWidth = window.screen.availWidth;
	    if(window.innerWidth != null) xWidth = window.innerWidth;
	    if(document.body != null) xWidth = document.body.clientWidth;
	    
	    return xWidth;
    }
    
    function getHeight() {
    	var xHeight = null;
    	
    	if(window.screen != null) xHeight = window.screen.availHeight;
    	if(window.innerHeight != null) xHeight = window.innerHeight;
    	if(document.body != null) xHeight = document.body.clientHeight;
    	
    	return xHeight;
    }
    
    var activateSBoxClick = function activateSBoxClick() {
    	$(".sBox").on("click", function(e){
    		if ($(this).hasClass("selected"))
    		{
    			window.open($(this).find(".url").html(), "_blank");
    		}
    		else
    		{
    			clearTimeout(autoPlayer);
    			pullOtherBoxes($(this).attr('class').substring(7, $(this).attr('class').length));
    			$(this).find(".sBoxFront").attr("src", "app/images/sBox-"+$(this).find(".rID").html()+".png");
    		}
    	});
    }
    
    var isTouchScreen = function isTouchScreen () {
		return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	};
    
	winW = getWidth();
	var flipItemW = Math.round(winW*.82);
	var flipMarginW = Math.round(winW*.02);
	var flipIDW = flipItemW + (flipMarginW*2);
	var $flipShare = $(".res_Small div.about-container .section0 .flipContainer .flipShare");
	
	var $tItem = $(".res_Small div.about-container .section0 .flipContainer .flipster"),
		touchobj,
		tStartX = 0,
		tEndX = 0,
		tTotalW = 0,
		tTotalH = 0,
		tTotalItem = $(".res_Small div.about-container .section0 .flipContainer .flipster ul li").length,
		tCurID = 2,
		carouselShareCount = 0,
		carouselShareIDs = [];
	
	var setTCurX = function setTCurX(id) {
		return ((winW-flipIDW)*.5)-(flipIDW*id);
	}
	
	var removeA = function removeA(arr) {
	    var what, a = arguments, L = a.length, ax;
	    while (L > 1 && arr.length) {
	        what = a[--L];
	        while ((ax= arr.indexOf(what)) !== -1) {
	            arr.splice(ax, 1);
	        }
	    }
	    return arr;
	}
	
    function handlers() {
    	if ($(window).width() > 660)
		{
    		$("div.sbs-about-header .about-hdr-cnt img").on("click", function(){
        		$(this).css("margin-top", "30px");
        		$savethedateCounter.css("display", "block");
        		$("div.sbs-about-header").find("span.small-txt.preCount").css("display", "none");
        		$("div.sbs-about-header").find("span.small-txt.liveCount").css("display", "block");
        		initSavethedateCounter();
        	});
    		
    		$('a.addToCalBtn').on("mousedown touchstart", function () {
        		$("#modalBox").fadeIn(150);
        	});
        	
        	$(".subNav .subBtn").each(function(i){
    			$(".subNav .subBtn").eq(i).on("click", function(){
    				$("html, body").animate({
    					scrollTop: sectionY[i]+20
    				}, 500, "easeInOutCubic");
    			});
    		});
		}
    	else
    	{
    		$('div.about-hdr-cnt a.addToCalBtn').on("mousedown touchstart", function () {
        		window.open("webcal://prototype.shopsmall.com.php53-7.dfw1-2.websitetestlink.com/release4/sbs-cal.ics", "_self");
        	});
    		
    		$(".res_Small div.about-container .section0 .flipContainer .flipster ul li").each(function(i){
    			$(".res_Small div.about-container .section0 .flipContainer .flipster ul li").eq(i).css({
    				"width": flipItemW+"px",
    				"marginLeft": flipMarginW+"px",
    				"marginRight": flipMarginW+"px"
    			});
    			
    			$(".res_Small div.about-container .section0 .flipContainer .flipster ul li").eq(i).find(".btn").html("<img src='app/images/pIndex-Carousel-yesBtn.png' />");
    			
    			$(".res_Small div.about-container .section0 .flipContainer .flipster ul li").eq(i).find(".btn").css({
    				"width": ".85%",
    				"height": "auto",
    				"bottom": "6%",
    				"left": Math.round((flipIDW*i)+(flipItemW*.245))+"px"
    			});
    			
    			$(".res_Small div.about-container .section0 .flipContainer .flipster ul li").eq(i).find(".btn img").css({
    				"position": "relative"
    			});
    			
    			tTotalW = flipIDW*(i+1);
    		});
    		
    		$(".flipContainer .flipShare a.submit-btn").on("click", function(e){
    			e.stopPropagation();
    			e.preventDefault();
    			flipContainerOverlayOn(carouselShareCount);
    		});
    		
    		$(".res_Small div.about-container .section0 .shader .closeBtn").on("click", function(e){
    			e.stopPropagation();
    			e.preventDefault();
    			$(".res_Small div.about-container .section0 .shader").animate({'opacity': 0}, 300, 'easeInOutCubic', function(){
    				$(".res_Small div.about-container .section0 .shader").css({"display": "none"});
    				
    			});
    		});
    		
    		tTotalH = Math.round((flipItemW*210)/345);
    		
    		$tItem.find("ul").css({
    			"width": tTotalW+"px",
    			"left": setTCurX(tCurID)+"px"
    		});
    		$tItem.css("height", tTotalH+"px");
    		
    		if (isTouchScreen())
    		{
    			$tItem[0].addEventListener('touchstart', function(event) {
					event.preventDefault();
	            	touchobj = event.changedTouches[0];
	            	tStartX = touchobj.pageX;
				}, false);
				
    			$tItem[0].addEventListener("touchmove", function(event) {
					event.preventDefault();
					
					touchobj = event.touches[0];
					var difTX = tStartX - touchobj.pageX;
    				if (difTX >= 25 || difTX <= -25) $tItem.find("ul").css("left", (setTCurX(tCurID)+(touchobj.pageX-tStartX))+"px");
			        
				}, false);
				
    			$tItem[0].addEventListener("touchend", function(event) {
				    event.preventDefault();
				    touchobj = event.changedTouches[0];
				    tEndX = touchobj.pageX;
				    
				    var $myItem = $(".res_Small div.about-container .section0 .flipContainer .flipster ul li").eq(tCurID);
				    var difTX = tStartX - tEndX;
    				if (difTX < 25 && difTX > -25)
    				{
    					if ($myItem.find(".btn").hasClass("selected"))
        				{
    						$myItem.find(".btn").removeClass("selected");
    						$myItem.find(".btn").html("<img src='app/images/pIndex-Carousel-yesBtn.png' />");
        					if (carouselShareCount > 0) carouselShareCount -= 1;
        					removeA(carouselShareIDs, tCurID);
        				}
        				else
        				{
        					$myItem.find(".btn").addClass("selected");
        					$myItem.find(".btn").html("<img src='app/images/pIndex-Carousel-yesBtnSel.png' />");
        					if (carouselShareCount < 3) carouselShareCount += 1;
        					
        					if (carouselShareIDs.length > 2)
        					{
        						$tItem.find("ul li").eq(carouselShareIDs[2]).find(".btn").removeClass("selected");
        						carouselShareIDs.splice(-1,1);
        					}
        					
        					carouselShareIDs.unshift(tCurID);
        				}
    					
    					if (carouselShareCount == 3)
        				{
        					$flipShare.fadeIn(150);
        					$flipShare.find(".centerer div").fadeOut(150);
        					
        					flipContainerOverlayOn(carouselShareCount);
        				}
        				else if (carouselShareCount > 0)
        				{
        					$flipShare.fadeIn(150);
        					$flipShare.find(".centerer div").fadeIn(150);
        					$flipShare.find(".shareCount").html(3-carouselShareCount);
        				}
        				else
        				{
        					$flipShare.fadeOut(150);
        				}
    				}
    				else
    				{
    					if (tEndX-tStartX >= (flipIDW*.25)) tCurID -= 1;
					    if (tEndX-tStartX <= (-1*(flipIDW*.25))) tCurID += 1;
					    //$(".res_Small div.about-container .section0.mobileOnly span.small-txt").html(tCurID + ", " + (tEndX-tStartX) + ", " +(flipIDW*.25));
					    $tItem.find("ul").animate({
			    			"left": setTCurX(tCurID)+"px"
			    		}, 250, "easeInOutQuad", function(){
			    			if (tCurID >= (tTotalItem-2))
			    			{
			    				tCurID = 2;
			    				$tItem.find("ul").css("left", setTCurX(tCurID)+"px");
			    			}
			    			
			    			if (tCurID <= 1)
			    			{
			    				tCurID = (tTotalItem-3);
			    				$tItem.find("ul").css("left", setTCurX(tCurID)+"px");
			    			}
			    		});
    				}
				    
				}, false);
    		}
    		
    	}
    };

	return {
		init: init
	};

})();


//-----------------------------------------------------------------------------------------------

$( document ).ready(function() {
	SBS.view.init();
});
