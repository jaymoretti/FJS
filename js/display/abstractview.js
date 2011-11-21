function AbstractView()
{
	this.ready = false;

	this.initialize = function()
	{
		if(!this.ready)
		{
			this.ready = true;
		}
		this.animateIn();
	}
	// methods that should be overriten... boy, I wish this could be an Interface and that the views could implement it
	this.destroy = function()
	{
		
	}

	this.animateIn = function()
	{
		
	}

	this.animateOut = function()
	{
		
	}

	this.freeze = function()
	{
		
	}

	this.resume = function()
	{
		
	}
}