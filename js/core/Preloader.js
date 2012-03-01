function Preloader()
{
	var preloader, spinningWheel;
	var state = 0;
	var scope = this;
	
	this.init = function()
	{

		spinningWheel = new CanvasLoader('spinningwheel');
		spinningWheel.setColor('#ff0000');
		spinningWheel.setDiameter(76);
		spinningWheel.setDensity(160);
		spinningWheel.setRange(1.1);
		spinningWheel.setSpeed(3);
		spinningWheel.setFPS(41);
		spinningWheel.show();

		preloader = $("#preloader")[0];
	};

	this.show = function()
	{
		state = 1;
		_application.overlay.html(preloader);
		_application.overlay.fadeIn();
	};

	this.hide = function()
	{
		state = 0;
		_application.overlay.fadeOut("slow", function(){_application.overlay.html("");});
	};

	this.log = function(string)
	{
		if(state == 1)
		{
			$("#loaderconsole").html(string);
		}
	};

	this.load = function(page, callback)
	{
		scope.show();

		$.get(_json.folders.assets+_json.folders.sections+page.assets+"?t="+new Date().getTime(),
			function(data) {
				$("#"+page.id+"_container").append(data);
				var loadedTotal = $("#"+page.id+"_container img").length;
				var loadedCount = 0;
				
				$("#"+page.id+"_container img").each(
					function(){
						$(this).load(function(){
							loadedCount++;
							if(loadedCount == loadedTotal)
							{
								callback.call();
								setTimeout(function(){
									scope.hide();
								}, 1000);
								
							}
						});
					}
				);
			}
		);
	};
}

Preloader.prototype = {
	
};