VideoLibrary = 
{
	videoList : ["BegyIWHKVGo","sJTJR83wWfI", "KAxgpHWtLC0","1HwwynbG7pQ", "KJzWGkgFcTU", "qf_LzWQ0jpI", "Ue0kCn5YRE0", "h9iNuPM2SyM", "Hfmx4sZNhXU"],
	videoTitles : [],
	videoHtml : [],
	loadedCounter : 0,
	currentVideo : 0,

	initialize : function()
	{
		for(var i=0;i!=this.videoList.length; i++)
    	{
      		this.loadVideoData(this.videoList[i]);
    	}
	},

	loadVideoData : function(vID)
	{

		var scope = this;

		$.ajax(
		{
			url: 'http://gdata.youtube.com/feeds/api/videos/'+vID+'?v=2&alt=json',
			dataType: "jsonp",
			contentType: "application/json",


			success : function(data){
				if(Object.prototype.toString.call(data) == "[object Object]")
				{
					scope.gotVideoData(data);
				} 
				else if(Object.prototype.toString.call(data) == "[object String]")//
				{
					var obj = jQuery.parseJSON(data);
					scope.gotVideoData(obj);
				}
			},

			error: function(xhr, status, error) {
				log(xhr.status);
			}
		});
	},


	gotVideoData : function (data)
	{

		var videoId=data.entry.id.$t.toString().split(":")[3];

		var pos = this.getPos(videoId);

		var videoTitle=data.entry.title.$t.toLowerCase();
		var smallTitle = videoTitle;
		this.videoTitles[pos] = videoTitle;
		if(smallTitle.length>18)
		{
			smallTitle = smallTitle.slice(0, 18);
			smallTitle+="...";
		}

		this.videoHtml[pos] = '<div id="videoItem" onClick="VideoLibrary.changeVideo(\''+pos+'\')">'+
						 '  <div id="thumbnail">'+ 
						 '    <img src="http://i.ytimg.com/vi/'+videoId+'/default.jpg" width="130px" height="78px"/>'+
						 '  </div>'+
						 '  <div id="title">'+smallTitle+'</div>'+
						 '</div>';

		this.loadedCounter++;
		if(this.loadedCounter == this.videoList.length)
			this.writeCarousel();
  	
  		//log(data.entry.id.$t+"  "+data.entry.title.$t);
	},

	getPos : function(id)
	{
		for(i=0;i!=this.videoList.length;i++)
		{
			if(id==this.videoList[i])
				return i;
		}
	},

	writeCarousel : function ()
	{
		var html='';
  
		for(i=0;i!=this.videoHtml.length;i++)
			html+=this.videoHtml[i];

		$("#libraryContent").append(html);

		this.setSelectedVideo(this.currentVideo);

		$("#libraryContent").scrollbar({
			arrows: false
		});
	},

	setSelectedVideo : function (pos)
	{
		var i=0;

		$.each($("#thumbnailContainer").children("div"),
			function()
			{
				var style = $(this).children("#title").css("text-decoration");
				if(style == "underline")
					$(this).children("#title").css("text-decoration", "none");

				if(i==pos)
					$(this).children("#title").css("text-decoration", "underline");

      			i++;
			}
		)
	},

	changeVideo : function (pos)
	{
		var title = $('#libraryTitle');
		
		$("#libraryHeader").hover(function(){
			$("#libraryHeader").removeClass("libraryTitleBack");
			$("#libraryHeader").addClass("libraryTitleBackOver");
		},function(){
			$("#libraryHeader").removeClass("libraryTitleBackOver");
			$("#libraryHeader").addClass("libraryTitleBack");
		});
		
		$("#libraryHeader").removeClass("libraryTitle");
		$("#libraryHeader").addClass("libraryTitleBack");
		
		$("#libraryHeader").click(function()
		{
			Influxis.activateViewer();
			if($("#libraryHeader").hasClass("libraryTitleBack"))
				$("#libraryHeader").removeClass("libraryTitleBack");
				
			if($("#libraryHeader").hasClass("libraryTitleBackOver"))
				$("#libraryHeader").removeClass("libraryTitleBackOver");
				
			$("#libraryHeader").addClass("libraryTitle");
			$("#libraryHeader").unbind('click');
			$("#libraryHeader").unbind('mouseenter mouseleave');
		});
	
		$("#viewer").html('<iframe src="http://www.youtube.com/embed/'+this.videoList[pos]+'?&autoplay=1&showinfo=0" width="681px" height="385px"></iframe>');//.append(Viewer.menu);
	}
}