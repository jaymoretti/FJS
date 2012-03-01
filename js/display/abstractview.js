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
	};

	this.preload = function()
	{
		var scope = this;

		$("#"+this.name).css({display: "none"});
		loadedCount = 0;
		loadedTotal = $("#"+this.name+' img').length;

		$("#"+this.name+' img').each(
			function(){
				$(this).load(function(){
					loadedCount++;
					if(loadedCount == loadedTotal)
						scope.loaded();
				});
			}
		);
	};

	this.loaded = function()
	{
		_application.preloader.hide();
		this.state = 1;
		$("#"+this.name).css({display: "block"});
	};

	// methods that should be overriten...
	this.destroy = function()
	{
		
	};

	this.animateIn = function()
	{
		
	};

	this.animateOut = function()
	{
		
	};

	this.freeze = function()
	{
		
	};

	this.resume = function()
	{
		
	};

	this.stop = function()
	{

	};

	this.reset = function()
	{

	};

	this.resume = function()
	{

	};
}