const formSignInToggleButton = document.querySelector(".form-sign-in-toggle-button");
const formSignUpToggleButton = document.querySelector(".form-sign-up-toggle-button");

formSignInToggleButton.addEventListener("click", function() {
	document.querySelector(".sign-in-form").style.display = "none";
	document.querySelector(".sign-up-form").style.display = "block";
	document.querySelector(".sign-in-form").classList.remove("form-toggle");
	document.querySelector(".sign-up-form").classList.add("form-toggle");
});

formSignUpToggleButton.addEventListener("click", function() {
	document.querySelector(".sign-up-form").style.display = "none";
	document.querySelector(".sign-in-form").style.display = "block";
	document.querySelector(".sign-up-form").classList.remove("form-toggle");
	document.querySelector(".sign-in-form").classList.add("form-toggle");
});
