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
	log("ENTERING FILM");
}

Film.prototype.animateOut = function()
{
	log("LEAVING FILM");
	setTimeout(ViewManager.animationOutComplete, 500);
}