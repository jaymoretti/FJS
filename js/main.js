$(function(){
	require(["abstractview", "film", "challenge", "blog", "menu", "viewmanager"],
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