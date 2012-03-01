function Event()
{
	this.target = null;
	this.handler = null;

	this.initialize = function(target, handler)
	{
		this.target = target;
		this.handler = handler;
	};

	this.fire = function(event)
	{
		this.handler(event);
	};

	this.destroy = function()
	{

	};
}