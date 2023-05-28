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

// function eliminaAllDB() {

// 	const promise = indexedDB.databases();
// 	promise.then((databases) => {
// 		// console.log('=====');
// 		console.log(databases.name);
// 		console.log(databases.version);
// 		// console.log('=====');
// 		eliminar(databases.name, databases.version);
// 	});
// }

function displayData(nombre) {

	// open a read/write db transaction, ready for adding the data
	const transaction = db.transaction(nombre, "readwrite");

	// report on the success of opening the transaction
	transaction.oncomplete = (event) => {
		console.log('oncomplete');
	};

	transaction.onerror = (event) => {
		console.log('error');

	};

	// you would then go on to do something to this database
	// via an object store
	const objectStore = transaction.objectStore(nombre);
	// console.log(objectStore);
	// console.log(objectStore.indexNames);
	for (var i = 0; i < objectStore.indexNames.length; i++) {
		console.log(objectStore.indexNames[i]);
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
		// const objectStore = DBOpenRequest.createObjectStore(nombre, {
		// 	keyPath: nombre,
		// });
		// console.log(db.objectStoreNames);
		// db.close();
		displayData(nombre);

	};

	DBOpenRequest.onupgradeneeded = (event) => {
		const db = event.target.result;
		console.log(`Upgrading to version ${db.version}`);

		// Create an objectStore for this database
		const objectStore = db.createObjectStore(nombre, {
			keyPath: nombre + "Titulo",
		});

		// define what data items the objectStore will contain
		objectStore.createIndex("hours", "hours", {
			unique: false
		});
		objectStore.createIndex("minutes", "minutes", {
			unique: false
		});
		objectStore.createIndex("day", "day", {
			unique: false
		});
		objectStore.createIndex("month", "month", {
			unique: false
		});
		objectStore.createIndex("year", "year", {
			unique: false
		});

	};

}

function eliminar(nombre, version) {
	const DBDeleteRequest = window.indexedDB.deleteDatabase(nombre, version);

	DBDeleteRequest.onerror = (event) => {
		console.error("Error deleting database.");
	};

	DBDeleteRequest.onsuccess = (event) => {
		console.log("Database deleted successfully");
		listar();
		document.getElementById('modal_eliminar')
			.style.display = 'block'
		console.log(event.result); // should be undefined
	};
}

function listar(arguments) {
	const promise = indexedDB.databases();
	promise.then((databases) => {
		// console.log(databases);
		var tablaDB = document.getElementById("tbody");
		elimina_nodos(tablaDB);
		for (var i = 0; i < databases.length; i++) {
			let btn_eliminar = document.createElement("INPUT");
			// let btn_xxxx = document.createElement("INPUT");
			// let btn_xxxx = document.createElement("INPUT");
			let _tr = document.createElement("TR");
			let _tdnombre = document.createElement("TD");
			let _tdversion = document.createElement("TD");
			let _tdeliminar = document.createElement("TD");
			// w3-btn w3-block w3-green
			btn_eliminar.setAttribute("type", "button");
			btn_eliminar.setAttribute("value", "Elininar");
			btn_eliminar.setAttribute("class", "w3-btn w3-block w3-red btn_elininar_db");
			btn_eliminar.setAttribute("dbnoombre", databases[i].name);
			btn_eliminar.setAttribute("dbversion", databases[i].version);
			_tr.setAttribute("dbnoombre", databases[i].name);
			_tr.setAttribute("dbversion", databases[i].version);
			// console.log('=====');
			// console.log(databases[i].name);
			// console.log(databases[i].version);
			_tdnombre.textContent = databases[i].name;
			_tdversion.textContent = databases[i].version;

			_tdeliminar.appendChild(btn_eliminar);
			_tr.appendChild(_tdnombre);
			_tr.appendChild(_tdversion);
			_tr.appendChild(_tdeliminar);
			// console.log('=====');

			tablaDB.appendChild(_tr);
		}
		let btn_elininar_db = document.querySelectorAll(".btn_elininar_db");

		for (let i = 0; i < btn_elininar_db.length; i++) {
			btn_elininar_db[i].addEventListener("click", function (arguments) {
				console.log(this);
				eliminar(this.getAttribute("dbnoombre"), this.getAttribute("dbversion"));

			});
		}

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

	// btn_crear.addEventListener("click", function (arguments) {
	// 	let txt_dbnombre = document.getElementById("txt_dbnombre");
	// 	let txt_dbversion = document.getElementById("txt_dbversion");
	// 	crar(txt_dbnombre.value, txt_dbversion.value);
	// 	document.getElementById('modal_crear_db')
	// 		.style.display = 'none';

	// });
	// eliminaAllDB();
	listar();

});
