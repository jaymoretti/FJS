function ViewManager()
{
	this.sections = [];
	this.current = null;
	this.currentCount = 0;
	this.currentChapter = 0;
	var scope = this;
	var currentId = "";
	this.overlayOpen = false;
	
	this.pageExists = function(id)
	{
		if(this.sections[id.toString().toLowerCase()])
			return true;

		return false;
	};

	this.set = function(id){
		currentId = id;
		if(!this.pageExists(id))
		{
			_application.preloader.load(_json.pages[scope.getIndex(id)],
				function()
				{
					scope.sections[id.toString().toLowerCase()] = new window[id]();
					scope.showPage();
				});
			
		} else {
			scope.showPage();
		}
	};

	this.showPage = function()
	{
		if(scope.current)
			scope.current.stop();

		scope.currentCount = scope.getIndex(currentId);

		scope.current = scope.sections[currentId.toString().toLowerCase()];

		scope.current.init();
	};

	this.next = function()
	{
		if(scope.currentCount < _json.pages.length-1)
		{
			scope.currentCount++;
			scope.set(_json.pages[scope.currentCount].id);
		}
	};

	this.prev = function()
	{
		if(scope.currentCount > 0)
		{
			scope.currentCount--;
			scope.set(_json.pages[scope.currentCount].id);
		}
	};

	this.getIndex = function(id)
	{
		for(var i =0; i!=_json.pages.length; i++)
		{
			if(_json.pages[i].id == id)
			{
				return i;
			}
		}
		return null;
	};

	this.gotoFrame = function (frameNumber)
	{

	};
}

ViewManager.prototype = {};