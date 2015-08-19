/*  02/19 12:27 PM MST  */
// JavaScript Document
var businessNameErrors = [];
var yourInfoErrors = false;
var sharePlanErrors = false;
var sscounter = 1;
var factscounter = 1;
var numbersPattern = new RegExp('^[0-9]+$');
var zipCodePattern = new RegExp('^[0-9]{5}$');
var urlregex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:[Ww]{3}.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
var emailPattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
var businessNamePattern = new RegExp('^[\n\'a-zA-Z0-9&-_./@$#?!)(,;\" \\\\]{1,81}$');
var quoteStatus = false;
var quotesString;
var photoSelect = false;
var zip_code_selected;
var zip_code_default='ZIP CODE';
var phnoFirstBoxPattern = new RegExp('^[1-9][0-9]{2,3}$');
var phnoSecondBoxPattern = new RegExp('^[0-9]{3}$');
var phnoThirdBoxPattern = new RegExp('^[0-9]{4}$');
var fname='FIRST',lname='LAST',oname='ORGANIZATION NAME',bsname='BUSINESS NAME',otype='SELECT ORGANIZATION TYPE',other_name='PLEASE SPECIFY',cname='CITY',state='SELECT STATE',zcode='ZIP',email_sign='example@example.com',add1='ADDRESS LINE 1',add2='ADDRESS LINE 2 (OPTIONAL)',lbns='e.g., ABC Company',url_txt='http://example.com or www.example.com',plan_txt="e.g., I'm going to plan a block party on Small Business Saturday on Main Street to get people to come out and shop. There will be live music, free food, and other activities. I'll even invite the mayor to come make a speech.",adj_txt="e.g., Last year, I organized a community parade for Small Business Saturday. I asked different businesses and organizations to create small floats, and had free popcorn and cotton candy for everyone who came out on the day.";
/* For E1 Testing only - NEED TO REMOVE BELOW CODE ON NUMBER OF CLICKS REACHES THE LIMIT - Begin */
if (window.location.host == "dwww257.trcw.us.aexp.com") {
	$("div#hpregister").removeClass("blue-btn").addClass("gray-btn");
	$("div#hpregister a").attr("href","javascript:void(0)").unbind("click");
}
// Wait until the DOM has loaded before querying the document
$(document).ready(function () {
var subScribeURL = document.location.href.substring(document.location.href.lastIndexOf("/") + 1, document.location.href.length);
if((subScribeURL.indexOf("subscribe") != -1) || (subScribeURL == "signup") || (subScribeURL.indexOf("emailsubmit") != -1)){
	subScribe('https://www.americanexpress.com/us/small-business/shop-small/');
}
$('ul.webticker').show();
$('div#navpanel ul.homepg-subnav > li:first-child a').on("click",function(){
	$('div.nav-content-sec').slideToggle(1000);
	if($(window).width()<=660){
		$(this).children('span').toggleClass('hm_up');;
	}
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_MidnavReadMore') : null;
	console.log("rmaction_MidNavReadMore");
});	
$('div#homepg-container div.nav-content-sec a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_ExpandedReadMoreLink') : null;
	console.log("rmaction_ExpandedReadMore");
});
$('div#navpanel ul.homepg-subnav > li:first-child+li a').on("click",function(){	
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_MidnavWatchStory') : null;
	console.log("rmaction_MidnavWatchStory");
});	
$('div#navpanel ul.homepg-subnav > li:first-child+li+li a').on("click",function(){	
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_MidnavMarketingMaterials') : null;
	console.log("rmaction_MarketingMaterials");
});	
$('div#navpanel ul.homepg-subnav > li:first-child+li+li+li a').on("click",function(){	
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_MidnavMap') : null;
	console.log("rmaction_MidnavMap");
});
$('div#homepg-container div.section3 a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_Neighborhoods') : null;
	console.log("rmaction_Neighborhoods");
});
$('div#homepg-container div#homepg-video-sec a.download').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_VideoTranscript') : null;
	console.log("rmaction_VideoTranscript");
});
/*Rmactions for home page*/
/*Rmactions for Ambassador page*/
$('div#ambsdr-container div.header-section a.submit-btn').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_SignUpTop') : null;
	console.log("rmaction_SignUpTop");
});	
$('div#ambsdr-container div#navpanel ul.ambsdr-subnav > li a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_2013Ambassadors') : null;
	console.log("rmaction_2013Ambassadors");
});	
$('div#ambsdr-container div#ss-kit-desc  a.submit-btn').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_SignUpKitModule') : null;
	console.log("rmaction_SignUpKitModule");
});
/*Rmactions for Ambassador page*/
/*Rmactions for Ambassador-Thank You page*/
$('div#ambsdr-thankyou-container div.download-sec a.submit-btn').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_CalendarDLButton') : null;
	console.log("rmaction_CalendarDLButton");
});
$('div#ambsdr-thankyou-container div.see-champions-sec a.submit-btn').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_ChampionSeeListButton') : null;
	console.log("rmaction_ChampionSeeListButton");
});
/*Rmactions for Ambassador-Thank You page*/
/*Rmactions for Ambassador-Signup page*/
$('div#ambsdr-signUp-container div.become-leader p.sub-head-para2 a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_TermsLink') : null;
	console.log("rmaction_click_TermsLink");
});
$('div#ambsdr-signUp-container div.your-info-form div.rally_checkbox_terms_align p.checkbox-subhead a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PrivacyLink') : null;
	console.log("rmaction_PrivacyLink");
});
$('div#ambsdr-signUp-container div.ambsdr-signup-form div.signup-terms-download a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PrintSaveTerms') : null;
	console.log("rmaction_click_PrintSaveTerms");
});
$('div#ambsdr-signUp-container div.ambsdr-signup-form div.signup-faqs a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FAQLinkDL') : null;
	console.log("rmaction_click_FAQLinkDL");
});
/*Rmactions for Ambassador-Signup page*/
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
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PassportIcon') : null;
		console.log("rmaction_PassportIcon");
	}
	else if(cls=='familyday-kit'){
		$("div.ambsdr-container div.familyday-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-familyday.jpg", sizingMethod="scale")');		
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FamilyDayIcon') : null;
		console.log("rmaction_click_FamilyDayIcon");
	}
	else if(cls=='funrun-kit'){
		$("div.ambsdr-container div.funrun-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-fun-run.jpg", sizingMethod="scale")');	
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FunRunIcon') : null;
		console.log("rmaction_click_FunRunIcon");
	}
	else{
		$("div.ambsdr-container div.kick-offbreakfast-kit ").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-breakfast.jpg", sizingMethod="scale")');
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_BreakfastIcon') : null;
		console.log("rmaction_BreakfastIcon");
	}
});
$('div#ss-kit-desc p.para1 a,div.kit-desc  p.para1 a').on("click",function(){
	var olid=$(this).parents("div.kit-desc").attr('id');
	$('.'+olid+'-nav').show().animate({"top":"0"},2500);
	console.log(olid);
	if(olid=='ss-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_KitSeeHow') : null;
		console.log("rmaction_KitSeeHow");
		$('html, body').animate({
		scrollTop: ($('div#ss-kit-desc').offset().top)-550+'px'
	}, 1500);
	return false;
	}
	else if(olid=='passport-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PassportLearnMoreLink') : null;
		console.log("rmaction_PassportLearnMoreLink");
		$('html, body').animate({
		scrollTop: ($('div#EventGuide').offset().top)-100+'px'
		}, 1500);
	return false;
	}
	else if(olid=='familyday-kit-desc'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FamilydayKitSeeHow') : null;
			console.log("rmaction_FamilydayKitSeeHow");
			$('html, body').animate({
			scrollTop: ($('div#EventGuide').offset().top)-100+'px'
			}, 1500);
		return false;
		}
	else if(olid=='funrun-kit-desc'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FunrunKitSeeHow') : null;
			console.log("rmaction_FunrunKitSeeHow");
			$('html, body').animate({
			scrollTop: ($('div#EventGuide').offset().top)-100+'px'
			}, 1500);
		return false;
		}
	else if(olid=='kick-offbreakfast-kit-desc'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_kick-offbreakfastKitSeeHow') : null;
			console.log("rmaction_kick-offbreakfastKitSeeHow");
			$('html, body').animate({
			scrollTop: ($('div#EventGuide').offset().top)-100+'px'
			}, 1500);
		return false;
		}	
});
$('div.ambsdr-container div.nav-content-sec span.kit-layer-close').on("click",function(){
	var cls=$(this).parents("div.nav-content-sec").attr("class");
	$(this).parents("div.nav-content-sec").animate({"top":"600px"},2500,function(){
		$(this).hide();
	});
	if(cls=='nav-content-sec ss-kit-desc-nav'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_KitSeeHowClose') : null;
		console.log("rmaction_KitSeeHowClose");
	}
	else if(cls=='nav-content-sec passport-kit-desc-nav'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PassportSeeHowClose') : null;
		console.log("rmaction_PassportSeeHowClose");
	}	
	else if(cls=='nav-content-sec familyday-kit-desc-nav'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FamilydayKitSeeHowClose') : null;
		console.log("rmaction_FamilydayKitSeeHowClose");
	}
	else if(cls=='nav-content-sec funrun-kit-desc-nav'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FunrunKitSeeHowClose') : null;
		console.log("rmaction_FunrunKitSeeHowClose");
	}
	else{
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_kick-offbreakfastKitSeeHowClose') : null;
		console.log("rmaction_kick-offbreakfastKitSeeHowClose");
	}
});
$('div#ambsdr-container div.ambr-champion-sec a.submit-btn').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_SignUpBottom') : null;
	console.log("rmaction_click_SignUpBottom");
	if($(window).width() <=660){
		$(this).attr('href','javascript:void(0);');
		ambsdrSignup('http://www.pagemodo.com/2013-small-business-saturday?r=shopsmall');
	}
});
$('div.ambsdr-container div.hdr-desc a,div.ss-kit div.kit-desc div.inner-desc p.para3 a').on('click',function(){
	if($(window).width() <=660){
		$(this).attr('href','javascript:void(0);');
		ambsdrSignup('http://www.pagemodo.com/2013-small-business-saturday?r=shopsmall');
	}else{
		$(this).attr('href','https://www.americanexpress.com/us/small-business/shop-small/rally-signup');
	}
});
$('select#org-type').on("change",function(){
	$('div.dd-selected').text($(this).children(":selected").text());
	$('div.dd-selected').css("color","#4D4F53").css("opacity","0.5");
	if($('select#org-type').val()=="Other")	{
		$('div.othr-org-type').css("display","inline-block");
	}
	else {
	$('div.othr-org-type').css("display","none");
	}	
});
$('select#state-code-fld').on("change",function(){
	$('input#state-hidden-fld').val($(this).children(":selected").text());
	$('div.dd-selected-state').text($(this).children(":selected").text());
	$('div.dd-selected-state').css("color","#4D4F53").css("opacity","0.5");	
});
$("#org + label,#bs-owner+ label,#ind + label,#plan1 + label,#plan2 + label,#plan3 + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
$("#org:checked + label,#bs-owner:checked +label,#ind:checked +label,#plan1:checked + label,#plan2:checked + label,#plan3:checked + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
if ($("#org").is(':checked')) {
	$("div.org-checked").show();
	$("div.bs-checked").hide();
	$("div.url div.your-info-label label").text("Please provide the URL for your organization\'s website (optional)");
	$("div.ambsdr-signup-form div.your-info-terms").css("display","none");
	$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm that you have reviewed and agree to the above Terms of Participation and you certify that you are authorized to register for this program on behalf of your organization named above.");
} 
if ($("#bs-owner").is(':checked')) {
	$("div.org-checked").hide();
	$('div.bs-checked').show();
	$("div.url div.your-info-label label").text("Please provide the URL for your business\'s website (optional)");
	$("div.ambsdr-signup-form div.your-info-terms").css("display","none");
	$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm that you have reviewed and agree to the above Terms of Participation and you certify that you are authorized to register for this program on behalf of the business named above.");
}
if ($("#ind").is(':checked')) {
	$("div.org-checked,div.bs-checked").hide();
	$("div.url div.your-info-label label").text("Please provide URL for your business's/organization's website (Optional)");
	$("div.ambsdr-signup-form div.your-info-terms").css("display","block");
	$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm that you have reviewed and agree to the above Terms of Participation.");
}
$("#org").on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_OrganizationRadioButton') : null;
	console.log("click_OrganizationRadioButton");
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#bs-owner,#ind").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("div.org-checked").show();
		$("div.bs-checked").hide();
		$("div.url div.your-info-label label").text("Please provide the URL for your organization\'s website (optional)");
		$("div.ambsdr-signup-form div.your-info-terms").css("display","none");
		$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm you have reviewed and agree to the above Terms of Participation and you certify that you are authorized to register in this program on behalf of your organization named above.");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#bs-owner,#ind").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#bs-owner").on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_BusinessRadioButton') : null;
	console.log("click_BusinessRadioButton");
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#org,#ind").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("div.org-checked").hide();
		$('div.bs-checked').show();
		$("div.url div.your-info-label label").text("Please provide the URL for your business\'s website (optional)");
		$("div.ambsdr-signup-form div.your-info-terms").css("display","none");
		$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm that you have reviewed and agree to the above Terms of Participation and you certify that you are authorized to register for this program on behalf of the business named above.");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#org,#ind").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#ind").on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_IndividualRadioButton') : null;
	console.log("click_IndividualRadioButton");
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#bs-owner,#org").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("div.org-checked,div.bs-checked").hide();
		$("div.url div.your-info-label label").text("Please provide URL for your business's/organization's website (Optional)");
		$("div.ambsdr-signup-form div.your-info-terms").css("display","block");
		$('div.rallySignup_terms p.checbox_terms').text("By checking this box, you confirm that you have reviewed and agree to the above Terms of Participation.");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#bs-owner,#org").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#plan1").on("click",function(){
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#plan2,#plan3").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#plan2,#plan3").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#plan2").on("click",function(){
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#plan1,#plan3").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
	} else {
		$(this).next().css("background","https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#plan1,#plan3").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#plan3").on("click",function(){
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#plan1,#plan2").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#plan1,#plan2").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$(".ambsdr-signup-form div.add label span,.ambsdr-signup-form div.phno label span").on("mouseover", function () {
	$(this).parents('div.your-info-fld').find('div.tool-tip').show();
	$(".phno-tip").css("margin","24px 0 0 73px");
	$(".add-tip").css("margin","15px 172px");
});
$(".ambsdr-signup-form div.add label span,.ambsdr-signup-form div.phno label span").on("mouseout", function () {
	$(this).parents('div.your-info-fld').find('div.tool-tip').hide();
});
/* On select of ambassador from ambassador-list dropdown */
$('.ambsdr-list-container select#ambsdr-list').on("change",function(){
	$('div.dd-selected').text($(this).children(":selected").text());
	$('div.dd-selected').css("color","#000");
	if($('div.ambsrd-list').position().top==408 )
	{
		window.scrollTo(0,$($(this).children(":selected").val()).position().top-180);
	}
	else {
		window.scrollTo(0,$($(this).children(":selected").val()).position().top-80);
	}
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_DropdownList') : null;	
	console.log("rmaction_DropdownList");
});
/* To change the arrow image on click of ambassador-list dropdown */
if($(window).width() > 660){
	$("#ambsdr-list").click(function(evt) {
		var tgtclass = evt.target.className;
		if(tgtclass == 'dd-selected' || tgtclass == 'dd-arrow' || tgtclass == "sel-fld"){
			var imgpos = $('div.ambsrd-list div.dd-arrow').css("background-position");
			if(imgpos == '-486px -165px'){
				$('div.ambsrd-list div.dd-arrow').css("background-position","-486px -99px");
			}else if( imgpos == '-486px -99px'){ 
				$('div.ambsrd-list div.dd-arrow').css("background-position","-486px -165px");
			}
		}else { 
			$('div.ambsrd-list div.dd-arrow').css("background-position","-486px -99px");
		} 
	});	
}
else {
	$("#ambsdr-list").click(function(evt) {
		var tgtclass = evt.target.className;
		if(tgtclass == 'dd-selected' || tgtclass == 'dd-arrow' || tgtclass == "sel-fld"){
			var imgpos = $('div.ambsrd-list div.dd-arrow').css("background-position");
			if(imgpos == '-92px -107px'){
				$('div.ambsrd-list div.dd-arrow').css("background-position","-136px -107px");
			}else if( imgpos == '-136px -107px'){ 
				$('div.ambsrd-list div.dd-arrow').css("background-position","-92px -107px");
			}
		}else { 
			$('div.ambsrd-list div.dd-arrow').css("background-position","-92px -107px");
		} 
	});
}
$('div.mem-group div.ind-mem p').each(function(i){
	$(this).on("mouseover",function(){
		$(this).next().show();
	});
	$(this).on("mouseout",function(){
		$(this).next().hide();
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
/*Ambassador-list*/
$(window).on('scroll touchmove touchstart',function () { 
    /* To fix the dropdown position after the user scrolls: */
	var hdr_height = parseInt($('div.ambsdr-list-container div.header-section').height());
	if($(window).scrollTop() >= hdr_height){		
		$('div.ambsrd-list').addClass('fixed').removeClass('fluid');
	}
	else{
		$('div.ambsrd-list').removeClass('fixed').addClass('fluid');	
	}	       
});	
jQuery.fn.justtext = function() {
	return $(this).clone().children().remove().end().text();
};
sortList();
function sortList(){
	var st_divs = $('div[class="list-menu"]');
	st_divs.each(function(index){
	var vals = [],vals1=[];
	var lis = $(this).find('li');   
	$.each(lis,function(index){
		vals1.push($(this).html())
		text=$(this).justtext();
		text=text.replace(/^\s+|\s+$/gm,'');
		vals.push(text.toLowerCase()+'*_*'+index);
	});
	vals.sort();
	$.each(lis,function(index){
		  var i=vals[index].split('*_*')[1];
		  $(this).html(vals1[i]);
	});
});
splitList();	
}
function splitList(){   
	var width = $(window).width();
	var st_divs = $('div[class="list-menu"]');
	st_divs.each(function(index){	
		var $lis = $(this).find('li');
		var loop = 0;
		if(width > 660){
		 loop =  Math.ceil($lis.length/3);
		}else{
		 loop =  Math.ceil($lis.length/2);
		} 
			$ul1 = $("<span></span>");
			$ul2 = $("<span></span>");
			$ul3 = $("<span></span>");		
		if($lis.length == 1) {
			$ul2 = $("<span></span>");
			$ul3 = $("<span></span>");
		}
		if($lis.length == 2) {
			$ul3 = $("<span></span>");
		}
		$lis.each(function(index){  
			if(index<loop){ 
				$ul1 = $("<ul class='list-items'/>").append($lis.slice(0,loop ));
			}
			else if(index<loop*2){
				$ul2 = $("<ul class='list-items'/>").append($lis.slice(loop,loop*2 ));
			}
			else {
				if($(window).width() >660){  
				 $ul3 = $("<ul class='list-items'/>").append($lis.slice(loop*2,$lis.length )); 	
				}  
			}
		});
		if($(window).width() >660){
			$(this).html("<ul class='list-items'>"+$ul1.html()+"</ul>"+"<ul class='list-items'>"+$ul2.html()+"</ul>"+"<ul class='list-items'>"+$ul3.html()+"</ul>");     
		}else{
			$(this).html("<ul class='list-items'>"+$ul1.html()+"</ul>"+"<ul class='list-items'>"+$ul2.html()+"</ul>"); 
		}	
		setHeight(index)
	});	
}
function setHeight(index){
	var ind = index+1;
	var elements = $('#menu-'+ind+' .list-menu ul:first-child li');	
	for(var i=0;i<elements.length;i++){
		var h1 = $($('#menu-'+ind+' .list-menu ul:first-child li')[i]).height();
		var h2 = $($('#menu-'+ind+' .list-menu ul:first-child+ul li')[i]).height();
		var h3 =0;
		if($(window).width() >660){
			var h3 = $($('#menu-'+ind+' .list-menu ul:first-child+ul+ul li')[i]).height();
		}
		var netH = Math.max(h1,h2,h3);		
		if( h1!=0 && h2 !=0 && h3!=0){
			netH = Math.max(h1,h2,h3);			
		}
		else if (h1!=0 && h2!=0){
			netH = Math.max(h1,h2);
		}
		else {
			netH = h1;
		}
		$($('#menu-'+ind+' .list-menu ul:first-child li')[i]).css({'height':netH});
		$($('#menu-'+ind+' .list-menu ul:first-child+ul li')[i]).css({'height':netH});
		if($(window).width() >660)
			$($('#menu-'+ind+' .list-menu ul:first-child+ul+ul li')[i]).css({'height':netH});
			h1=h2=h3=0;
		}
}			
$('div.list-layout p.cta-text a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_ChampionSignUpLink') : null;
	console.log("rmaction_click_ChampionSignUpLink");
	if($(window).width() <=660){
		$(this).attr('href','javascript:void(0);');
		ambsdrSignup('http://www.pagemodo.com/2013-small-business-saturday?r=shopsmall');
	}
});
$('div.ambsdr-list-container div.bottom-info div.grid960 a').on("click",function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_ChampionSignUpButtonBottom') : null;
	console.log("rmaction_click_ChampionSignUpButtonBottom");
	if($(window).width() <=660){
		$(this).attr('href','javascript:void(0);');
		ambsdrSignup('http://www.pagemodo.com/2013-small-business-saturday?r=shopsmall');
	}
});
/*Ambassador-list-End*/
/*Tricker Function-BEGIN*/
(function($) {
    var globalSettings = new Array();
    var methods = {
	init: function(settings) { // THIS 
		settings = jQuery.extend({
		travelocity: 0.032,
		direction: 1,
		moving: true
	}, settings);
	globalSettings[jQuery(this).attr('id')] = settings;
	return this.each(function() {
	var $strip = jQuery(this);
	$strip.addClass("newsticker")
	var stripWidth = 0;
	var $mask = $strip.wrap("<div class='mask'></div>");
	$mask.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>")
	var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
	$strip.find("li").each(function(i) {
		stripWidth += jQuery(this, i).outerWidth(true);
	});
	$strip.width(stripWidth + 200); //20 used for ie9 fix                    
	function scrollnews(spazio, tempo) {
		if (settings.direction == 1) $strip.animate({
			left: '-=' + spazio
		}, tempo, "linear", function() {
			$strip.children().last().after($strip.children().first());
			var first = $strip.children().first();
			var width = first.outerWidth(true);
			var defTiming = width / settings.travelocity;
			//$strip.css("left", left);
			$strip.css("left", '0');
			scrollnews(width, defTiming);
		});
		else $strip.animate({
			right: '-=' + spazio
		}, tempo, "linear", function() {
			$strip.children().last().after($strip.children().first());
			var first = $strip.children().first();
			var width = first.outerWidth(true);
			var defTiming = width / settings.travelocity;
			//$strip.css("left", left);
			$strip.css("right", '0');
			scrollnews(width, defTiming);
		});
	}
	var first = $strip.children().first();
	var travel = first.outerWidth(true);
	var timing = travel / settings.travelocity;
	scrollnews(travel, timing);
	$strip.hover(function() {
		jQuery(this).stop();
	}, function() {
		if (globalSettings[jQuery(this).attr('id')].moving) {
			var offset = jQuery(this).offset();
			var first = $strip.children().first();
			var width = first.outerWidth(true);
			var residualSpace;
			if (settings.direction == 1) residualSpace = parseInt(jQuery(this).css('left').replace('px', '')) + width;
			else residualSpace = parseInt(jQuery(this).css('right').replace('px', '')) + width;
			var residualTime = residualSpace / settings.travelocity;
			scrollnews(residualSpace, residualTime);
		}
	});
});
},
stop: function() {
	if (globalSettings[jQuery(this).attr('id')].moving) {
		globalSettings[jQuery(this).attr('id')].moving = false;
		return this.each(function() {
			jQuery(this).stop();
		});
	}
},
cont: function() { // GOOD     
if (!(globalSettings[jQuery(this).attr('id')].moving)) {
	globalSettings[jQuery(this).attr('id')].moving = true;
	var settings = globalSettings[jQuery(this).attr('id')];
	return this.each(function() {
		var $strip = jQuery(this);
		function scrollnews(spazio, tempo) {
			if (settings.direction == 1) $strip.animate({
				left: '-=' + spazio
			}, tempo, "linear", function() {
				$strip.children().last().after($strip.children().first());
				var first = $strip.children().first();
				var width = first.outerWidth(true);
				var defTiming = width / settings.travelocity;
				//$strip.css("left", left);
				$strip.css("left", '0');
				scrollnews(width, defTiming);
			});
			else $strip.animate({
				right: '-=' + spazio
			}, tempo, "linear", function() {
				$strip.children().last().after($strip.children().first());
				var first = $strip.children().first();
				var width = first.outerWidth(true);
				var defTiming = width / settings.travelocity;
				//$strip.css("left", left);
				$strip.css("right", '0');
				scrollnews(width, defTiming);
			});
		}
		var offset = jQuery(this).offset();
		var first = $strip.children().first();
		var width = first.outerWidth(true);
		var residualSpace;
		if (settings.direction == 1) residualSpace = parseInt(jQuery(this).css('left').replace('px', '')) + width;
		else residualSpace = parseInt(jQuery(this).css('right').replace('px', '')) + width;
		var residualTime = residualSpace / settings.travelocity;
		scrollnews(residualSpace, residualTime);
	});
}
}
};
$.fn.webTicker = function(method) {
	// Method calling logic
	if (methods[method]) {
		return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	} else if (typeof method === 'object' || !method) {
		return methods.init.apply(this, arguments);
	} else {
		$.error('Method ' + method + ' does not exist on jQuery.webTicker');
	}
};
})(jQuery);
jQuery('.webticker').webTicker();
/*Tricker Function-End*/
$("div#customize-msgbox #zip-code").attr("pattern","[0-9]*");
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
	var ffversion=new Number(RegExp.$1);
	if (ffversion<24) {
		$("label.trig-file-input").on("click",function(){
			$("input#computer-photo").click();
		});
	}
}
$('#navpanel .homepg-subnav li a').click(function(){
	$('html, body').animate({
		scrollTop: ($( $(this).attr('href') ).offset().top-50+'px') 
	}, 1500);
	return false;
});
if ($(window).width() < 1024) {
	$('input, textarea').focus(function(){
		$("#nav-container").css({"position":"absolute","top":"0px !important","left":"0px !important"});			
	});		
	$('input, textarea').blur(function(){
		$("#nav-container").css({"position":"fixed","top":"0px !important","left":"0px !important"});			
	});												
}
$('input, textarea').focus(function(){
	$(window).bind("orientationchange", function () {
		$("#nav-container").css({"position":"absolute","top":"0px !important","left":"0px !important"});	
	});
});
$('input, textarea').blur(function(){
	$(window).bind("orientationchange", function () {
		$("#nav-container").css({"position":"fixed","top":"0px !important","left":"0px !important"});	
	});
});
$(window).bind("orientationchange", function () {	
	$("#nav-container").css({"position":"fixed","top":"0px !important","left":"0px !important"});	
});
var omnFirstcall=true;
$("a.fbTwit").on("click", function () {
	$("#share-tooltip").show();
	if(omnFirstcall){
		(typeof($iTagTracker)=='function' )? $iTagTracker('layertrack','ShareYourSupport') : null;
		omnFirstcall=false;
	}
});
$("span#share-tooltip span#share-close").on("click", function () {
	$("#share-tooltip").hide();
});
$("div#char-limit a").on("click tap",function(){
	$("div#some-examples").show();
});
$("div#close-examples-layer a.close-icon").on("click tap",function(){
	$("div#some-examples").hide();
});
$(".in-signup-close").on("click", function () {
	$(".why-tooltip").hide();
	$(this).parent().hide();		
});
$("div.step2-choices h2.step-subheader a").on("click",function(){
	$(this).next().show();
});
jQuery.fn.justtext = function() {return $(this).clone().children().remove().end().text();};

function checkURL(value) {
	if (urlregex.test(value)) {	return (true); }
	return (false);
}
$("div.sbs-homepg-header").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader( src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-homepage-neighborhood.jpg", sizingMethod="scale")');
$("div.homepg-container div.video-sec").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-homepage-video.jpg", sizingMethod="scale")');
$("div.homepg-container div.section1").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-homepage-business.jpg", sizingMethod="scale")');
$("div.homepg-container div.section2").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-homepage-local2.jpg", sizingMethod="scale")');
$("div.homepg-container div.section3").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-homepage-share.jpg", sizingMethod="scale")');
$("div.ambsdr-container div.header-section").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-hero.jpg", sizingMethod="scale")');	
$("div.ambsdr-container div.video-sec").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-video.jpg", sizingMethod="scale")');
$("div.ambsdr-container div.ss-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-bags.jpg", sizingMethod="scale")');	
$("div.ambsdr-container div.passport-kit").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-passport.jpg", sizingMethod="scale")');	
$("div.ambsdr-list-container div.header-section").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-sm-champion2.jpg", sizingMethod="scale")');	
$("div.ambsdr-signUp-container div.header-section ").css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/bg-ambassador-sm-champion.jpg", sizingMethod="scale")');	
$("#omnTrackID-homepage-div").click(function(){
	(typeof($iTagTracker)=='function' )? $iTagTracker('layertrack','Ambassador') : null;
});
if(window.location.href.indexOf("marketing-materials")!=-1 || window.location.href.indexOf("generatePdf")!=-1)	$("#submitForm input").css("color","#4D4F53");
if(window.location.href.indexOf("POPThankYou")!=-1){
	if($(window).width<660)	$(".menu-item-submenu").css("margin-top","-30%");
}
$(window).resize(function(){
	splitList();
	if((window.location.href.indexOf("rally")!=-1) && (window.location.href.indexOf("rally-signup")==-1)) {
		$(".amsdr-facts div").css("left", ($(window).width()/2)-($(".amsdr-facts div").width()/2) + "px");
	}
});
if((window.location.href.indexOf("rally")!=-1) && (window.location.href.indexOf("rally-signup")==-1)) {
	$(".amsdr-facts div").css("left", ($(window).width()/2)-($(".amsdr-facts div").width()/2) + "px");
}
$("#emailerr").html("");$("#stateErr").html("");$("#cityerr").html("");$("#posterDiv").addClass("zoomedin");$("#businesserr").html("");
$("#terms-agree-chkbx + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
$("#terms-agree-chkbx:checked + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
$("#terms-agree-chkbx").on("click",function(){
	if ($(this).is(':checked')) {
		$("#terms-agree-err").parent().hide();
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
	}
});
$('div.mem-group div.ind-mem input').each(function(){
	$(($(this).attr('id')) + "+ label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
	$(($(this).attr('id')) + ":checked + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
	$(this).on("click",function(){
		if ($(this).is(':checked')) {
			$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
		} else {
			$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
		}
	});
});
$("#display-agree-chkbx + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
$("#display-agree-chkbx:checked + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
$("#display-agree-chkbx").on("click",function(){
	if ($(this).is(':checked')) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
	}
});
$("#yourinfo-agree-chkbx + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
$("#yourinfo-agree-chkbx:checked + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
$("#yourinfo-agree-chkbx").on("click",function(){
	if ($(this).is(':checked')) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox-on.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-checkbox.png') no-repeat");
	}
});
$("#sboNo + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
$("#sboYes + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
$("#sboYes").on("click",function(){
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#sboNo").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#sboNo").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
$("#sboNo").on("click",function(){
	if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP /shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
		$("#sboYes").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP /shop-small/shared/images/btn-radio-blue.png') no-repeat");
	} else {
		$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP /shop-small/shared/images/btn-radio-blue.png') no-repeat");
		$("#sboYes").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP /shop-small/shared/images/btn-radio-blue-on.png') no-repeat").css("height","23px").css("width","23px");
	}
});
/* 2014 Release Changes */
function addErrorMsg(ele,msg,inval){
	$(ele).before("<span class='error-message'>"+msg+"</span>");
	$(ele).val(inval);
	$(ele).css({'border': '1px solid #e8603d','color':'#B4B4A6'});
}
function delErrorMsg(ele){
	$(ele).prev('.error-message').remove();
	$(ele).css({'border': '1px solid #D0D0D0'});
}
$("#ambsdr-form input#first-name-fld").focus(function(){
	if(($(this).val()).toLowerCase() == fname.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!(namePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase()==fname.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER YOUR FIRST NAME',fname);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#last-name-fld").focus(function(){
	if(($(this).val()).toLowerCase() == lname.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!(namePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase()== lname.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER YOUR LAST NAME',lname);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#org-name-fld").focus(function(){
	if(($(this).val()).toLowerCase() == oname.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!(businessNamePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase() == oname.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER THE NAME OF YOUR ORGANIZATION',oname);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#bs-name-fld").focus(function(){
	if(($(this).val()).toLowerCase() == bsname.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!(businessNamePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase() == bsname.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER THE NAME OF YOUR BUSINESS',bsname);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form select#org-type").blur(function(){
	delErrorMsg($('div.type-of-org div.your-info-label'));
	if((($(this).val()).toLowerCase() == otype.toLowerCase())){
		addErrorMsg($('div.type-of-org div.your-info-label'),'PLEASE SELECT YOUR ORGANIZATION TYPE')
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#othr-org-fld").focus(function(){
	if(($(this).val()).toLowerCase() == other_name.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if(($(this).val()=="") || (($(this).val()).toLowerCase() == other_name.toLowerCase())){
		addErrorMsg($(this),'PLEASE SPECIFY ORGANIZATION TYPE');
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#city-code-fld").focus(function(){
	if(($(this).val()).toLowerCase() == cname.toLowerCase()) $(this).val('');
	else $(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!cityValiddation($(this).val())) || ($(this).val()=="") || (($(this).val()).toLowerCase() == cname.toLowerCase())){
		addErrorMsg($(this),'ENTER CITY NAME',cname);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form select#state-code-fld").blur(function(){
	delErrorMsg($('div.select-state div.your-info-label'));
	if(($(this).val()).toLowerCase() == state.toLowerCase()){
		addErrorMsg($('div.select-state div.your-info-label'),'PLEASE SELECT STATE')
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#zip-code-fld").focus(function(){
	if(($(this).val()).toLowerCase() == zcode.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!zipCodePattern.test(($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase() == zcode.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER A VALID, 5-DIGIT ZIP CODE',zcode);
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#email-fld").focus(function(){
	if(($(this).val()).toLowerCase() == email_sign.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((!(emailPattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase()==email_sign.toLowerCase())){
		addErrorMsg($(this),'PLEASE ENTER A VALID EMAIL ADDRESS, E.G., EXAMPLE@EXAMPLE.COM',email_sign.toLowerCase());
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form input#con-email-fld").focus(function(){
	if($(this).val().toLowerCase() == email_sign.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if((($(this).val())!=$('#ambsdr-form input#email-fld').val()) || ($(this).val()=="") ||($(this).val().toLowerCase()== email_sign.toLowerCase())){
		addErrorMsg($(this),'YOUR EMAILS DO NOT MATCH',email_sign.toLowerCase());
		return false;
	}else $(this).css("color","#4D4F53");
});
$("#ambsdr-form textarea#plan-fld").focus(function(){
	if(($(this).val()).toLowerCase() == plan_txt.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	delErrorMsg($(this));
	if($(this).val()=='') $(this).val(plan_txt).css('color','#B4B4A6');
});	
$("#ambsdr-form textarea#adjective-fld").focus(function(){
	if(($(this).val()).toLowerCase() == adj_txt.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");
}).blur(function(){
	if($(this).val()=='') $(this).val(adj_txt).css('color','#B4B4A6');
	delErrorMsg($(this));
});
$("#ambsdr-form input.phno-fld").each(function() {
	var returnValue=true;
	$(this).focus(function(){
		if($(this).attr('id')=='phno1-code-fld'){
			if($(this).val() == 'XXX') $(this).val('');
			$(this).css("color","#4D4F53");
		}else if($(this).attr('id')=='phno2-code-fld'){
			if($(this).val() == 'XXX') $(this).val('');
			$(this).css("color","#4D4F53");
		}else{
			if($(this).val() == 'XXXX') $(this).val('');
			$(this).css("color","#4D4F53");
		}
	}).blur(function(){				
			$('input#phno1-code-fld').prev('.error-message').remove();
			$(this).css({'border': '1px solid #D0D0D0'});
			if($(this).attr('id')=='phno1-code-fld'){
			$('input#phno1-code-fld').prev('.error-message').remove();
			  if(!phnoFirstBoxPattern.test($(this).val()))	{ 
					$('input#phno1-code-fld').before("<span class='error-message'>PLEASE ENTER A VALID PHONE NUMBER</span>")
					$(this).css({'border': '1px solid #e8603d'});
					returnValue=false;
				}
			}
			else if($(this).attr('id')=='phno2-code-fld'){
				$('input#phno1-code-fld').prev('.error-message').remove();					
				if((!phnoSecondBoxPattern.test($(this).val()))){
					$('input#phno1-code-fld').before("<span class='error-message'>PLEASE ENTER A VALID PHONE NUMBER</span>")
					$(this).css({'border': '1px solid #e8603d'});
					returnValue=false;
					}
			}
			else {	
				$('input#phno1-code-fld').prev('.error-message').remove();							
				if(!phnoThirdBoxPattern.test($(this).val())){	
					$('input#phno1-code-fld').before("<span class='error-message'>PLEASE ENTER A VALID PHONE NUMBER</span>")
					$(this).css({'border': '1px solid #e8603d'});
					returnValue=false;
				}
			}
			$('input.phno-fld').each(function() {			
			if($(this).css('borderTopColor')=='rgb(232, 96, 61)'){													
					if($('div.phno span.error-message').text()!='Please enter a valid phone number'){
					$('input#phno1-code-fld').prev('.error-message').remove();
					$('input#phno1-code-fld').before("<span class='error-message'>PLEASE ENTER A VALID PHONE NUMBER</span>");
					returnValue=false;
					}
			}
		});
	});	
	if(returnValue==true){
		$('input#phno1-code-fld').prev('.error-message').remove();
	}
	return returnValue;
});
$('input#url-fld').focus(function(){
	if($(this).val() == 'http://example.com or www.example.com') $(this).val('');
	$(this).css("color","#4D4F53");	
}).blur(function(){
	if($(this).val()==""){
		$(this).val('http://example.com or www.example.com').css('color','#B4B4A6');
	}
	delErrorMsg($("input#url-fld"));	
});
$('input#add1-id-fld').focus(function(){
	if(($(this).val()).toLowerCase() == add1.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");	
}).blur(function(){
	if($(this).val()==""){
		$(this).val(add1).css('color','#B4B4A6');
	}
	delErrorMsg($("input#add1-id-fld"));	
});
$('input#add2-id-fld').focus(function(){
	if(($(this).val()).toLowerCase() == add2.toLowerCase()) $(this).val('');
	$(this).css("color","#4D4F53");	
}).blur(function(){
	if($(this).val()==""){
		$(this).val(add2).css('color','#B4B4A6');
	}
	delErrorMsg($("input#add2-id-fld"));	
});
$('input.business-name').each(function() {
	var count = 0;
	var returnValue=true;
	$(this).focus(function(){
		if(($(this).val()).toLowerCase() == lbns.toLowerCase()) $(this).val('');
		$(this).css("color","#4D4F53");	
	}).blur(function(){
		$('div.business-names-grp').prev('.error-message').remove();
		$(this).css({'border': '1px solid #D0D0D0'});			
		if((!(businessNamePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase() == lbns.toLowerCase())){				
			$('div.business-names-grp').before("<span class='error-message'>PLEASE ENTER 10 SMALL BUSINESSES</span>")
			$(this).val(lbns);
			$(this).css({'border': '1px solid #e8603d','color':'#B4B4A6'});
			returnValue=false;
		}
		$('input.business-name').each(function() {			
				if($(this).css('borderTopColor')=='rgb(232, 96, 61)'){													
						if($('div.section span.error-message').text()!='Please enter 10 small businesses'){
						$('div.business-names-grp').prev('.error-message').remove();
						$('div.business-names-grp').before("<span class='error-message'>PLEASE ENTER 10 SMALL BUSINESSES</span>");
						returnValue=false;
						}
				}
		});
	});	
	if(returnValue==true){
		$('div.business-names-grp').prev('.error-message').remove();
	}
	return returnValue;
});
$("#ambsdr-form #display-agree-chkbx").blur(function(){
	delErrorMsg($(this));
	$("#display-agree-chkbx + label").css("border","0");	
	if (!($("#display-agree-chkbx").is(":checked"))) {
		addErrorMsg($(this),'PLEASE AGREE TO THE TERMS OF PARTICIPATION')
		$("#display-agree-chkbx + label").css("border","1px solid #e8603d");
		$(this).val('no');
		return false;	
	}else $(this).val('yes');		
});	
$("#ambsdr-form #terms-agree-chkbx").blur(function(){
	delErrorMsg($(this));
	$("#terms-agree-chkbx + label").css("border","0");
	$("div.signup-terms").css("border","1px solid #CCCCCC");	
	if (!($("#terms-agree-chkbx").is(":checked"))) {
		addErrorMsg($(this),'PLEASE AGREE TO TERMS OF PARTICIPATION')
		$("#terms-agree-chkbx + label,div.signup-terms").css("border","1px solid #e8603d");
		$(this).val('no');
		return false;	
	}else $(this).val('yes');		
});
$("#ambsdr-form #yourinfo-agree-chkbx").blur(function(){
	if (!($("#yourinfo-agree-chkbx").is(":checked"))) {
		$("#yourinfo-agree-chkbx").val('no');			
	}else {
		$("#yourinfo-agree-chkbx").val('yes');
	}
});
$("#ambsdr-form .submit-btn,.mobile-submit-btn").on("click", function () {
	var inputError = false;	
	var itag_siteerror_msg = "";
	$("#terms-agree-chkbx + label").css("border","0");
	$("#ambsdr-form").find('span.error-message').remove();
	/* for submit2014 */
	if(($("input#first-name-fld").val()).toLowerCase() == fname.toLowerCase()) $("first-name-fld").val('');
	if((!(namePattern.test($('input#first-name-fld').val()))) || ($('input#first-name-fld').val()=="") ||(($('input#first-name-fld').val()).toLowerCase()==fname.toLowerCase())){
		inputError = true;
		addErrorMsg($("input#first-name-fld"),"PLEASE ENTER YOUR FIRST NAME");
		if($("input#first-name-fld").val() == '') $("input#first-name-fld").val(fname);
		itag_siteerror_msg = "invalidfirstname";
	} else {
		delErrorMsg("input#first-name-fld");
	}
	if(($("input#last-name-fld").val()).toLowerCase == lname.toLowerCase()) $("input#last-name-fld").val('');
	if((!(namePattern.test($('input#last-name-fld').val()))) || ($('input#last-name-fld').val()=="") ||(($('input#last-name-fld').val()).toLowerCase()==lname.toLowerCase())){
		inputError = true;
		addErrorMsg($("input#last-name-fld"),"PLEASE ENTER YOUR LAST NAME");
		if($("input#last-name-fld").val() == '') $("input#last-name-fld").val(lname);
	} else {
		delErrorMsg("input#last-name-fld");
	}
	if ($("#org").is(':checked')) {
		if(($("input#org-name-fld").val()).toLowerCase() == oname.toLowerCase()) $("input#org-name-fld").val('');
		if((!(businessNamePattern.test($("input#org-name-fld").val()))) || ($("input#org-name-fld").val()=="") ||(($("input#org-name-fld").val()).toLowerCase() == oname.toLowerCase())){
			inputError = true;
			addErrorMsg($('input#org-name-fld'),'PLEASE ENTER THE NAME OF YOUR ORGANIZATION');
			if(($("input#org-name-fld").val()=="")) $("input#org-name-fld").val(oname);
			itag_siteerror_msg = "invalidorgname";
		} else {
			delErrorMsg("input#org-name-fld");
		}
		if((($('div.dd-selected').text()).toLowerCase() == otype.toLowerCase())){
			inputError = true;		
			addErrorMsg($('div.type-of-org div.your-info-label'),'PLEASE SELECT YOUR ORGANIZATION TYPE');
		} else {
			delErrorMsg($('div.type-of-org div.your-info-label'));
		}
		if((($('div.dd-selected').text()).toLowerCase() == 'other')){
			if(($('#ambsdr-form input#othr-org-fld').val()=="") || (($('#ambsdr-form input#othr-org-fld').val()).toLowerCase() == other_name.toLowerCase())){
				inputError = true;		
				addErrorMsg($('#ambsdr-form input#othr-org-fld'),'PLEASE SELECT YOUR ORGANIZATION TYPE');
			} else {
				delErrorMsg($('div.type-of-org div.your-info-label'));
			}
		}
	}else if($("#bs-owner").is(':checked')){
		if(($("input#bs-name-fld").val()).toLowerCase() == bsname.toLowerCase()) $("input#bs-name-fld").val('');
		if((!(businessNamePattern.test($("input#bs-name-fld").val()))) || ($("input#bs-name-fld").val()=="") ||(($("input#bs-name-fld").val()).toLowerCase() == bsname.toLowerCase())){
			inputError = true;
			addErrorMsg($('input#bs-name-fld'),'PLEASE ENTER THE NAME OF YOUR BUSINESS');
			if(($("input#bs-name-fld").val()=="")) $("input#bs-name-fld").val(bsname);
			itag_siteerror_msg = "invalidbsname";
		} else {
			delErrorMsg("input#bs-name-fld");
		}
	}
	if($("input#add1-id-fld").val()=="" ||
		($("input#add1-id-fld").val()).toLowerCase()== add1.toLowerCase() ||
		!(($("input#add1-id-fld").val().indexOf("<") == -1) &&
		($("input#add1-id-fld").val().indexOf(">") == -1) &&
		($("input#add1-id-fld").val().indexOf("&gt") == -1) &&
		($("input#add1-id-fld").val().indexOf("&lt") == -1) &&
		($("input#add1-id-fld").val().indexOf("&#") == -1))) {
			inputError = true;
			addErrorMsg($("input#add1-id-fld"),'PLEASE ENTER VALID ADDRESS');
			if(($("input#add1-id-fld").val()=="")) $("input#add1-id-fld").val(add1);
			
	} else {
		delErrorMsg($("input#add1-id-fld"));
	}
	if(!(($("input#add2-id-fld").val().indexOf("<") == -1) &&
			($("input#add2-id-fld").val().indexOf(">") == -1) &&
			($("input#add2-id-fld").val().indexOf("&gt") == -1) &&
			($("input#add2-id-fld").val().indexOf("&lt") == -1) &&
			($("input#add2-id-fld").val().indexOf("&#") == -1))) {
				inputError = true;
				addErrorMsg($("input#add2-id-fld"),'PLEASE ENTER VALID ADDRESS');
	} else {
		delErrorMsg($("input#add2-id-fld"));
	} 
	if(($("#ambsdr-form input#city-code-fld").val()).toLowerCase() == cname.toLowerCase()) $("#ambsdr-form input#city-code-fld").val('');
	if((!cityValiddation($("#ambsdr-form input#city-code-fld").val())) || ($("#ambsdr-form input#city-code-fld").val()=="") || (($("#ambsdr-form input#city-code-fld").val()).toLowerCase() == cname.toLowerCase())){
		inputError = true;
		addErrorMsg($("input#city-code-fld"),'PLEASE ENTER CITY');
		if(($("input#city-code-fld").val()=="")) $("input#city-code-fld").val(cname);
		itag_siteerror_msg = "invalidcity";			
	} else {
		delErrorMsg("input#city-code-fld");
	}
	if((($(".dd-selected-state").text()).toLowerCase() == state.toLowerCase())){
		inputError = true;		
		addErrorMsg($('div.select-state div.your-info-label'),'PLEASE SELECT STATE')
		itag_siteerror_msg = "invalidStatetypee";
	} else {
		delErrorMsg($('div.select-state div.your-info-label'));
	}	
	if(($("#ambsdr-form input#zip-code-fld").val()).toLowerCase() == zcode.toLowerCase()) $("#ambsdr-form input#zip-code-fld").val('');
	if((!zipCodePattern.test(($("#ambsdr-form input#zip-code-fld").val()))) || ($("#ambsdr-form input#zip-code-fld").val()=="") ||(($("#ambsdr-form input#zip-code-fld").val()).toLowerCase() == zcode.toLowerCase())){
		inputError = true;		
		addErrorMsg($('input#zip-code-fld'),'PLEASE ENTER A VALID, 5-DIGIT ZIP CODE');
		if(($("input#zip-code-fld").val()=="")) $("input#zip-code-fld").val(zcode);	
		itag_siteerror_msg = "invalidzipcode";
	}else{
		delErrorMsg($('input#zip-code-fld'));
	}
	$("#ambsdr-form input.phno-fld").each(function() {
	if(!((phnoFirstBoxPattern.test($('input#phno1-code-fld').val())) && (phnoSecondBoxPattern.test($('input#phno2-code-fld').val())) && (phnoThirdBoxPattern.test($('input#phno3-code-fld').val())))){
		inputError = true;				
		if($('div.phno span.error-message').text()!='PLEASE ENTER A VALID PHONE NUMBER'){
			$('input#phno1-code-fld').prev('.error-message').remove();
			$('input#phno1-code-fld').before("<span class='error-message'>PLEASE ENTER A VALID PHONE NUMBER</span>")
		}	
		itag_siteerror_msg = "invalidPhonetypee";
		} 
		if(!phnoThirdBoxPattern.test($('input#phno3-code-fld').val())){
			$('input#phno3-code-fld').css({'border': '1px solid #e8603d'});
		}
		if(!phnoFirstBoxPattern.test($('input#phno1-code-fld').val())){
			$('input#phno1-code-fld').css({'border': '1px solid #e8603d'});
		}
		if(!phnoSecondBoxPattern.test($('input#phno2-code-fld').val())){
			$('input#phno2-code-fld').css({'border': '1px solid #e8603d'});
		}
	});
	if(($("#ambsdr-form input#email-fld").val()).toLowerCase() == email_sign.toLowerCase()) $("#ambsdr-form input#email-fld").val('');
	if((!(emailPattern.test($("#ambsdr-form input#email-fld").val()))) || ($("#ambsdr-form input#email-fld").val()=="") ||(($("#ambsdr-form input#email-fld").val()).toLowerCase()==email_sign.toLowerCase())) {
		inputError = true;	
		addErrorMsg($('input#email-fld'),'PLEASE ENTER A VALID EMAIL ADDRESS, E.G., EXAMPLE@EXAMPLE.COM');
		if(($("input#email-fld").val()=="")) $("input#email-fld").val(email_sign);	
		
	} else {
		delErrorMsg($("#ambsdr-form input#email-fld"));
	}
	if(($("#ambsdr-form input#con-email-fld").val()).toLowerCase() == email_sign.toLowerCase()) $("#ambsdr-form input#con-email-fld").val('');
	if((($("#ambsdr-form input#con-email-fld").val())!=$('#ambsdr-form input#email-fld').val()) || ($("#ambsdr-form input#con-email-fld").val()=="") ||($("#ambsdr-form input#con-email-fld").val().toLowerCase()== email_sign.toLowerCase())) {
		inputError = true;	
		addErrorMsg($("#ambsdr-form input#con-email-fld"),'YOUR EMAILS DO NOT MATCH');
		if(($("input#con-email-fld").val()=="")) $("input#con-email-fld").val(email_sign);
	} else {
		delErrorMsg($("#ambsdr-form input#con-email-fld"));
	}
	if(($('input#url-fld').val()!='http://example.com or www.example.com') && !urlregex.test($('input#url-fld').val())){
		inputError = true;
		addErrorMsg($('input#url-fld'),"PLEASE ENTER A VALID URL, E.G., _WWW.EXAMPLE.COM ");
	}else{
		delErrorMsg($("input#url-fld"));
	}
	$('input.business-name').each(function() {
		if((!(businessNamePattern.test($(this).val()))) || ($(this).val()=="") ||(($(this).val()).toLowerCase() == lbns.toLowerCase())){	
			inputError = true;				
			if($('div.section span.error-message').text()!='Please enter 10 small businesses'){
				$('div.business-names-grp').prev('.error-message').remove();
				$('div.business-names-grp').before("<span class='error-message'>PLEASE ENTER 10 SMALL BUSINESSES</span>");
			}	
			$(this).css({'border': '1px solid #e8603d'});
		}else{
			$('div.business-names-grp').prev('.error-message').remove();
		}
	});
	var ch=$("textarea#plan-fld").val().replace(/\s+/g,"");
	if (($("textarea#plan-fld").val()).toLowerCase() !=  plan_txt.toLowerCase()	&& ch.length <=2000 &&($("textarea#plan-fld").val().indexOf("<") == -1) && ($("textarea#plan-fld").val().indexOf(">") == -1) && ($("textarea#plan-fld").val().indexOf("&gt") == -1) && ($("textarea#plan-fld").val().indexOf("&lt") == -1) && ($("textarea#plan-fld").val().indexOf("&#") == -1)){
		delErrorMsg($("textarea#plan-fld"));
	} else {
		inputError = true;
		if(ch.length >2000){
			addErrorMsg($("textarea#plan-fld"),'DESCRIPTION OF YOUR PLAN SHOULD NOT EXCEED 2000 CHARACTERS',$("textarea#plan-fld").val());
		}else{
			addErrorMsg($("textarea#plan-fld"),'PLEASE ENTER A VALID DESCRIPTION OF YOUR PLAN',$("textarea#plan-fld").val());
		}
	}
	if ((($("#ambsdr-form textarea#adjective-fld").val()).toLowerCase() != adj_txt.toLowerCase()) && (($("#ambsdr-form textarea#adjective-fld").val().length > 255) || ($("#ambsdr-form textarea#adjective-fld").val().indexOf("<") != -1) || ($("#ambsdr-form textarea#adjective-fld").val().indexOf(">") != -1) || ($("#ambsdr-form textarea#adjective-fld").val().indexOf("&gt") != -1) || ($("#ambsdr-form textarea#adjective-fld").val().indexOf("&lt") != -1) || ($("#ambsdr-form textarea#adjective-fld").val().indexOf("&#") != -1))){
		inputError = true;
		addErrorMsg($("#ambsdr-form textarea#adjective-fld"),'ENTER VALID PLAN ACTIVITIES');				
	} else {
		delErrorMsg($("#ambsdr-form textarea#adjective-fld"));
	} 
	if (!($("#display-agree-chkbx").is(":checked"))) {
		$("#display-agree-chkbx + label").css("border","1px solid red");
		$("#display-agree-chkbx + label").css("border","1.5px solid red\9");
		addErrorMsg($('#display-agree-chkbx'),"PLEASE AGREE TO THE TERMS OF PARTICIPATION");
		inputError = true;	
	}
	if (!($("#terms-agree-chkbx").is(":checked"))) {
		$("#terms-agree-chkbx + label").css("border","1px solid red");
		$("#terms-agree-chkbx + label").css("border","1.5px solid red\9");
		addErrorMsg($('#terms-agree-chkbx'),"PLEASE AGREE TO TERMS OF PARTICIPATION");
		inputError = true;	
		itag_siteerror_msg = "termsnotchecked";
	}
	if(inputError) {	
		if (! ($(window).width() >= 768 && $(window).width() <= 1024)) {
			$('.error-message').first().focus();										
		}				
		 $('html, body').animate({scrollTop: $('.error-message').first().parent().offset().top-85+'px'}, 300);
		return false;	
	} else {
		$('.defaultOptionalValue').each(function() {				
			$(this).val(" ");										
		});
		$("#ambsdr-form").submit();
		return true;
	}		
});
/* for submit2014 */
/* 2014 Release Changes */
var namePattern = new RegExp('^[a-zA-Z. ]{1,16}$');
var sbsCodePattern = new RegExp('^[\a-zA-Z0-9]{1,15}$');
var cityPattern = new RegExp('^[a-zA-Z\'&-; ]+$');
$('input,textarea,select :selected').each(function() {
	if (!$(this).data('defaultValue')) {
		$(this).data('defaultValue', $(this).val());
	}
});
var email_focus = function() {
	if ($(this).val() == $(this).data('defaultValue')) {
		$(this).val('');
		$(this).css("color","#4D4F53");
	}
}
var email_blur = function(){
	if ($(this).val() == '') {
		$(this).val($(this).data('defaultValue'));
		$(this).css("color","#B4B4A6");
	} else {
		$(this).css("color","#4D4F53");
	}
}
$("#emailForm .subscribe-submit .submit-btn").on("click", function () {
	$("#emailForm").find('.showError').removeClass('showError');	
	$("#emailForm").find('.inputError').removeClass('inputError');
	$('ul.form-errors,ul.form-errors li').hide();
	var subscribeSubmitInputError = false;
	var itag_siteerror_msg = "";
	if (!isValidinput($('input#email-fld'),emailPattern,$('.subscribe-form-errors li#email-err'))) {
		subscribeSubmitInputError = true;	
		itag_siteerror_msg = "invalidemailformat";
	}
	if ((($("#sboYes").is(":checked")) && ($("#sboYes").val() != "yes")) ||
		(($("#sboNo").is(":checked")) && ($("#sboNo").val() != "no"))) {
			return false;
	}
	if(subscribeSubmitInputError) {	
		$('.showError').each(function() {				
			$(this).show();
			$(this).parent("ul").show();					
		});	
		
		$('.inputError').each(function() {				
			$(this).val($(this).data('defaultValue'));										
		});	
		
		var itag_siteerror ="US:ShopSmall:" +itag_siteerror_msg;
		if (! ($(window).width() >= 768 && $(window).width() <= 1024)) {
			$('.inputError').first().focus();										
		}
		
		$('html, body').animate({scrollTop: $('.showError').first().parent().offset().top-85+'px'}, 300);
		return false;
	} else {
		$("div#nav-container").css({
			"position":"fixed",
			"top":"0px !important",
			"left":"0px !important"
		});
		$("#emailForm").attr("action","emailsubmit");
		$("#emailForm").submit();
	}
});
$("form#ambsdr-form textarea#plan-fld").on('keyup', function(e) {
        var words = this.value.match(/\S+/g).length;
       if (words >= 250) {
				// Split the string on first 200 words and rejoin on spaces
				var trimmed = $(this).val().split(/\s+/, 250).join(" ");
				// Add a space at the end to keep new typing making new words
				$(this).val(trimmed + " ");
				$("div.rally_textArea1 span#char-count").text("250 Max").css("color","#EE5C31");
       }
        else {
           $("div.rally_textArea1 span#char-count").text(250-words);
        }
});
function isValidinput(input,pattern,errorMsg) {
	if ((input.val() != input.data('defaultValue')) && (pattern.test(input.val()))){
		return true;
	} else {
		input.addClass('inputError');
		errorMsg.addClass('showError');
		return false;				
	}
}
function isValidOptionalinput(input,pattern,errorMsg) {
	if ((input.val() != input.data('defaultValue')) && (!(pattern.test(input.val())))){
		input.addClass('inputError');			
		errorMsg.addClass('showError');
		return false;				
	} else {
		input.addClass('defaultOptionalValue');
		return true;
	}
}	
function isValidTextArea(input,errorMsg) {
	if ((input.val() != input.data('defaultValue')) && (input.val().length <= 255) &&
		(input.val().indexOf("<") == -1) && (input.val().indexOf(">") == -1) && (input.val().indexOf("&gt") == -1) && (input.val().indexOf("&lt") == -1) && (input.val().indexOf("&#") == -1)){
		return true;
	} else {
		input.addClass('inputError');			
		errorMsg.addClass('showError');
		return false;				
	}
}
function isValidOptionalTextArea(input,errorMsg) {
	if ((input.val() != input.data('defaultValue')) && ((input.val().length > 255) ||
	(input.val().indexOf("<") != -1) || (input.val().indexOf(">") != -1) || (input.val().indexOf("&gt") != -1) || (input.val().indexOf("&lt") != -1) || (input.val().indexOf("&#") != -1)))
	{
		input.addClass('inputError');				
		errorMsg.addClass('showError');
		return false;				
	} else {
		input.addClass('defaultOptionalValue');
		return true;
	} 
}
});
function unloadPopupBox() {
	$("#partner-layer").fadeOut("slow");
	$("#partner-layer").css({
		"display": "none"
	});
	$("#layer").css({
		"opacity": "1",
		"filter": "alpha(opacity=100)",
		"display": "none"
	});
}
function downloadPDF(fileURL) {
	window.location.href = fileURL;
}
function populatenameTxt(id) {
	$("#nameTxt").html($("#" + id).val());
}
function populatecityTxt(id) {
	$("#cityTxt").html($("#" + id).val());
}
function populatestateTxt(id) {
	var optionVal = document.getElementById(id);
	$("#stateTxt").html(", " + $('#State option:selected').val());
	if ($('#State option:selected').html() == "Select State") {
		$("#stateTxt").html("");
	}
}
function businessValiddation(businesstxt) {
	var bnameFlag = "";
	if(businesstxt == "Business Name") bnameFlag = "";
	else bnameFlag = businesstxt;
	var businessValidation = /[^\'a-z0-9 A-Z&-.]/g;
	if (bnameFlag == '') {
		$(".marketing-errors").show();
		$("#emailerr").parent().hide();
		$("#businesserr").html("Please enter a business name.");
		flag = false;
		$("#businesserr").focus();
	} else if (bnameFlag.match(businessValidation)) {
		$(".marketing-errors").show();
		$("#emailerr").parent().hide();
		$("#businesserr").html("Please enter a valid business name.");
		flag = false;
		$("#businesserr").focus();
	} else {
		$("#businesserr").html("");
		$("#businesserr").hide();
		flag = true;
	}
	return flag;
}
function cityValiddation(citytxt) {
	var city = "";
	if(citytxt == "CITY") city = "";
	else city = citytxt; 
	var cityValidation = /^[a-zA-Z\'&-; ]+$/;
	if (!city.match(cityValidation) || city == null) {
		$(".marketing-errors").show();
		$("#emailerr").parent().hide();
		$("#cityerr").html("Please enter a valid City name.");
		flag = false;
		$("#cityerr").focus();
	} else {
		$("#cityerr").html("");
		$("#cityerr").hide();
		flag = true;
	}
	return flag;
}
function statevalidation(stateTxt) {
alert(stateTxt);
	if (stateTxt == 'SELECT STATE') stateTxt = '';
	if (stateTxt == '') {
		$(".marketing-errors").show();
		$("#emailerr").parent().hide();
		$("#stateErr").html("Please choose a State.");
		$("#stateErr").focus();
		flag = false;
	} else {
		$("#stateErr").html("");
		$("#stateErr").hide();
		flag = true;
	}
	return flag;
}
function checkEmail() {
	var email = $('#emailTxt');
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!filter.test(email.val())) {
		$("#emailerr").html("Please enter a valid email address.");
		email.focus();
		flag = false;
	} else {
		$("#emailerr").html("");
		flag = true;
	}
	return flag;
}
function getResponse(url) {
	window.location.href = url;
	setTimeout('submitPDFForm()', 3000);
}
function submitPDFForm() {
	$("#generatePdfForm").submit();
}
function marketingmaterialsClick(url) {
	window.location.href = url;
}
function submitForm() {
}
function modalPlayer(youTubePath,transcript,vidTitle) {
	vidTitle = vidTitle.replace(/\s/g, '');
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_VideoStart') : null;
	console.log('click_VideoStart');
	var windowSizeLink = $(window).width();
	$('.video-sec-content').hide();
	var mask_html = '<div class="video-overlay" style="display:none"><span></span></div>';
	$('.video-sec').append(mask_html);
	var modal_player_html = '<iframe src="' + youTubePath + '" frameborder="0" allowfullscreen></iframe>';
	$('.video-sec').addClass('video-section-play');
	$('.video-section-play').append(modal_player_html);	
	$('.video-overlay').show();
	$('.video-overlay span').click(function(e) {
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_VideoComplete') : null;
		console.log('click_VideoComplete');
		e.preventDefault;
		$('.video-section-play iframe, .video-overlay').remove();
		$('.video-sec-content').show();
		$('.video-section').removeClass('video-section-play');
	});
}
function downloadPDF(exiturl,linkId,language) {
	console.log(linkId);
	if(linkId=='passport-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PassportDL') : null;
		console.log("rmaction_PassportDL");
	}	
	else if(linkId=='familyday-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FamilyDayLearnMoreButton') : null;
		console.log("rmaction_FamilyDayLearnMoreButton");
	}	
	else if(linkId=='funrun-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FunRunLearnMoreButton') : null;
		console.log("rmaction_FunRunLearnMoreButton");
	}
	else if(linkId=='kick-offbreakfast-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_KickoffBreakfastLearnMoreButto') : null;
		console.log("click_KickoffBreakfastLearnMoreButto");
	}	
	var download_pdf = '<div class="modal-video-player pdf-layer" style="display: block"><p class="close-modal"><a title="close" class="close-modal-player"></a></p><div class="download-text1">By clicking \'I agree\' below, you acknowledge and agree that American Express is granting you a limited right to use these materials on an "AS IS" basis. You also acknowledge that we may terminate your right to use these materials if you (i) alter them in any way (except in the case of templates where certain alterations are specifically intended), or (ii) use them inappropriately, in a manner inconsistent with the values of American Express or the Shop Small<sup>&reg;</sup> Movement, or contrary to our express direction.</div><div class="blue-btn btn-medium"><a title="I Agree" class="modal-continue-btn" target="_blank">I Agree</a></div></div><div class="modal-overlay" style="display:none"></div>';
	$('body').append(download_pdf);
	var curr_height = $(window).scrollTop() + 100;
	$('.modal-video-player').css({'top':curr_height}).show();
	$('.modal-overlay').show();
	$('.modal-video-player .modal-continue-btn').click(function(e) {
		$('.modal-video-player .modal-continue-btn').attr("href",exiturl);
		$('.modal-video-player, .modal-overlay').remove();
	});
	$('.modal-video-player .close-modal-player').click(function(e) {	
	if(linkId=='passport-kit-desc'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_PassportDLClose') : null;
		console.log("click_PassportDLClose");
	}	
	else if(linkId=='familyday-kit-desc'){
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FamilyDayLearnMoreClose') : null;
	console.log("rmaction_FamilyDayLearnMoreClose");
		}	
		else if(linkId=='funrun-kit-desc'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_FunRunLearnMoreClose') : null;
			console.log("rmaction_FunRunLearnMoreClose");
		}
		else if(linkId=='kick-offbreakfast-kit-desc'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_KickoffBreakfastLearnMoreClose') : null;
			console.log("rmaction_KickoffBreakfastLearnMoreClose");
		}	
		e.preventDefault;
		$('.modal-video-player, .modal-overlay').remove();
	});
}
function subScribe(wurl, language) {
	if (window.location.host == "dwww257.trcw.us.aexp.com") {
		wurl = "https://dwww257.trcw.us.aexp.com/sbs/jsp/subscribeForm.jsp";	
	} else if(window.location.host == "qwww.americanexpress.com"){
		wurl = "https://qwww.americanexpress.com/us/small-business/shop-small/jsp/subscribeForm.jsp";
	} else if(window.location.host == "www.americanexpress.com"){
		wurl = "https://www.americanexpress.com/us/small-business/shop-small/jsp/subscribeForm.jsp";
	}
	(typeof($iTagTracker)=='function' )? $iTagTracker('layertrack','Subscription') : null;
	console.log("rmaction_OverlayStart");
    $.ajax({
		type: "get",
		cache: false,
		url: wurl,
		beforeSend: function(){
			var besubScribe_html = "<div class='modal-video-player sub-layer' style='display: none'> <div id='neigh-loading'></div></div><div class='modal-overlay' style='display:none'></div>";
			$('body').append(besubScribe_html);
			var curr_height = $(window).scrollTop() + 80;
			$('.modal-video-player').css({'top':curr_height}).show();
			$('.modal-overlay').show();
		},
		error: function () {
			alert("error");
			$('.modal-video-player, .modal-overlay').remove();
		},
		success: function (data) {
			$('.modal-video-player, .modal-overlay').remove();
			var subScribe_html = "<div class='modal-video-player sub-layer' style='display: none'> <p class='close-modal'> <a title='Close' class='close-modal-player'></a></p>"+data+"</div><div class='modal-overlay' style='display:none'></div>";
			$('body').append(subScribe_html);
			var curr_height = $(window).scrollTop() + 80;
			$('.modal-video-player').css({'top':curr_height}).show();
			$('.modal-overlay').show();
			function email_valid(ele){
				$(ele).prev('.error-message').remove();
				$(ele).css({'border': '1px solid #D0D0D0'});
				if((!(emailPattern.test($(ele).val()))) || ($(ele).val()=="") ||($(ele).val()=='example@example.com')){
					$(ele).before("<span class='error-message'>Please Enter Valid Email</span>")
					.css({'border': '1px solid #e8603d'})
					return false;
				}
			}	
			$('div.sub-layer div.email-label input#sub-email-fld').focus(function() {
				if ($(this).val() == 'example@example.com') {
					$(this).val('');
					$(this).css("color","#4D4F53");
				}
			}).blur(function(){
				email_valid($(this));   
			});
			$("div.sub-layer div.subscribe_radio_align p span").on("mouseover", function () {
				if($(window).width()<=660){
					$(this).parents('div.subscribe_radio_align').find('div.tool-tip.mobile_cnt').show();
				}else{
					$(this).parents('div.subscribe_radio_align').find('div.tool-tip.desktop_cnt').show();
				}
				(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_AreYouSBO') : null;
				console.log("click_AreYouSBO");
			});
			$("div.sub-layer div.subscribe_radio_align p span").on("mouseout", function () {
				$(this).parents('div.subscribe_radio_align').find('div.tool-tip').hide();
			});
			$("div.modal-video-player.sub-layer").on('click',function(){
				$('div.subscribe_radio_align div.tool-tip').hide();	
			})
			$("#sboNo + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat");
			$("#sboYes + label").css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
			$("#sboYes").on("click",function(){
				if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
					$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat");
					$("#sboNo").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
				} else {
					$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
					$("#sboNo").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat");
				}
			});
			$("#sboNo").on("click",function(){
				if ($(this).next().css("background-image").indexOf("btn-radio-blue")!=-1) {
					$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat");
					$("#sboYes").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
				} else {
					$(this).next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue.png') no-repeat");
					$("#sboYes").next().css("background","url('https://icm.aexp-static.com/Internet/OPENHP/shop-small/shared/images/btn-radio-blue-on.png') no-repeat");
				}
			});
			$('.modal-video-player .modal-continue-btn').click(function(e) { 									
				$('div.sub-layer div.email-label input#sub-email-fld').prev('.error-message').remove();
				if((!(emailPattern.test($('div.sub-layer div.email-label input#sub-email-fld').val()))) || ($('div.sub-layer div.email-label input#sub-email-fld').val()=="") ||($('div.sub-layer div.email-label input#sub-email-fld').val()=='example@example.com')){
					$('div.sub-layer div.email-label input#sub-email-fld').before("<span class='error-message'>Please Enter Valid Email</span>").css({'border': '1px solid #e8603d'}).focus();
					return false;
				}else{
					$('div.sub-layer div.email-label input#sub-email-fld').prev('.error-message').remove();
					$('div.sub-layer div.email-label input#sub-email-fld').css({'border': '1px solid #D0D0D0'});
				}
				subThankyou();
				$('.sub-layer').remove();
			});
			$('div.sub-layer a.close-modal-player,div.sub-cont a.close-modal-player').click(function(e) { 
			var cls=$(this).parent().attr('id');
			if(cls=='sub-form'){
				(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_Cancel') : null;
				console.log('click_Cancel');
			}else{
				(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_CloseXicon') : null;
				console.log('click_X');
			}
			e.preventDefault; $('.modal-video-player, .modal-overlay').remove(); });
		}
	});
} 
function subThankyou(){
	var action = $('form#sub-form').attr('action');	
	var wurl = "";
	if (window.location.host == "dwww257.trcw.us.aexp.com") {
		wurl = "https://dwww257.trcw.us.aexp.com/sbs/" + action;
	} else if(window.location.host == "qwww.americanexpress.com"){
		wurl = "https://qwww.americanexpress.com/us/small-business/shop-small/"+ action;
	} else if(window.location.host == "www.americanexpress.com"){
		wurl = "https://www.americanexpress.com/us/small-business/shop-small/"+ action;
	}
	//var wurl = document.location.href.substring(0, document.location.href.lastIndexOf("/") + 1)+action;
	/* (typeof($iTagTracker)=='function' )? $iTagTracker('layertrack','SubscriptionThankYou') : null;
	console.log('OverlayThankYou'); */
	jQuery.ajax({
		url: wurl,
		method: 'GET',
		data: $('#sub-form').serialize()
	}).done(function (response) {
		$('body').append(response);
		var curr_height = $(window).scrollTop() + 100;
		$('.thank-you-layer').css({'top':curr_height}).show();
		$('.modal-overlay').show();
		$('.thank-you-layer .close-modal-player,.thank-you-layer a.modal-cancel-btn').click(function(e) { 
		var cls=$(this).attr("class");
		if(cls=='modal-cancel-btn'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_Close') : null;
		console.log('click_Close');
		}
		else{
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_CloseXTY') : null;
		console.log('click_CloseXTY');
		}
		e.preventDefault; $('.thank-you-layer, .modal-overlay').remove(); });
	}).fail(function () {
		alert("error");
		$('.modal-video-player, .modal-overlay').remove();
	});	
} 
function desk_eventGuide(exiturl, language) {
	(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_EventGuideLink') : null;
	console.log('click_EventGuideLink');
	var eventGuide_html = "<div class='modal-video-player desk-event-layer' style='display: none'> <p class='close-modal'> <a title='Close' class='close-modal-player'></a></p>"+$('div.ambsdr-signUp-container div.event-guide-cont').html()+"</div><div class='modal-overlay' style='display:none'></div>";
	$('body').append(eventGuide_html);
	var curr_height = $(window).scrollTop() + 80;
	$('.modal-video-player').css({'top':curr_height}).show();
	$('.modal-overlay').show();
	$('.modal-video-player .close-modal-player,.modal-overlay').click(function(e) { 
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_EventGuideOverlayClose') : null;
		console.log('click_EventGuideOverlayClose');
		e.preventDefault; $('.modal-video-player, .modal-overlay').remove(); 
	});
}
function eventGuide(exiturl, kitId){	
	var guide_html = "<div class='modal-video-player event-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Make this event happen in your neighborhood</h2><p>Thank you for wanting to create this event in your community. Unfortunately, you cannot download the files directly to your mobile device. Click the button below and email yourself the link to download this Event Guide.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=Download%20your%20Small%20Business%20Saturday%20Event%20Guide&body=Celebrate Small Business Saturday&reg; with an event in your neighborhood. Download the Event Guide on desktop: https://www.americanexpress.com/us/small-business/shop-small/rally/#EventGuide' class='open-button blue modal-continue-btn guide-emaillink'>EMAIL LINK TO DOWNLOAD</a></div></div><div class='modal-overlay' style='display:none'></div>";
	if(kitId=='kit1'){
	guide_html = "<div class='modal-video-player event-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Make this event happen in your neighborhood</h2><p>Thank you for wanting to create this event in your community. Unfortunately, you cannot download the files directly to your mobile device. Click the button below and email yourself the link to download this Event Guide.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=Download%20your%20Small%20Business%20Saturday%20Event%20Guide&body=Celebrate Small Business Saturday&reg; with an event in your neighborhood. Download the Passport Event Guide on desktop: https://www.americanexpress.com/us/small-business/shop-small/rally/#EventGuide' class='open-button blue modal-continue-btn guide-emaillink'>EMAIL LINK TO DOWNLOAD</a></div></div><div class='modal-overlay' style='display:none'></div>";
	}
	else if(kitId=='kit2'){
	guide_html = "<div class='modal-video-player event-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Make this event happen in your neighborhood</h2><p>Thank you for wanting to create this event in your community. Unfortunately, you cannot download the files directly to your mobile device. Click the button below and email yourself the link to download this Event Guide.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=Download%20your%20Small%20Business%20Saturday%20Event%20Guide&body=Celebrate Small Business Saturday&reg; with an event in your neighborhood. Download the Family Day Event Guide on desktop: https://www.americanexpress.com/us/small-business/shop-small/rally/#EventGuide' class='open-button blue modal-continue-btn guide-emaillink'>EMAIL LINK TO DOWNLOAD</a></div></div><div class='modal-overlay' style='display:none'></div>";
	}
	else if(kitId=='kit3'){
	guide_html = "<div class='modal-video-player event-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Make this event happen in your neighborhood</h2><p>Thank you for wanting to create this event in your community. Unfortunately, you cannot download the files directly to your mobile device. Click the button below and email yourself the link to download this Event Guide.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=Download%20your%20Small%20Business%20Saturday%20Event%20Guide&body=Celebrate Small Business Saturday&reg; with an event in your neighborhood. Download the Fun Run Event Guide on desktop: https://www.americanexpress.com/us/small-business/shop-small/rally/#EventGuide' class='open-button blue modal-continue-btn guide-emaillink'>EMAIL LINK TO DOWNLOAD</a></div></div><div class='modal-overlay' style='display:none'></div>";
	}
	else if(kitId=='kit4'){
	guide_html = "<div class='modal-video-player event-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Make this event happen in your neighborhood</h2><p>Thank you for wanting to create this event in your community. Unfortunately, you cannot download the files directly to your mobile device. Click the button below and email yourself the link to download this Event Guide.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=Download%20your%20Small%20Business%20Saturday%20Event%20Guide&body=Celebrate Small Business Saturday&reg; with an event in your neighborhood. Download the Kick-Off Breakfast Event Guide on desktop: https://www.americanexpress.com/us/small-business/shop-small/rally/#EventGuide' class='open-button blue modal-continue-btn guide-emaillink'>EMAIL LINK TO DOWNLOAD</a></div></div><div class='modal-overlay' style='display:none'></div>";
	}
	$('body').append(guide_html);
	var curr_height = $(window).scrollTop() + 100;
	$('.event-layer').css({'top':curr_height}).show();
	$('.modal-overlay').show();
	$('.guide-emaillink').click(function(e){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_GuideDLEmailButton') : null;
		console.log('click_GuideDLEmailButton');
	});
	$('.event-layer .close-modal-player,.event-layer a.link').click(function(e) { 
	if($(this).attr("class")=='link'){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_GuideDLCancel') : null;
		console.log('click_GuideDLCancel');		
	}else{	
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_GuideDLExit') : null;
		console.log('click_GuideDLExit');	
	}
	e.preventDefault; $('.event-layer, .modal-overlay').remove(); });
}
function ambsdrSignup(exiturl, language){
	(typeof($iTagTracker)=='function' )? $iTagTracker('layertrack','SignUpOverlay') : null;
	console.log('SignUpOverlay');
	var signup_html = "<div class='modal-video-player signup-layer' style='display: none'><p class='close-modal'><a title='Close' class='close-modal-player'></a></p><div class='layer-cont-sec'><h2>Sign Up to be a neighborhood Champion</h2><p>Thank you for wanting to make an impact in your community as a Neighborhood Champion. Unfortunately, you cannot fill out the application directly on your mobile device. You can visit the <a class='desktoplink' href='https://www.americanexpress.com/us/small-business/shop-small/rally-signup'>desktop version</a> of the site to sign up, or click the button below and email yourself a link to the Neighborhood Champion form.</p><a class='link' href='javascript:void(0)' title='Close' class='close-modal-player'>Cancel</a><a href='mailto:&nbsp;?subject=SIGN%20UP%20TO%20BE%20A%20NEIGHBORHOOD%20CHAMPION &body=Become a Neighborhood Champion and help make an impact in the place you call home. Sign up on desktop. https://www.americanexpress.com/us/small-business/shop-small/rally-signup' class='open-button blue modal-continue-btn signup-emaillink'>EMAIL LINK TO SIGN UP</a></div></div><div class='modal-overlay' style='display:none'></div>";
	$('body').append(signup_html);
	var curr_height = $(window).scrollTop() + 100;
	$('.signup-layer').css({'top':curr_height}).show();
	$('.modal-overlay').show();
	$('.signup-emaillink').click(function(e){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_EmailButton') : null;
		console.log('click_EmailButton');
	});
	$('.desktoplink').click(function(e){
		(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_DesktopLink') : null;
		console.log('click_DesktopLink');
	});
	$('.signup-layer .close-modal-player,.signup-layer a.link').click(function(e) { 
		if($(this).attr("class")=='link'){
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_CancelLink') : null;
			console.log('click_CancelLink');	
		}else{
			(typeof($iTagTracker)=='function' )? $iTagTracker('rmaction','click_OverlayExit') : null;
			console.log('click_OverlayExit');	
		}
		e.preventDefault; $('.signup-layer, .modal-overlay').remove(); 
	});
}	
function resgetstarted() {
	if (document.getElementById("resYes").checked == true) {
		$("a#marketingMaterial1").attr("href","javascript:void(0)");
		window.open("https://www209.americanexpress.com/merchant/marketing-data/services/shopsmall/","_blank","");
	} else if (document.getElementById("resNo").checked == true) {
		$("a#marketingMaterial1").attr("href","marketing-materials-signup?linknav=us-open-shopsmall-resources-getstarted");
	}
}