function eliminar_nodo(nodoEliminar) {

	var padre = nodoEliminar.parentNode;
	padre.removeChild(nodoEliminar);

	// body...
}

function elimina_nodos(contenedor) {
	while (contenedor.firstChild) {

		contenedor.removeChild(contenedor.firstChild)
	}
}

function crar(nombre, version) {
	const DBOpenRequest = window.indexedDB.open(nombre, version);

	// these two event handlers act on the database being opened successfully, or not
	DBOpenRequest.onerror = (event) => {
		console.error("Error loading database.");
	};

	DBOpenRequest.onsuccess = (event) => {
		console.info("Database initialized.");
		listar();
		// store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
		db = DBOpenRequest.result;
	};

}

function listar(arguments) {
	const promise = indexedDB.databases();
	promise.then((databases) => {
		// console.log(databases);
		var tablaDB = document.getElementById("tbody");
		elimina_nodos(tablaDB);
		for (var i = 0; i < databases.length; i++) {
			let _tr = document.createElement("TR");
			let _tdnombre = document.createElement("TD");
			let _tdversion = document.createElement("TD");
			_tr.setAttribute("dbnoombre", databases[i].name);
			_tr.setAttribute("dbversion", databases[i].version);
			console.log('=====');
			// console.log(databases[i].name);
			// console.log(databases[i].version);
			_tdnombre.textContent = databases[i].name;
			_tdversion.textContent = databases[i].version;
			_tr.appendChild(_tdnombre);
			_tr.appendChild(_tdversion);
			console.log('=====');

			tablaDB.appendChild(_tr);
		}

		// console.log(filas);

		let fila = document.querySelectorAll("#tbody tr");
		for (let i = 0; i < fila.length; i++) {

			fila[i].addEventListener("click", function (arguments) {
				let mensaje = document.querySelector(".mensaje");
				mensaje.textContent = "Estas trabajando con la base de datos "
					+ this.getAttribute("dbnoombre")
					+ " en su version #"
					+ this.getAttribute("dbversion");
				let btn_eliminar = document.getElementById("eliminar");
				btn_eliminar.setAttribute("dbnoombre", this.getAttribute("dbnoombre"));
				btn_eliminar.setAttribute("dbversion", this.getAttribute("dbversion"));
				console.log(this);
			});
		}

		function eliminar(nombre, version) {
			const DBDeleteRequest = window.indexedDB.deleteDatabase(nombre, version);

			DBDeleteRequest.onerror = (event) => {
				console.error("Error deleting database.");
			};

			DBDeleteRequest.onsuccess = (event) => {
				console.log("Database deleted successfully");

				console.log(event.result); // should be undefined
			};
		}

		let btn_eliminar = document.getElementById("eliminar");
		btn_eliminar.addEventListener("click", function (arguments) {
			eliminar(btn_eliminar.getAttribute("dbnoombre"), this.getAttribute("dbversion"));
			listar();
		});

	});

}
window.addEventListener("load", function (arguments) {
	// let script = document.querySelectorAll("script");
	// for (var i = 0; i < script.length; i++) {

	// 	if (script[i].getAttribute("src") == "../../js/chat.js") {
	// 		console.log(script[i]);
	// 		eliminar_nodo(script[i]);
	// 	}

	// }

	let btn_crear_db = document.getElementById("btn_crear_db");

	btn_crear_db.addEventListener("click", function (e) {
		console.log(this);

		document.getElementById('modal_crear_db')
			.style.display = 'block';
	});

	let btn_crear = document.getElementById("crear");
	btn_crear.addEventListener("click", function (arguments) {
		let txt_dbnombre = document.getElementById("txt_dbnombre");
		let txt_dbversion = document.getElementById("txt_dbversion");
		crar(txt_dbnombre.value, txt_dbversion.value);
		document.getElementById('modal_crear_db')
			.style.display = 'none';

	});

	listar();

});
