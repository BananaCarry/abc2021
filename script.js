AOS.init();

$(".buton-text").click(function () {
	$(".sectiune-selectata").removeClass("sectiune-selectata");
	$(this).addClass("sectiune-selectata");
	if ($("#text-" + $(this).attr("id")).is(":visible")) return;
	$(".texte").slideUp();
	$("#text-" + $(this).attr("id")).slideDown();
});
