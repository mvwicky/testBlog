$(document).ready(function(){
	var headerSpeed = 600;
	var contentSpeed = 1500;

	$("#nav_cont").hide();
	$("#title").hide();
	$("#content").hide();

	$("#nav_cont").fadeIn(headerSpeed);
	$("#title").fadeIn(headerSpeed);

	$("#content").fadeIn(contentSpeed);

	$.getJSON("../articles/testArticle.json", function(){
		
	});



	
});