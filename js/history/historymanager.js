/**
 *	History Manager class... supposed to organize the old mess we left behind and avoid certain bugs.
 *
 *	@author      Jay Moretti <jay@madeinhaus.com>
 *	@author      Bruno Ribeiro <bruno@madeinhaus.com>
 *	@version     1.0.1
 *	@since       2011-10-30
 */
HistoryManager = {
	history : [],  // history steps
	hash : "",	   // main hash id
	sub : "",	   // sub area id
	/*
	*
	*	Initialize the history manager
	*
	**/
	initialize : function()
	{
		
		HistoryManager.getHash();
		// If there's a hash, we follow it.
		if(window.location.hash != "")
		{
			// set main menu.
			Nav.set(HistoryManager.hash, true);
		} else {
			// Set the default menu item
			Nav.set("welcome", true);
		}
		
		// add event listener to hash change
		$(window).bind("hashchange", HistoryManager.hashChange);

		return;
	}, 
	
	setHash : function(hash, sub)
	{

		$(window).unbind("hashchange", HistoryManager.hashChange);

		if(hash != HistoryManager.hash)
		{
			window.location.hash = "/"+hash;
		}

		setTimeout(function(){$(window).bind("hashchange", HistoryManager.hashChange)}, 1000);
	},

	getHash : function()
	{
		var hash = window.location.hash.slice(1,window.location.hash.length).split("/");
		//log(window.location.hash);
		log(hash);
		return;
	},

	hashChange : function(e)
	{
		e.preventDefault();
		
		HistoryManager.getHash();
		return;
	}
}