function Blog()
{
	this.init = function()
	{
		this.name = "Blog";
		this.initialize();
	}
}


Blog.prototype = new AbstractView();
Blog.prototype.animateIn = function()
{
	$(".content").animate({height:0});
	$(".meetthecast").css({display:"block"});
	// setup module
	$(".right_column").html("");
	$(".right_column").css({marginTop:0});
	$(".right_column").append(ViewManager.modules.thefilm);
	ViewManager.modules.thefilm.css({display:"block"});
	$(".right_column").append(ViewManager.modules.helpsmall);
	ViewManager.modules.helpsmall.css({display:"block"});
	$(".right_column").append(ViewManager.modules.videolib);
	ViewManager.modules.videolib.css({display:"block"});

	$(".videoinfo").css({display:"none"});
	$(".joincta").css({display:"none"});
	$(".comments").css({display:"none"});

	$(".blog").css({display:"block", opacity:0});
	$(".blog").animate({opacity:1},250);

	$(".right_column").fadeIn();
	log("ENTERING Blog");
}

Blog.prototype.animateOut = function()
{
	$(".right_column").fadeOut();

	$(".blog").animate({opacity:0},250, function(){
		$(".blog").css({display:"none"});
	});

	log("LEAVING Blog");
	setTimeout(ViewManager.animationOutComplete, 500);
}