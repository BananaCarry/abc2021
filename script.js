AOS.init();

$(".buton-text").click(function () {
	$(".sectiune-selectata").removeClass("sectiune-selectata");
	$(this).addClass("sectiune-selectata");
	if ($("#text-" + $(this).attr("id")).is(":visible")) {$(".sectiune-selectata").removeClass("sectiune-selectata"); return $(".texte").slideUp();}
	$(".texte").slideUp();	
	$("#text-" + $(this).attr("id")).slideDown();
});

function hideIcon(self){
	self.style.backgroundImage = 'none';
}