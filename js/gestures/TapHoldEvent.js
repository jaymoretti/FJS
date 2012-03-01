function TapHoldEvent(target, handler)
{
	this.threshold = 400;
	this.type = "TapHoldEvent";
	this.tap = null;
	
	this.init = function()
	{

		this.initialize(target, handler);
		var scope = this;

		target.ontouchstart = function(e, touch)
		{
			e.preventDefault();
			scope.tap = e;
		};

		target.ontouchend = function(e, touch)
		{
			e.preventDefault();
			if((e.timeStamp - scope.tap.timeStamp) >= scope.threshold )
				scope.fire({type:scope.type, posx:0, posy: 0});
		};
	};

	this.init();
}

TapHoldEvent.prototype = new Event();