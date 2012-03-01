function Application()
{
	var counter = 0;
	var scope = this;
	this.preloader = this.viewmanager = null;
	
	this.init = function()
	{
		this.viewmanager = new ViewManager();
		this.preloader = new Preloader();
		this.preloader.init();
	};
}

Application.prototype = {};