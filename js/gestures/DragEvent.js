function DragEvent(target, handler)
{
	this.threshold = 200;
	
	this.init = function()
	{
		this.initialize(target, handler);
		var scope = this;

		target.ontouchstart = function(e)
		{
			e.preventDefault();
			var touch = e.touches[0];
			scope.fire({type:GestureEvent.DRAG_START, x:touch.pageX, y: touch.pageY});
		};

		target.ontouchmove = function(e)
		{
			var touch;

			if(e.touches.length > 0)
				touch = e.touches[0];
			else if(e.changedTouches.length > 0)
				touch = e.changedTouches[0];

			scope.fire({type:GestureEvent.DRAG, x:touch.pageX, y: touch.pageY});
		};

		target.ontouchend = function(e)
		{
			var touch = e.touches[0];
			scope.fire({type:GestureEvent.DRAG_END});
		};
	};

	this.init();
}

DragEvent.prototype = new Event();