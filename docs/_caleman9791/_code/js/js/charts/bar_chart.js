var ctx = document.getElementById('myChart')
	.getContext('2d');
var myChart = null;

// Función para crear el gráfico inicial
function crearGrafico() {
	var data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [{
			label: '# of Votes',
			data: [12, 19, 3, 5, 2, 3],
			borderWidth: 1
		}]
	};
	var options = {
		scales: {
			y: {
				beginAtZero: true
			}
		}
	};
	myChart = new Chart(ctx, {
		type: 'bar',
		data: data,
		options: options
	});
}

// Función para crear el gráfico con los datos ingresados en el formulario
function crear() {
	var labelsInput = document.getElementById('labels');
	var dataInput = document.getElementById('data');
	var labels = labelsInput.value.split(',');
	var data = dataInput.value.split(',')
		.map(Number);
	myChart.data.labels = labels;
	myChart.data.datasets[0].data = data;
	myChart.update();
	labelsInput.value = '';
	dataInput.value = '';
	actualizarTabla(labels, data);
}

// Función para actualizar los datos del gráfico
function actualizar() {
	var labelsInput = document.getElementById('labels');
	var dataInput = document.getElementById('data');
	var labels = labelsInput.value.split(',');
	var data = dataInput.value.split(',')
		.map(Number);
	var existingLabels = myChart.data.labels;
	var existingData = myChart.data.datasets[0].data;
	for (var i = 0; i < labels.length; i++) {
		var label = labels[i];
		var dataIndex = existingLabels.indexOf(label);
		if (dataIndex !== -1) {
			existingData[dataIndex] = data[i];
		} else {
			existingLabels.push(label);
			existingData.push(data[i]);
		}
	}
	myChart.update();
	labelsInput.value = '';
	dataInput.value = '';
	actualizarTabla(existingLabels, existingData);
}

// Función para eliminar los datos del gráfico
function eliminar() {
	myChart.data.labels = [];
	myChart.data.datasets[0].data = [];
	myChart
	limpiarTabla();
}

// Función para actualizar la tabla con los datos
function actualizarTabla(labels, data) {
	var table = document.getElementById('dataTable');

	// Limpiar la tabla
	while (table.rows.length > 1) {
		table.deleteRow(1);
	}

	// Agregar los nuevos datos a la tabla
	for (var i = 0; i < labels.length; i++) {
		var row = table.insertRow(i + 1);
		var labelCell = row.insertCell(0);
		var dataCell = row.insertCell(1);
		labelCell.textContent = labels[i];
		dataCell.textContent = data[i];
	}
}

// Función para limpiar la tabla
function limpiarTabla() {
	var table = document.getElementById('dataTable');
	while (table.rows.length > 1) {
		table.deleteRow(1);
	}
}

// Crear el gráfico inicial al cargar la página
window.onload = crearGrafico;
