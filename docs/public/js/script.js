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

	function loadContent(url) {
		fetch(url)
			.then(response => response.text())
			.then(data => {
				document.getElementById('content').innerHTML = data;
			})
			.catch(error => {
				console.error('Error al cargar el contenido:', error);
			});
	}
	loadContent('./app/views/home/index.html');

});

// C:\wamp64\www\Proyectos\caleman9791\web\docs\app\views\home\index.html