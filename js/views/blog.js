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
	log("ENTERING Blog");
}

Blog.prototype.animateOut = function()
{
	log("LEAVING Blog");
	setTimeout(ViewManager.animationOutComplete, 500);
}