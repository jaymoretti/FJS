// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){return  window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback, element){window.setTimeout(callback, 1000 / 60);};})();


var mode = "debug";
var deviceAgent = navigator.userAgent.toLowerCase();
var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
var isIOS4 = deviceAgent.match(/(4_)/);
var isIOS5 = deviceAgent.match(/(5_)/);
var isAndroid = deviceAgent.match(/(android)/);

var loaded = 0;

$(function()
{
	var j = $.getJSON("json/config.json",
		function(json) {
		_json = json;

		require(["gestures/GestureManager"], function(a) { // gesture events need to be ready before everything else is set.
			require(["display/AbstractView", "display/ViewManager", "core/Application"], function(b) {
				_gestures = new GestureManager();
				initApp();
			});
		});
	}).error(function() {}).complete(function() {});
});


function initApp()
{
	for(i=0;i!=_json.preload.length;i++)
	{
		$.get(_json.folders.assets+_json.folders.structure+_json.preload[i], preloaded);
	}
}

function preloaded(data)
{
	$(".preloaded").append(data);
	loaded++;
	if(loaded == _json.preload.length)
		structureComplete();
}

function structureComplete()
{
	for(var i =0; i!=_json.pages.length; i++)
	{
		$("#wrap").append('<section id="'+_json.pages[i].id+'_container" class="section"></section>');
	}
	_application = new Application();
	_application.init();
}

function log()
{
	if(mode == "debug")
	{
		if(window.console)
		{
			if(!isIOS)
			{
				console.log(arguments);
			} else {
				for (var i = 0; i < arguments.length; i++) {
					console.log(arguments[i]);
				}
			}
		}
			
	}
}