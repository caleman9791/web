function login(arguments) {
	let txt_correo = document.getElementById("txt_correo");
	let txt_pass = document.getElementById("txt_pass");


	let btn_chek = document.getElementById("btn_chek_recordar_sesion");
	let btn_recuperar_pass = document.getElementById("btn_recuperar_pass");
	let btn_iniciar_sesion = document.getElementById("btn_iniciar_sesion");
	// let xxxx = document.getElementById("xxxxxxx");
	txt_correo.value = "";
	txt_pass.value = "";
	btn_iniciar_sesion.addEventListener("click", function (e) {
		e.preventDefault();
		console.log(this);
	});


	btn_chek.addEventListener("change", function (arguments) {
		console.log(this);
	});

	// xxxxxxx.addEventListener("click", function (arguments) {
	// 	console.log(this);
	// });

	// xxxxxxx.addEventListener("click", function (arguments) {

	// });


}
login();
