Menu = {
	currentItem : null, 
	init : function(id)
	{
		$(".button").each(function()
		{
			$(this).hover(Menu.over, Menu.out);
			$(this).click(Menu.click);
		});

		if($("#"+id)[0]!=undefined)
			Menu.disable($("#"+id));
	},
	over : function(e)
	{
		e.preventDefault();
		$(this).css({backgroundPosition:$(this).css("background-position").replace("-35px", "0px")});
	},
	out : function(e)
	{
		e.preventDefault();	
		$(this).css({backgroundPosition:$(this).css("background-position").replace("0px", "-35px")});
	}, 
	click : function(e)
	{
		e.preventDefault();
		ViewManager.set($(this).attr("id"));
		Menu.disable($(this));
	},

	enable : function(target)
	{
		target.hover(Menu.over, Menu.out);
		target.click(Menu.click);
		target.trigger("mouseleave");
		target.css({cursor:'pointer'});
	}, 

	disable : function(target)
	{
		if(Menu.currentItem!=null)
			Menu.enable(Menu.currentItem);

		target.trigger("mouseenter");
		target.unbind("mouseenter mouseleave click");
		target.css({cursor:'default'});
		Menu.currentItem = target;
	}
}