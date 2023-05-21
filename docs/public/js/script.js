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

	function galleta(arguments) {
		// body...
		document.cookie = "nombre=John Doe";

		// Leer el valor de una cookie
		let nombre = document.cookie;
		console.log(nombre);
	}

	// // Eliminar una cookie (estableciendo su fecha de caducidad en el pasado)
	// document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

	function functionName(arguments) {
		// body...
		// Guardar datos en LocalStorage
		localStorage.setItem("nombre", "John Doe");

		// Obtener datos de LocalStorage
		let nombre = localStorage.getItem("nombre");

		// Eliminar datos de LocalStorage
		// localStorage.removeItem("nombre");
		console.log(nombre);
	}

	function functionName(arguments) {
		// body...

		// Guardar datos en SessionStorage
		sessionStorage.setItem("nombre", "John Doe");

		// Obtener datos de SessionStorage
		let nombre = sessionStorage.getItem("nombre");
		console.log(nombre);

		// Eliminar datos de SessionStorage
		// sessionStorage.removeItem("nombre");
	}

	// // Abrir o crear una base de datos
	function functionName(arguments) {
		let request = indexedDB.open("miBaseDeDatos", 1);

	}

	// // Configurar eventos de éxito o error al abrir la base de datos
	// request.onsuccess = function(event) {
	// 	var db = event.target.result;
	// 	// Trabajar con la base de datos
	// };

	// request.onerror = function(event) {
	// 	console.error("Error al abrir la base de datos", event.target.error);
	// };

	// // Crear almacén de objetos dentro de la base de datos
	// request.onupgradeneeded = function(event) {
	// 	var db = event.target.result;
	// 	var objectStore = db.createObjectStore("usuarios", {
	// 		keyPath: "id"
	// 	});
	// 	// Configurar índices u otras opciones del almacén
	// };

	// // Trabajar con la base de datos (ejemplo de escritura)
	// var transaction = db.transaction("usuarios", "readwrite");
	// var objectStore = transaction.objectStore("usuarios");
	// var usuario = {
	// 	id: 1,
	// 	nombre: "John Doe",
	// 	edad: 30
	// };
	// var request = objectStore.add(usuario);

	// request.onsuccess = function(event) {
	// 	console.log("Usuario agregado correctamente");
	// };

	// request.onerror = function(event) {
	// 	console.error("Error al agregar usuario", event.target.error);
	// };

});

// C:\wamp64\www\Proyectos\caleman9791\web\docs\app\views\home\index.html