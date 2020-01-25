var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
		document.querySelector("nav").style.top = "0";
	} else {
		document.querySelector("nav").style.top = "-10rem";
	}
	prevScrollPos = currentScrollPos;
};
