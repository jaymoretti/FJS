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
	log("ENTERING Challenge");
}

Challenge.prototype.animateOut = function()
{
	log("LEAVING Challenge");
	setTimeout(ViewManager.animationOutComplete, 500);
}
