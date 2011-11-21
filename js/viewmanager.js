ViewManager = {
	sections : {
				film : new Film(), 
				challenge : new Challenge(), 
				blog : new Blog()
			   },
	modules : {
				videolib : $(".videolib"),
				divedeeper : $(".divedeeper"),
				helpbig : $(".helpbig"),
				helpsmall : $(".helpsmall"),
				thefilm : $(".thefilm"),
			  },

	current : null,

	init : function (id)
	{
		ViewManager.set(id);
	},
	
	set : function (id)
	{
		// check if there's already a section on and that it's not the same as the current
		// then fade out the current and set up the next one. 
		if(ViewManager.current!=null && ViewManager.sections[id] != ViewManager.current)
		{
			ViewManager.current.animateOut();
			ViewManager.current = ViewManager.sections[id];
		}else{
			ViewManager.sections[id].init();
			ViewManager.current = ViewManager.sections[id];
		}
	}, 

	animationOutComplete : function()
	{
		if(!ViewManager.current.ready)
			ViewManager.current.init();
		else
			ViewManager.current.animateIn();
	}


}