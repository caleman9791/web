window.addEventListener("load", function(arguments) {
	function imagenes(arguments) {
		let img = document.querySelectorAll("img");
		for (var i = 0; i < img.length; i++) {
			img[i].setAttribute("src", "./public/images/perfil.jpg");
		}
	}
	imagenes();
	let main = document.getElementById("main");
	main.setAttribute("style", "display: block !important");

});