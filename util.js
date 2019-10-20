$(function () {
//	var btheme = "journal"
//	$(".bootswatch-theme").each(function() {
//		var bsURL = $(this).prop("href");
//		bsURL.replace("theme", btheme);
//		$(this).prop("href",bsURL.replace("theme", btheme));
//	})
	$(".page-item").each(function(){
        if($(this).children("a").text()==$("#pg-num").val()){
            $(this).addClass("active");
        }
    })
	function setTheme(paramTheme){
		var bcss = "https://bootswatch.com/4/"+paramTheme+"/bootstrap.css";
		var bmcss = "https://bootswatch.com/4/"+paramTheme+"/bootstrap.min.css";
		var vscss = "https://bootswatch.com/4/"+paramTheme+"/_variables.scss";
		var bscss = "https://bootswatch.com/4/"+paramTheme+"/_bootswatch.scss";
		
		$("#b-css").prop("href", bcss);
		$("#b-min-css").prop("href", bmcss);
		$("#v-scss").prop("href", vscss);
		$("#b-scss").prop("href", bscss);
	}
    //"cerulean", "cosmo", "cyborg", "darkly", "flatly", "journal", "litera",
	//"lumen", "lux", "materia", "minty", "pulse", "sandstone", "simplex", "sketchy", "slate", "solar",
	//"spacelab", "superhero", "united", "yeti"
	//setTheme("lumen")
    

})