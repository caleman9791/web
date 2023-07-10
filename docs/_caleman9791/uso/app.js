function removerenlaces() {
	let enlace = document.querySelectorAll("a[href]");
	for (var i = 0; i < enlace.length; i++) {
		enlace[i].href = "#";
		console.log(enlace[i].href.value);

	}
}
window.addEventListener("DOMContentLoaded", (event) => {

	// alert("ok");
	removerenlaces();
	// console.log("===============");
	// removerenlaces();
});
