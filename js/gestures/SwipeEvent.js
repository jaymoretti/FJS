function SwipeEvent(target, handler)
{
	this.threshold = 200;
	this.startX = 0;
	this.startY = 0;
	this.speed = 0;
	this.timeStamp = 0;
	this.type = "SwipeEvent";
		
	this.init = function()
	{

		this.initialize(target, handler);

		var scope = this;

		target.ontouchstart = function(e)
		{
			e.preventDefault();
			scope.startX = e.touches[0].pageX;
			scope.startY = e.touches[0].pageY;
			scope.timeStamp = e.timeStamp;
		};

		target.ontouchend = function(e)
		{
			e.preventDefault();
			var touch;

			if(e.touches.length > 0)
				touch = e.touches[0];
			else if(e.changedTouches.length > 0)
				touch = e.changedTouches[0];

			var direction = "UP";

			var endX  = touch.pageX;
			var endY  = touch.pageY;
			var vd = endY - scope.startY; // vertical distance
			var hd = endX - scope.startX; // horizontal distance
			var time  = e.timeStamp - scope.timeStamp;

			var axis = (vd < 0 ? vd * -1 : vd) > (hd < 0 ? hd * -1 : hd) ? 0 : 1; // 0 = vertical 1 = horizontal
			if(time > scope.threshold)
			{
				if(axis === 0)
				{
					if(vd < 0)
						direction = SwipeDirection.UP;
					else
						direction = SwipeDirection.DOWN;
				} else {
					if(hd < 0)
						direction = SwipeDirection.LEFT;
					else
						direction = SwipeDirection.RIGHT;
				}
				scope.fire({type:"SwypeEvent", direction: direction});
			} else {
				scope.fire({type:"TapEvent"});
			}
		};
	};

	this.init();
}

SwipeEvent.prototype = new Event();

SwipeDirection = {
	UP: "SwipeUp", DOWN: "SwipeDown", LEFT: "SwipeLeft", RIGHT: "SwipeRight"
};