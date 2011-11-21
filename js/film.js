function Film()
{
	this.init = function()
	{
		this.name = "Film";
		this.initialize();
	}
}

Film.prototype = new AbstractView();

Film.prototype.animateIn = function()
{
	// fix content
	$(".meetthecast").css({display:"none"});
   	$(".content").animate({height:358});
   	
   	$(".challenge").css({display:"none"});
   	$(".joincta").css({display:"none"});
   	$(".blog").css({display:"none"});
   
   	$(".player").css({display:"block", opacity:0});
   	$(".player").animate({opacity:1},250);
   	
   	$(".videoinfo").css({display:"block", opacity:0});
   	$(".videoinfo").animate({opacity:1},250);
   
   	$(".comments").css({display:"block", opacity:0});
   	$(".comments").animate({opacity:1},250);
   
	// setup module
	$(".right_column").html("");
	$(".right_column").css({marginTop:80});
	$(".right_column").append(ViewManager.modules.videolib);
	ViewManager.modules.videolib.css({display:"block"});
	$(".right_column").append(ViewManager.modules.divedeeper);
	ViewManager.modules.divedeeper.css({display:"block"});
	$(".right_column").append(ViewManager.modules.helpbig);
	ViewManager.modules.helpbig.css({display:"block"});
	$(".right_column").fadeIn();
	log("ENTERING FILM");
}

Film.prototype.animateOut = function()
{
	$(".player").animate({opacity:0},250, function(){
		$(".player").css({display:"none"});
	});

	$(".comments").animate({opacity:0},250, function(){
		$(".comments").css({display:"none"});
	});

	$(".videoinfo").animate({opacity:0},250, function(){
		$(".videoinfo").css({display:"none"});
	})

	$(".right_column").fadeOut();
	log("LEAVING FILM");
	setTimeout(ViewManager.animationOutComplete, 500);
}