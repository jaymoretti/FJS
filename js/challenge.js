function Challenge()
{
	this.init = function()
	{
		this.name = "Challenge";
		this.initialize();
	}
}

Challenge.prototype = new AbstractView();

Challenge.prototype.animateIn = function()
{
	$(".meetthecast").css({display:"none"});
	$(".content").animate({height:358});
	
	$(".player").css({display:"none"});
	$(".videoinfo").css({display:"none"});
	$(".blog").css({display:"none"});

	$(".challenge").css({display:"block", opacity:0});
	$(".challenge").animate({opacity:1},250);
	
	$(".joincta").css({display:"block", opacity:0});
	$(".joincta").animate({opacity:1},250);

	$(".comments").css({display:"block", opacity:0});
	$(".comments").animate({opacity:1},250);
	

	// setup module
	$(".right_column").html("");
	$(".right_column").css({marginTop:0});
	$(".right_column").append(ViewManager.modules.thefilm);
	ViewManager.modules.thefilm.css({display:"block"});
	$(".right_column").append(ViewManager.modules.divedeeper);
	ViewManager.modules.divedeeper.css({display:"block"});
	$(".right_column").append(ViewManager.modules.videolib);
	ViewManager.modules.videolib.css({display:"block"});
	
	$(".right_column").fadeIn();
	log("ENTERING Challenge");
}

Challenge.prototype.animateOut = function()
{
	$(".challenge").animate({opacity:0},250, function(){
		$(".challenge").css({display:"none"});
	});

	$(".comments").animate({opacity:0},250, function(){
		$(".comments").css({display:"none"});
	});

	$(".joincta").animate({opacity:0},250, function(){
		$(".joincta").css({display:"none"});
	});

	$(".right_column").fadeOut();
	log("LEAVING Challenge");
	setTimeout(ViewManager.animationOutComplete, 500);
}
