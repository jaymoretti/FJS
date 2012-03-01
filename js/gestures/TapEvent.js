function TapEvent(target, handler)
{
	this.threshold = 200;
	this.type = "TapEvent";
	this.taps = [];
	
	this.init = function()
	{

		this.initialize(target, handler);
		var scope = this;

		target.ontouchstart = function(e, touch)
		{
			e.preventDefault();
			scope.taps.push(e);
		};

		target.ontouchend = function(e, touch)
		{
			e.preventDefault();
			thisTouch = scope.taps[scope.taps.length-1];
			lastTouch = scope.taps[scope.taps.length-2];
			if((e.timeStamp - thisTouch.timeStamp) <= scope.threshold )
			{
				if(lastTouch!=undefined)
				{
					if((e.timeStamp - lastTouch.timeStamp) >= scope.threshold)
					{
						scope.fire({type:scope.type, posx:0, posy: 0});
					}
				} else {
					scope.fire({type:scope.type, posx:0, posy: 0});
				}
				
			}
		};
	};

	this.init();
}

TapEvent.prototype = new Event();