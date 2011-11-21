$(function(){
	require(["display/abstractview", "views/film", "views/challenge", "views/blog", "menu/menu", "display/viewmanager"],
		function() {
      		Menu.init('film');
      		ViewManager.init('film');
		}
	);
})

function log()
{
	if(window.console)
		console.log(arguments);
}

function capitalize(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}