require(["events/Event"], function(a)
	{
		require(
			[
				"gestures/TapEvent",
				"gestures/DoubleTapEvent",
				"gestures/SwipeEvent",
				"gestures/DragEvent",
				"gestures/TapHoldEvent"
			], function(b){});
	});

function GestureManager()
{
	this.eventList = [];

	this.addEventListener = function(target, eventName, handler)
	{
		var t;
		
		if(typeof target === "string")
			t = this.getTarget(target);
		else if(typeof target === "object")
			t = target[0];
		
		if(t!==null)
			this.eventList[target.id] = new window[eventName](t, handler);
	};

	this.removeEventListener = function(target, eventName, handler)
	{
		target = this.getTarget(target);

		if(target!==null)
		{
			this.eventList[target.id].destroy();
			delete this.eventList[target.id];
		}
	};

	this.dispatchEvent = function(target, eventName, options)
	{
		// prototype of a function that is supposed to dispatch a custom gesture
	};

	this.getTarget = function(t)
	{
		var identifier = t[0];
		var name = t.substr(1);
		var element;
		
		if(identifier=="#")
		{
			element = document.getElementById(name);
		} else if(identifier==".")
		{
			log("Cannot attach an event to a classname");
			return null;
		}

		return element;
	};

	this.clean = function()
	{
		for(var e in this.eventList)
		{
			e.destroy();
		}

		this.eventList = [];
	};
}

GestureManager.prototype = {
	
};

GestureEvent = {
	PINCH : "PinchEvent",
	SWIPE : "SwipeEvent",
	DRAG  : "DragEvent",
	DRAG_END  : "DragEventEnd",
	DRAG_START  : "DragEventStart",
	TAP   : "TapEvent",
	DOUBLETAP  : "DoubleTapEvent",
	TAPHOLD  : "TapHoldEvent"
};