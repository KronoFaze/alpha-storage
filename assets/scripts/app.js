$(function() {
	$(".ham-menu").on("click", function() {
		if ($(".collapse").hasClass("active")) {
			$(".collapse").removeClass("active");
		} else {
			$(".collapse").addClass("active");
		}
	});
});
