function enviacorreo(nombre, correo, mensaje) {
	var templateParams = {
		to_name: nombre,
		from_name: "APP COMERCIAL",
		message: mensaje,
		// para: "caleman9791@protonmail.com",
		para: correo,
	};

	emailjs.init("user_OiNFix0y4gUHm58GM2IJ0");
	emailjs.send('service_zs2cqlf', 'template_str3xhd', templateParams)
		.then(function (response) {
			console.log('SUCCESS!', response.status, response.text);
		}, function (error) {
			console.log('FAILED...', error);
		});

}
